package com.pratice.User_Services.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class Password {
    @Bean

    public PasswordEncoder Password_hash() {

        return new BCryptPasswordEncoder();
    }
}
