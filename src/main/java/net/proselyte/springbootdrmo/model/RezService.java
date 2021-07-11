package net.proselyte.springbootdrmo.model;

import java.util.List;

public interface RezService {
    Boolean add(Rez rez);

    void update(Rez rez);

    List<Rez> getRezs(String search);

    void delete(Rez rez);
}