package net.proselyte.springbootdrmo.repository;

import net.proselyte.springbootdrmo.model.Grid;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GridRepository extends JpaRepository<Grid, Long> {
   // User findUserByLoginAndPassword(String login, String password);
}
