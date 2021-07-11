package net.proselyte.springbootdrmo.repository;

import lombok.Data;
import net.proselyte.springbootdrmo.model.Grid;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface GridRepository extends JpaRepository<Grid, Long> {
    List<Grid> findGridsByNameIsLike(String name);
    List<Grid> findGridsBySubject(String subject);
    List<Grid> findGridsByStatus(String status);
    List<Grid> findGridsByNamethingIsLike(String name_thing);
    List<Grid> findGridsBySection(String selection);
    List<Grid> findGridsByPhere (String phere);
    List<Grid> findGridsByAdres (String adres);
    List<Grid> findGridsByValute (char valute);
    List<Grid> findGridsByDate  (Date date);
    List<Grid> findGridsByPriceBetween(int price_from, int price_to);
    List<Grid> findGridsByDateBetween(Date date_from, Date date_to);
    List<Grid> findGridsByDendBetween(Date date_end_from, Date date_end_to);
    Grid findGridByUserid(int id);
}
