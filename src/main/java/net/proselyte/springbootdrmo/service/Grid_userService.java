package net.proselyte.springbootdrmo.service;

import net.proselyte.springbootdrmo.model.Grid_user;
import net.proselyte.springbootdrmo.repository.Grid_userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Grid_userService {

    private final Grid_userRepository grid_userRepository;

    @Autowired
    private Grid_userService(Grid_userRepository grid_userRepository){
        this.grid_userRepository=grid_userRepository;
    }

    public Grid_user findByCode(int code, String IdUser){return grid_userRepository.findGrid_userByCodeAndIdUser(code, IdUser);}

    public Grid_user findById(Long id){
        return grid_userRepository.getOne(id);
    }

    public List<Grid_user> findAllGrid_user(){
        return grid_userRepository.findAll();
    }

    public void saveGrid(Grid_user grid_user){
        grid_userRepository.save(grid_user);
    }
    public void deleteById(Long id){
        grid_userRepository.deleteById(id);
    }
}
