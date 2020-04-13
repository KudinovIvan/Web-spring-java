package net.proselyte.springbootdrmo.controller;
import net.proselyte.springbootdrmo.model.User;
import net.proselyte.springbootdrmo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Controller
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @RequestMapping(value="/users")
    @ResponseBody
    public List<User> findAll() {
        return userService.findAll();
    }

    @ResponseBody
    @RequestMapping(value="/login")
    public Map<String, Object> test(String login, String password){
       Map<String, Object> result = new HashMap<String, Object>();
        User user = userService.findByLog(login, password);
        if(user!=null){
            result.put("login", login);
            result.put("password", password);
            result.put("success", true);}
        else result.put("success", false);
        return result;
    }


  @RequestMapping(value="/add")
  @ResponseBody
  public Map<String, Object> createUser( String login, String password, String fio) {
      Map<String, Object> result = new HashMap<String, Object>();
      User user = new User();
      user.setLogin(login);
      user.setPassword(password);
      user.setFio(fio);
      userService.saveUser(user);
      return result;
  }

    @GetMapping("user_delete/{id}")
    public String deleteUser(@PathVariable("id") Long id){
        userService.deleteById(id);
        return "redirect:/users";
    }

    @RequestMapping(value="/update")
    @ResponseBody
    public Map<String, Object> updateUser ( Long id, String login, String password, String fio){
        Map<String, Object> result = new HashMap<String, Object>();
        User user = userService.findById(id);
        if(login!="")
            user.setLogin(login);
        if(password!="")
            user.setPassword(password);
        result.put("fio1", user.getFio());
        if(fio!="")
           user.setFio(fio);
        result.put("fio2", fio);
        userService.saveUser(user);
        result.put("login", login);
        return result;
    }

 //   @PostMapping("user_update")
  //  public String updateUser(User user){
       // userService.saveUser(user);
      //  return "redirect:/users";
    //}
}