package net.proselyte.springbootdrmo.repository;

import net.proselyte.springbootdrmo.model.Site;
import net.proselyte.springbootdrmo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SiteRepository extends JpaRepository<Site, Long> {
}
