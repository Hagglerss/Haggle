package com.hagglerss.haggle.controller;

import com.hagglerss.haggle.util.SimpleSnowflakeGenerator;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@RequestMapping("/payment")
public class PaymentController {

    @RequestMapping("")
    public String movePayment() {
        return "payment/payment";
    }

    /* 결제 승인 후 로직  */
    @RequestMapping(value = "/complete", produces = "application/json; charset=UTF-8")
    @ResponseBody
    public String testPayCompleteJSON(@RequestBody Map<String, Object> paramMap){

        System.out.println(paramMap.get("payment_uid")); // imp_428796449209
        System.out.println(paramMap.get("order_uid")); // order_no_0005

        // 결제정보 검증 로직
        // - 정상 유저인지, 정상 결제인지
        // 검증실패 : 결제정보 에러 / 결제금액과 요청금액 비교
        // json으로 return
        return "test success";
    }

    @RequestMapping("/successPayment")
    public String moveSuccessPayment(HttpServletRequest request, HttpServletResponse response){
        // 결제 완료 로직 처리(DB) 후
        // 결제 완료 페이지로 이동
        return "";
    }


    /* 주문번호 생성 */
    @RequestMapping(value = "/getMerchantUid", produces = "application/json; charset=UTF-8")
    @ResponseBody
    public long getMerchantUid(){
       SimpleSnowflakeGenerator generator = new SimpleSnowflakeGenerator();
        long merchantUid = generator.generateId();
        System.out.println("merchantUid : " + merchantUid);

        return merchantUid;
    }




}
