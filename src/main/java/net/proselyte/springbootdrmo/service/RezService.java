package net.proselyte.springbootdrmo.service;

import net.proselyte.springbootdrmo.model.Bell;
import net.proselyte.springbootdrmo.model.Rez;
import net.proselyte.springbootdrmo.repository.BellRepository;
import net.proselyte.springbootdrmo.repository.RezRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RezService {

    private final RezRepository rezRepository;

    @Autowired
    private RezService(RezRepository rezRepository){
        this.rezRepository=rezRepository;
    }
    public List<Rez> findAllRez(){
        return rezRepository.findAll();
    }
    public List<Rez> findRez(String userid) {return rezRepository.findAllByUserid(userid);}
    public Rez findRezCode(int code, String userid) {return rezRepository.findByCodeAndUserid(code,userid);}
    public void saveRez(Rez rez){ rezRepository.save(rez);}
    public void delRez(Rez rez){rezRepository.delete(rez);}
}