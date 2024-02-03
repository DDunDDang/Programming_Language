package myApp.server.users;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {
    public List<Users> getUsers() {
        return List.of(
                Users.builder()
                        .id(1L)
                        .firstname("쓰토무")
                        .lastname("누시다")
                        .age(24).build(),
                Users.builder()
                        .id(2L)
                        .firstname("미라이")
                        .lastname("사키오카")
                        .age(28).build(),
                Users.builder()
                        .id(3L)
                        .firstname("이치로")
                        .lastname("고토")
                        .age(23).build()
        );
    }
}
