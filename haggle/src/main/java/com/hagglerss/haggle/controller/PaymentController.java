package com.hagglerss.haggle.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/payment")
public class PaymentController {

    @RequestMapping("")
    public String movePayment() {
        return "payment/payment";
    }


}
