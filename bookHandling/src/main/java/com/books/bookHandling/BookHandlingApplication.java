package com.books.bookHandling;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;
import com.books.bookHandling.role.Role;
import com.books.bookHandling.role.RoleRepository;

@EnableAsync
@SpringBootApplication
//@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@EnableJpaAuditing
public class BookHandlingApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookHandlingApplication.class, args);
	}



	@Bean
	public CommandLineRunner runner(RoleRepository roleRepository) {
		return args -> {
			if (roleRepository.findByName("USER").isEmpty()) {
				roleRepository.save(
						Role.builder().name("USER").build()
				);
			}
		};
	}
}
