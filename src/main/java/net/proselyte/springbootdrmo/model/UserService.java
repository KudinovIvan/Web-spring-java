package net.proselyte.springbootdrmo.model;


import java.util.List;

public interface UserService {
    Boolean add(User user);

    void update(User user);

    List<User> getUsers(String search);

    void delete(User user);
}
