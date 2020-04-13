package net.proselyte.springbootdrmo.controller;


import net.proselyte.springbootdrmo.model.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TestController {
    @ResponseBody
    @RequestMapping(value="/test1")
    public Map<String, Object> test(String login, String password){
        Map<String, Object> result = new HashMap<String, Object>();
        if (login.equals("Admin"))
            result.put("login", "Change");
        if (password.equals("123456"))
            result.put("password","0000");
        result.put("success", true);
        //result.put("password", "123456");
        //result.put("login", "Admin25");
        return result;
    }
}
