package com.pratice.User_Services.Services;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.pratice.User_Services.DTO.UserSingupDto;
import com.pratice.User_Services.Repositry.UserRepostry;

@Service
public class UserServices {

    @Autowired
    public UserRepostry userRepostry;

    // new account creation
    public ResponseEntity<Map<String, Object>> SingUp(UserSingupDto userSingup) {

        return null;
    }

}
