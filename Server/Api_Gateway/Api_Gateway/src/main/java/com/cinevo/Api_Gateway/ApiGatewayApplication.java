
package com.cinevo.Api_Gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;

@SpringBootApplication
public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}

	@Bean
	public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {

		return builder.routes()

				.route("user-service", r -> r
						.path("/api/user/**")
						.uri("http://localhost:8082"))

				.route("Admin-Service", r -> r
						.path("/api/admin/**")
						.uri("http://localhost:8085"))

				.build();
	}
}
