package com.hagglerss.haggle.util;

import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import org.hibernate.id.IdentifierGenerator;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;


import java.io.Serializable;
import java.time.Instant;

@Component
@NoArgsConstructor
public class SnowFlakeGenerator implements IdentifierGenerator {

    private static final int CASE_ONE_BITS = 10;  // 케이스 구분 비트 수
    private static final int CASE_TWO_BITS = 9; // 케이스 구분 비트 수
    private static final int SEQUENCE_BITS = 4; // 일련번호 시퀀스 비트 수

    private static final int maxSequence = (int) (Math.pow(2, CASE_ONE_BITS) - 1); // 2^5 -1 시퀀스의 최대값

    private static final long CUSTOM_EPOCH = 1420070400000L; // 커스텀 타임스탬프
    private volatile long sequence = 0L; // 마지막 비트 담당 시퀀스 값
    private int case_one = 10; // 추가적 케이스 식별자
    private int case_two = 0; // 추가적 케이스 식별자
    private volatile long lastTimestamp = -1L; // 마지막 ID 생성 타임스탬프

    /* 엔티티에 대해 ID 요청시 호출됨 */
    @Override
    public Serializable generate(SharedSessionContractImplementor sharedSessionContractImplementor, Object o) throws HibernateException {
        return nextId();
    }

    private static long timestamp() {
        return Instant.now().toEpochMilli() - CUSTOM_EPOCH;
    }

    /* 고유 ID 생성 */
    private synchronized long nextId(){
        long currentTimestamp = timestamp();

        if (currentTimestamp < lastTimestamp){
            sequence = (sequence +1) & maxSequence;
            if(sequence == 0){
                currentTimestamp = waitNextMillis(currentTimestamp);
            }
        } else {
            sequence = 0;
        }

        lastTimestamp = currentTimestamp;
        return makeId(currentTimestamp);
    }

    /* ID 생성 */
    private Long makeId(long currentTimestamp){
        long id = 0;
        id |= (currentTimestamp << CASE_ONE_BITS + CASE_TWO_BITS + SEQUENCE_BITS);
        id |= (case_one << CASE_TWO_BITS + SEQUENCE_BITS);
        id |= (case_two << SEQUENCE_BITS);
        id |= sequence;

        return id;
    }

    /* 동일 타임스탬프 중복 ID 생성 방지 */
    private long waitNextMillis(long currentTimestamp){
        while (currentTimestamp == lastTimestamp){
            currentTimestamp = timestamp();
        }
        return currentTimestamp;
    }
}
