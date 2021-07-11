package net.proselyte.springbootdrmo.model;

import java.util.List;

public interface SiteService {
    Boolean add(Site site);

    void update(Site site);

    List<Site> getSite(String search);

    void delete(Site site);
}
