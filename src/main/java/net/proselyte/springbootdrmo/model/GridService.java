package net.proselyte.springbootdrmo.model;


import java.util.List;

public interface GridService {
    Boolean add(Grid grid);

    void update(Grid grid);

    List<Grid> getGrids(String search);

    void delete(Grid grid);
}
