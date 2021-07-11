package net.proselyte.springbootdrmo.repository;


import net.proselyte.springbootdrmo.model.Grid_user;
import net.proselyte.springbootdrmo.model.Rez;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RezRepository extends JpaRepository<Rez, Long> {
    List<Rez> findAllByUserid(String userid);
    Rez findByCodeAndUserid(int code, String userid);
}
