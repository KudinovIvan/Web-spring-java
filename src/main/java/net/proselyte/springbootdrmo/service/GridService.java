package net.proselyte.springbootdrmo.service;

import net.proselyte.springbootdrmo.model.Grid;
import net.proselyte.springbootdrmo.repository.GridRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GridService {

    private final GridRepository gridRepository;

    @Autowired
    private GridService(GridRepository gridRepository){
        this.gridRepository=gridRepository;
    }

    public Grid findById(Long id){
        return gridRepository.getOne(id);
    }

    //public Grid findByLog(String login, String password){return gridRepository.findUserByLoginAndPassword(login,password);}

    public List<Grid> findAllGrid(){
        return gridRepository.findAll();
    }

    public void saveGrid(Grid grid){
        gridRepository.save(grid);
    }
    public void deleteById(Long id){
        gridRepository.deleteById(id);
    }
}
