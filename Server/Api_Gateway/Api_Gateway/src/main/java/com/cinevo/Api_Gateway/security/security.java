
package com.cinevo.Api_Gateway.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
public class security {

        @Bean
        public SecurityWebFilterChain securityWebFilterChain(
                        ServerHttpSecurity http) {

                return http
                                .csrf(csrf -> csrf.disable())
                                // .cors(cors -> cors.disable()) .cors(cors -> {})
                                .cors(cors -> {
                                })

                                .authorizeExchange(exchange -> exchange
                                                .anyExchange().permitAll())
                                .httpBasic(basic -> basic.disable())
                                .formLogin(form -> form.disable())
                                .build();
        }
}
