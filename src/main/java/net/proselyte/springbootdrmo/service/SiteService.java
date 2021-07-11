package net.proselyte.springbootdrmo.service;

import net.proselyte.springbootdrmo.model.Grid;
import net.proselyte.springbootdrmo.model.Grid_user;
import net.proselyte.springbootdrmo.model.Site;
import net.proselyte.springbootdrmo.repository.Grid_userRepository;
import net.proselyte.springbootdrmo.repository.SiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SiteService {

    private final SiteRepository siteRepository;

    @Autowired
    private SiteService(SiteRepository siteRepository){
        this.siteRepository=siteRepository;
    }

    public List<Site> findAllSite(){
        return siteRepository.findAll();
    }
    public void saveSite(Site site){
        siteRepository.save(site);
    }
}