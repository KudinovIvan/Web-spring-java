package net.proselyte.springbootdrmo.service;

import net.proselyte.springbootdrmo.model.Bell;
import net.proselyte.springbootdrmo.repository.BellRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BellService {

    private final BellRepository bellRepository;

    @Autowired
    private BellService(BellRepository bellRepository){
        this.bellRepository=bellRepository;
    }
    public Bell findCode(String code, int User) { return bellRepository.findByCodeAndUser(code, User);}
    public List<Bell> findAllBell(){
        return bellRepository.findAll();
    }
    public void saveBell(Bell bell){ bellRepository.save(bell);}
    public void delBell(Bell bell){bellRepository.delete(bell);}
}