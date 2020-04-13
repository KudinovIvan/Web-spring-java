package net.proselyte.springbootdrmo.service;

import net.proselyte.springbootdrmo.model.User;
import net.proselyte.springbootdrmo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    private UserService(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    public User findById(Long id){
        return userRepository.getOne(id);
    }

    public User findByLog(String login, String password){return userRepository.findUserByLoginAndPassword(login,password);}

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public void saveUser(User user){
        userRepository.save(user);
    }
    public void deleteById(Long id){
        userRepository.deleteById(id);
    }
}
