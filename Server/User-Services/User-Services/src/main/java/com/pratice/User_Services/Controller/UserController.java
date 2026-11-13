package com.pratice.User_Services.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
// import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pratice.User_Services.DTO.UserSingupDto;
import com.pratice.User_Services.Services.UserServices;

/**
 * UserController
 */
@RestController
@RequestMapping("/api/user")
@CrossOrigin("http://localhost:5173")
public class UserController {

    @Autowired
    public UserServices userServices;

    @PostMapping ("/singup")

    public ResponseEntity<Map<String, Object>> UserSingup(@RequestBody UserSingupDto userSingup) {

   return userServices.SingUp(userSingup);




    }

}