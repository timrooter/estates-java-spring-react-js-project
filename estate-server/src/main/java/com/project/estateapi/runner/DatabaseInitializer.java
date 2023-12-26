package com.project.estateapi.runner;

import com.project.estateapi.model.Estate;
import com.project.estateapi.model.User;
import com.project.estateapi.security.WebSecurityConfig;
import com.project.estateapi.service.EstateService;
import com.project.estateapi.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Component
public class DatabaseInitializer implements CommandLineRunner {

    private final UserService userService;
    private final EstateService estateService;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (!userService.getUsers().isEmpty()) {
            return;
        }
        USERS.forEach(user -> {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userService.saveUser(user);
        });
        ESTATES.forEach(estateService::saveEstate);
        log.info("Database initialized");
    }

    private static final List<User> USERS = Arrays.asList(
            new User("admin", "admin", "Admin", "admin@mycompany.com", WebSecurityConfig.ADMIN, null, "1"),
            new User("user", "user", "User", "user@mycompany.com", WebSecurityConfig.USER, null, "2")
    );

    private static final List<Estate> ESTATES = Arrays.asList(
//            new Estate("I, Tonya", "https://m.media-amazon.com/images/M/MV5BMjI5MDY1NjYzMl5BMl5BanBnXkFtZTgwNjIzNDAxNDM@._V1_SX300.jpg","фавафвыафафафвафывавфвфа"),
//            new Estate("American Pie", "https://m.media-amazon.com/images/M/MV5BMTg3ODY5ODI1NF5BMl5BanBnXkFtZTgwMTkxNTYxMTE@._V1_SX300.jpg", "afdsdafssafdasfasdfadsfasdfadfsdafs"),
//            new Estate("I Am Legend", "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", "sdadsaasdsdaasdsad")
       );
}
