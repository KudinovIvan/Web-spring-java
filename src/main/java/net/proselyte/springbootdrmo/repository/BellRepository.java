package net.proselyte.springbootdrmo.repository;

import net.proselyte.springbootdrmo.model.Bell;
import net.proselyte.springbootdrmo.model.Grid_user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BellRepository extends JpaRepository<Bell, Long> {
    Bell findByCodeAndUser(String code, int User);
}
