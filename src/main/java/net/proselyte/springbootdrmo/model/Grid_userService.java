package net.proselyte.springbootdrmo.model;


import java.util.List;

public interface Grid_userService {
    Boolean add(Grid_user grid_user);

    void update(Grid_user grid_user);

    List<Grid_user> getGrids(String search);

    void delete(Grid_user grid_user);
}
