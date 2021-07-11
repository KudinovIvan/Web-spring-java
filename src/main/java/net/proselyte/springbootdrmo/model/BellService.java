package net.proselyte.springbootdrmo.model;

import java.util.List;

public interface BellService {
    Boolean add(Bell bell);

    void update(Bell bell);

    List<Bell> getBells(String search);

    void delete(Bell bell);
}
