package com.pratice.User_Services.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pratice.User_Services.DTO.UserSingupDto;

/**
 * UserController
 */
@RestController
@RequestMapping("/api/user")
public class UserController {

    @PostMapping("/singup")

    public ResponseEntity<Map<String, Object>> UserSingup(@RequestBody UserSingupDto userSingup) {
        Map<String, Object> user = new HashMap<>();

        user.put("user data", userSingup);
        user.put("Statuscode", 201);
        user.put("message", "USer accoutn created");
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

}