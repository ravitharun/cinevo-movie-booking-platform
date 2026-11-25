package com.pratice.Admin_Service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;

import com.pratice.Admin_Service.DTO.AddTheatreDto;
import com.pratice.Admin_Service.Services.AddTheatreServices;
import com.pratice.Admin_Service.config.RestClientapi;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("http://localhost:5173")
public class Theatre {

    @Autowired
    public RestClientapi api;
    @Autowired
    public AddTheatreServices addTheatreServices;

    @PostMapping("/Add/Theater")

    public String AddTheater(@RequestBody AddTheatreDto AddTheatre) {

        return addTheatreServices.AddnewTheatre(AddTheatre);
    }
}