package com.hagglerss.haggle.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/cs")
public class CSController {

    @RequestMapping("")
    public String moveMainCS(){
        return "cs/cs_main";
    }

    @RequestMapping("/write")
    public String moveWritePage(){
        return "cs/write";
    }


}
