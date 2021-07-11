package net.proselyte.springbootdrmo.service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import net.proselyte.springbootdrmo.model.Grid;
import net.proselyte.springbootdrmo.repository.GridRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class GridService {

    private final GridRepository gridRepository;

    @Autowired
    private GridService(GridRepository gridRepository){
        this.gridRepository=gridRepository;
    }

    public Grid findById(int id){ return gridRepository.findGridByUserid(id);}

    public List<Grid> find_key(String name) {return gridRepository.findGridsByNameIsLike(name);}
    public List<Grid> find_key_subject(String subject) {return gridRepository.findGridsBySubject(subject);}
    public List<Grid> find_key_status(String status) {return gridRepository.findGridsByStatus(status);}
    public List<Grid> find_key_object(String name_thing) {return gridRepository.findGridsByNamethingIsLike(name_thing);}
    public List<Grid> find_key_section(String section) {return gridRepository.findGridsBySection(section);}
    public List<Grid> find_key_adres(String adres) {return gridRepository.findGridsByAdres(adres);}
    public List<Grid> find_key_phere(String phere) {return gridRepository.findGridsByPhere(phere);}
    public List<Grid> find_key_price(int price_from, int price_to) {return gridRepository.findGridsByPriceBetween(price_from, price_to);}
    public List<Grid> find_key_dateBetween(Date date_from, Date date_to) {return gridRepository.findGridsByDateBetween(date_from, date_to);}
    public List<Grid> find_key_date_end(Date date_end_from, Date date_end_to) {return gridRepository.findGridsByDendBetween(date_end_from,date_end_to);}
    public List<Grid> find_key_valute(char valute) {return gridRepository.findGridsByValute(valute);}

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
