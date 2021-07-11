package net.proselyte.springbootdrmo.repository;

import net.proselyte.springbootdrmo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByLoginAndPassword(String login, String password);
    User findUserByFio(String fio);
    User findUserByLogin(String login);
    List<User> findUserByLoginIsLike(String login);
}
