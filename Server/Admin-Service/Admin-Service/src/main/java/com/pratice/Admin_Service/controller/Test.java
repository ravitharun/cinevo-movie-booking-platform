package com.pratice.Admin_Service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.client.RestClient;

import com.pratice.Admin_Service.config.RestClientapi;

@RestController
public class Test {
    @Autowired
    public RestClientapi api;

    @GetMapping("/api/test")
    public String v() {
        String data = "10001";
        String data_ = "10001";

        return api.restclient().post()
                .uri("http://localhost:8081/test/params?usrid=" + data)

                .retrieve()
                .body(String.class);
    }
}