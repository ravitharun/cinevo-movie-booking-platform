package com.pratice.Admin_Service.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
public class RestClientapi {

    @Bean

    public RestClient restclient() {

        return RestClient.create();

    }
}
