package myApp.server.users;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Users {
    @Id
    private Long id;
    private String firstname;
    private String lastname;
    private Integer age;
}
