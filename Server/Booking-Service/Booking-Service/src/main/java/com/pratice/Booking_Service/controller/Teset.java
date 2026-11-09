package com.pratice.Booking_Service.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Teset {
    @PostMapping("/Book")
    public String chek(@RequestBody String data) {
        System.err.println("data" + data);
        return "data from booking serv" + data;
    }

    @PostMapping("/test/params")

    public String check_ParamData(@RequestParam("usrid") String userid) {
        System.err.println(userid + "USERID");
        return "USerid" + userid;
    }
}
