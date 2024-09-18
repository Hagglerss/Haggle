package com.hagglerss.haggle.util;

public class SimpleSnowflakeGenerator {

    private static final int TIMESTAMP_BITS = 41; // 타임스탬프 비트 수
    private static final int SEQUENCE_BITS  = 12; // 시퀀스를 위한 비트 수
    private static final long MAX_SEQUENCE = (1L << SEQUENCE_BITS) -1;
    private static final long CUSTOM_EPOCH = 1420070400000L; // Custom epoch (2015-01-01)

    private long sequence = 0L;
    private long lastTimestamp = -1L;

    // id 생성
    public synchronized long generateId(){
        long currentTimestamp = timestamp();

        // 현재 시간이 마지막 생성 시간보다 빠르면 에러 처리
        if(currentTimestamp < lastTimestamp){
            throw new RuntimeException("Clock moved backwards. Refusing to generate id");
        }

        // 동일 타임스탬프에서 여러개의 ID 생성시 시퀀스 증가시킴
        if(currentTimestamp == lastTimestamp){
            sequence = (sequence +1) & MAX_SEQUENCE;
            if(sequence == 0){
                currentTimestamp = waitNextMillis(currentTimestamp); // 시퀀스가 full 이면 다음 밀리초로 대기
            }
        } else {
            sequence = 0; // 새 타임스탬프에서 시퀀스 초기화
        }
        lastTimestamp = currentTimestamp;

        // 최종 ID 생성 : 타임스탬프와 시퀀스 결합
        return ((currentTimestamp - CUSTOM_EPOCH) << SEQUENCE_BITS) | sequence;
    }

    private long timestamp(){
        return System.currentTimeMillis();
    }

    // 현재와 다른 밀리초를 기다리는 메서드
    private long waitNextMillis(long currentTimestamp){
        while(currentTimestamp == lastTimestamp){
            currentTimestamp = timestamp();
        }
        return currentTimestamp;
    }
}

