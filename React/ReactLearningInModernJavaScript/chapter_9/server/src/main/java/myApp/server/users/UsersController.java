package myApp.server.users;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
@CrossOrigin
public class UsersController {
    private final UsersService service;
    @GetMapping("/users")
    public ResponseEntity getUsers() {
        return new ResponseEntity<>(service.getUsers(), HttpStatus.OK);
    }
}
