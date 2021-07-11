package net.proselyte.springbootdrmo.repository;

import net.proselyte.springbootdrmo.model.Grid;
import net.proselyte.springbootdrmo.model.Grid_user;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Grid_userRepository extends JpaRepository<Grid_user, Long> {
    Grid_user findGrid_userByCodeAndIdUser(int code, String IdUser);
}
