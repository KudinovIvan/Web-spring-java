package net.proselyte.springbootdrmo.controller;
import net.proselyte.springbootdrmo.model.*;
import net.proselyte.springbootdrmo.service.GridService;
import net.proselyte.springbootdrmo.service.Grid_userService;
import net.proselyte.springbootdrmo.service.SiteService;
import net.proselyte.springbootdrmo.service.UserService;
import net.proselyte.springbootdrmo.service.BellService;
import net.proselyte.springbootdrmo.service.RezService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import java.io.IOException;
import java.net.URL;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import static java.lang.String.valueOf;


@Controller
public class UserController {

    private final UserService userService;
    private final GridService gridService;
    private final Grid_userService grid_userService;
    private final SiteService siteService;
    private final BellService bellService;
    private final RezService rezService;
    List<Grid> grid = new ArrayList<Grid>();
    List<Grid> bell12 = new ArrayList<Grid>();
    List<Grid> bell_modern = new ArrayList<Grid>();
    List<User> user = new ArrayList<User>();
    List<Rez> rez = new ArrayList<Rez>();
    int[] bell_mass = new int[100];
    boolean b1 = true;
    String id_user = "";

    @Autowired
    public UserController(BellService bellService, UserService userService, GridService gridService,
                          Grid_userService grid_userService, SiteService siteService, RezService rezService) {
        this.userService = userService;
        this.gridService = gridService;
        this.bellService = bellService;
        this.grid_userService = grid_userService;
        this.siteService = siteService;
        this.rezService = rezService;
    }

    @RequestMapping(value="/users")
    @ResponseBody
    public List<User> findAll() {
        if (b1) {
            user = userService.findAll();
            for(int i = 0; i<user.size();i++) {
                if (user.get(i).getLogin().equals("Admin")){
                    user.remove(i);
                }
            }
        }
        return user;
    }

    @RequestMapping(value="/grids")
    @ResponseBody
    public List<Grid> findAllGrid() {
        int i = 0;
        //grid = new ArrayList<Grid>();
        if(!grid.equals(new ArrayList<Grid>())) {
            while (i < grid.size()) {
                Date dend = grid.get(i).getDend();
                DateFormat df3 = new SimpleDateFormat("dd-MMM-yyyy");
                String str3 = df3.format(dend);
                grid.get(i).setDendStr(str3);
                i++;
            }
        }
        return grid; }

    @RequestMapping(value="/bell_color_count")
    @ResponseBody
    public void BellColorCount(String id) {
        User user = userService.findById(Long.parseLong(id));
        if(user.getColor().equals("red")){
            user.setColor("no");
        }
        userService.saveUser(user);
    }

    @RequestMapping(value="/rez_color_count")
    @ResponseBody
    public void RezColorCount(String id) {
        User user = userService.findById(Long.parseLong(id));
        if(user.getRez().equals("red")){
            user.setRez("no");
        }
        userService.saveUser(user);
    }

    @RequestMapping(value="/bell_color")
    @ResponseBody
    public void BellColor(String id) {
        User user = userService.findById(Long.parseLong(id));
        if(user.getColor().equals("red")){
            user.setColor("no");
        }
        else {
            user.setColor("red");
        }
        userService.saveUser(user);
    }

    @RequestMapping(value="/bell_color_user")
    @ResponseBody
    public String BellColorUser(String id) {
        if(!id.equals("")) {
            User user = userService.findById(Long.parseLong(id));
            return user.getColor();
        }
        else return "";
    }

    @RequestMapping(value="/rez_color_user")
    @ResponseBody
    public String RezColorUser(String id) {
        if(!id.equals("")) {
            User user = userService.findById(Long.parseLong(id));
            return user.getRez();
        }
        else return "";
    }

    @RequestMapping(value="/id_user")
    @ResponseBody
    public void ID(String id) { id_user=id;}

    @RequestMapping(value="/bell_save")
    @ResponseBody
    public void BellSave(String code, String name, String object, String status,
                         String price1, String subject, String phone1, String name_thing1,
                         String trademark1, String volume1, String ei1, String valute1,
                         String date, String date_end, String definition, String bell_id/*, String start_price*/) throws ParseException {

        Bell bell = bellService.findCode(code,Integer.parseInt(id_user));
        if( /*Integer.parseInt(start_price)>= Integer.parseInt(price1) &&*/ !price1.equals("")){
            int price = Integer.parseInt(price1);
            bell.setPrice(price);
        }
        if(!code.equals("")){
            bell.setCode(code);
        }
        if(!volume1.equals("")){
            int volume = Integer.parseInt(volume1);
            bell.setVolume(volume);
        }
        if(!valute1.equals("")){
            char valute = valute1.charAt(0);
            bell.setValute(valute);}
        if(!date.equals("")) {
            Date date1 = new SimpleDateFormat("MM/dd/yyyy").parse(date);
            bell.setDate(date1);
        }
        if(!date_end.equals("")){
            String month = date_end.substring(5, 7);
            String day = date_end.substring(8, 10);
            String year = date_end.substring(0, 4);
            date_end = month + "/" + day + "/" + year;
            Date date1_end=new SimpleDateFormat("MM/dd/yyyy").parse(date_end);
            bell.setDend(date1_end);
        }
        bell.setName(name);
        bell.setObject(object);
        bell.setStatus(status);
        bell.setSunject(subject);
        bell.setPhone(phone1);
        bell.setNamething(name_thing1);
        bell.setTrademark(trademark1);
        bell.setEi(ei1);
        bell.setDefinition(definition);
        bell.setBell(bell_id);
        bellService.saveBell(bell);
    }

    @RequestMapping(value="/bells")
    @ResponseBody
    public List<Grid> findAllBell() {
        bell12 = new ArrayList<Grid>();
        User user = userService.findById(Long.parseLong(id_user));
        Grid grid1 = new Grid();
        Bell bell = new Bell();
        String str = user.getBell();
        for(int i = 0; i<100; i++){
            bell_mass[i]= 0;
        }
        for (int i = 0; !str.equals(""); i++) {
            if (str.indexOf(' ') == -1) {
                bell_mass[i] = Integer.parseInt(str);
                str = "";
            } else {
                bell_mass[i] = Integer.parseInt(str.substring(0, str.indexOf(' ') + 1).trim());
                str = str.substring(str.indexOf(' ') + 1).trim();
            }
        }
        for (int i = 0; bell_mass[i] != 0; i++) {
            grid1 = gridService.findById(bell_mass[i]);
            bell = bellService.findCode(grid1.getCode(),Integer.parseInt(id_user));
            if (bell != null){
                grid1.setPrice(bell.getPrice());
                grid1.setCode(bell.getCode());
                grid1.setVolume(valueOf(bell.getVolume()));
                grid1.setValute(bell.getValute());
                grid1.setDate(bell.getDate());
                grid1.setDend(bell.getDend());
                grid1.setName(bell.getName());
                grid1.setObject(bell.getObject());
                grid1.setStatus(bell.getStatus());
                grid1.setSubject(bell.getSunject());
                grid1.setPhone(bell.getPhone());
                grid1.setNamething(bell.getNamething());
                grid1.setTrademark(bell.getTrademark());
                grid1.setEi(bell.getEi());
                grid1.setDefinition(bell.getDefinition());
                grid1.setBell(bell.getBell());
            }
            Date dend = grid1.getDend();
            DateFormat df3 = new SimpleDateFormat("dd-MMM-yyyy");
            String str3 = df3.format(dend);
            grid1.setDendStr(str3);
            bell12.add(grid1);
        }
        return bell12;
    }

    @RequestMapping(value="/rez_id")
    @ResponseBody
    public void findAllRezId(String id) {
        rez =  rezService.findRez(id);}

    @RequestMapping(value="/rez")
    @ResponseBody
    public List<Rez> findAllRez() {
        return rez; }

    @RequestMapping(value="/bell_user")
    @ResponseBody
    public int bell_user (String id_user, String id) {
        System.out.println(id);
        User user = userService.findById(Long.parseLong(id_user));
        String idBell = user.getBell();
        int b=0;
        for(int i = 0; bell_mass[i]!=0;i++) {
            if(bell_mass[i]==Integer.parseInt(id)){
                b=1;
            }
        }
        if(b != 1) {
            idBell = idBell + id + " ";
            user.setBell(idBell);
            userService.saveUser(user);
        }
        return b;
    }

    @RequestMapping(value="/bell_add")
    @ResponseBody
    public /*List<Grid>*/ void bell( String code, String name, String object, String status,
                                     String price1, String subject, String phone1, String name_thing1,
                                     String trademark1, String volume1, String ei1, String valute1,
                            String date, String date_end, String definition, String bell_id) throws ParseException {
        Bell bell = new Bell();
        if(!price1.equals("")){
        int price = Integer.parseInt(price1);
            bell.setPrice(price);
        }
        if(!code.equals("")){
            bell.setCode(code);
        }
        if(!volume1.equals("")){
            int volume = Integer.parseInt(volume1);
            bell.setVolume(volume);
        }
        if(!valute1.equals("")){
            char valute = valute1.charAt(0);
            bell.setValute(valute);}
        if(!date.equals("")) {
            Date date1 = new SimpleDateFormat("MM/dd/yyyy").parse(date);
            bell.setDate(date1);
        }
        if(!date_end.equals("")){
            String month = date_end.substring(5, 7);
            String day = date_end.substring(8, 10);
            String year = date_end.substring(0, 4);
            date_end = day + "/" + month + "/" + year;
            System.out.println(date_end);
            Date date1_end=new SimpleDateFormat("MM/dd/yyyy").parse(date_end);
            bell.setDend(date1_end);
        }
        bell.setName(name);
        bell.setObject(object);
        bell.setStatus(status);
        bell.setSunject(subject);
        bell.setPhone(phone1);
        bell.setNamething(name_thing1);
        bell.setTrademark(trademark1);
        bell.setEi(ei1);
        bell.setDefinition(definition);
        bell.setUser(Integer.parseInt(id_user));
        bell.setBell(bell_id);
        System.out.println(bell.getBell());
        bellService.saveBell(bell);
    }

    @RequestMapping(value="/grids_user")
    @ResponseBody
    public List<Grid_user> findAllGrid_user() {return grid_userService.findAllGrid_user(); }

    @ResponseBody
    @RequestMapping(value="/login")
    public Map<String, Object> test_login(String login){
        Map<String, Object> result = new HashMap<String, Object>();
        User user = userService.findByLogin(login);
        if(user!=null){
            result.put("success", true);
        }
        else result.put("success", false);
        return result;
    }

    @ResponseBody
    @RequestMapping(value="/password")
    public Map<String, Object> test_password(String login, String password){
        Map<String, Object> result = new HashMap<String, Object>();
        User user = userService.findByPassword(login, password);
        if(user!=null){
            result.put("login", login);
            result.put("password", password);
            result.put("success", true);
            result.put("users_right", user.getUser_right());
            grid = new ArrayList<Grid>();
            result.put("id", user.getId());
        }
        else result.put("success", false);
        return result;
    }

    @ResponseBody
    @RequestMapping(value="/key_word")
    public List<Grid> key(String search, String selection, String status, String subject, String adres,
                          String phere, String price_from, String price_to, String valute1, String date_from,
                          String date_to, String date_end_from, String date_end_to) throws ParseException {
        grid = new ArrayList<Grid>();
        Date date1_from = null;
        Date date1_to = null;
        if(!date_from.equals("")) {
            date1_from = new SimpleDateFormat("yyyy-MM-dd").parse(date_from);
            if(!date_to.equals("")) {
                date1_to = new SimpleDateFormat("yyyy-MM-dd").parse(date_to);

                if (!gridService.find_key_dateBetween(date1_from, date1_to).equals(new ArrayList<Grid>())) {
                    if (grid == null) {
                        grid = gridService.find_key_dateBetween(date1_from, date1_to);
                    } else {
                        grid.addAll(gridService.find_key_dateBetween(date1_from, date1_to));
                    }
                }
            }
        }
        Date date1_end_from = null;
        Date date1_end_to = null;
        if(!date_end_from.equals("")) {
            if(!date_end_to.equals("")) {
                date1_end_to = new SimpleDateFormat("yyyy-MM-dd").parse(date_end_to);
                date1_end_from = new SimpleDateFormat("yyyy-MM-dd").parse(date_end_from);
                if (!gridService.find_key_date_end(date1_end_from, date1_end_to).equals(new ArrayList<Grid>())) {
                    if (grid == null) {
                        grid = gridService.find_key_date_end(date1_end_from, date1_end_to);
                    } else {
                        grid.addAll(gridService.find_key_date_end(date1_end_from, date1_end_to));
                    }
                }
            }
        }

        int price1_from= 0;
        if(!price_from.equals("")){
             price1_from = Integer.parseInt(price_from);
        }
        int price1_to=0;
        if(!price_to.equals("")){
            price1_to = Integer.parseInt(price_to);
        }
        char valute = '0';
        if(!valute1.equals("")) {
            valute = valute1.charAt(0);
        }
        if(!gridService.find_key("%"+search+"%").equals(new ArrayList<Grid>())) {
            if(grid==null) {
                grid = gridService.find_key("%"+search+"%");
            }
            else{
                grid.addAll(gridService.find_key("%"+search+"%"));
            }
        }
        if (!gridService.find_key_object("%"+search+"%").equals(new ArrayList<Grid>())){
            if(grid==null) {
                grid = gridService.find_key_object("%"+search+"%");
            }
            else{
                grid.addAll(gridService.find_key_object("%"+search+"%"));
            }
        }
        if(!search.equals("")) {
            String searchToCase = search.substring(0, 1).toUpperCase() + search.substring(1).toLowerCase();
            if (!gridService.find_key("%" + searchToCase + "%").equals(new ArrayList<Grid>())) {
                if (grid == null) {
                    grid = gridService.find_key("%" + searchToCase + "%");
                } else {
                    grid.addAll(gridService.find_key("%" + searchToCase + "%"));
                }
            }
            if (!gridService.find_key_object("%" + searchToCase + "%").equals(new ArrayList<Grid>())) {
                if (grid == null) {
                    grid = gridService.find_key_object("%" + searchToCase + "%");
                } else {
                    grid.addAll(gridService.find_key_object("%" + searchToCase + "%"));
                }
            }
            searchToCase = search.substring(0, 1).toLowerCase() + search.substring(1).toLowerCase();
            if (!gridService.find_key("%" + searchToCase + "%").equals(new ArrayList<Grid>())) {
                if (grid == null) {
                    grid = gridService.find_key("%" + searchToCase + "%");
                } else {
                    grid.addAll(gridService.find_key("%" + searchToCase + "%"));
                }
            }
            if (!gridService.find_key_object("%" + searchToCase + "%").equals(new ArrayList<Grid>())) {
                if (grid == null) {
                    grid = gridService.find_key_object("%" + searchToCase + "%");
                } else {
                    grid.addAll(gridService.find_key_object("%" + searchToCase + "%"));
                }
            }
        }
        if(search.equals("")){
            grid = new ArrayList<Grid>();
        }
        if (!gridService.find_key_status(status).equals(new ArrayList<Grid>())){
            if(grid==null) {
                grid = gridService.find_key_status(status);
            }
            else{
                grid.addAll(gridService.find_key_status(status));
            }
        }
        if (!gridService.find_key_subject(subject).equals(new ArrayList<Grid>())){
            if(grid==null) {
                grid = gridService.find_key_subject(subject);
            }
            else{
                grid.addAll(gridService.find_key_subject(subject));
            }
        }
        if (!gridService.find_key_section(selection).equals(new ArrayList<Grid>())){
            if(grid==null) {
                grid = gridService.find_key_section(selection);
            }
            else{
                grid.addAll(gridService.find_key_section(selection));
            }
        }
        if (!gridService.find_key_adres(adres).equals(new ArrayList<Grid>())){
            if(grid==null) {
                grid = gridService.find_key_adres(adres);
            }
            else{
                grid.addAll(gridService.find_key_adres(adres));
            }
        }
        if (!gridService.find_key_phere(phere).equals(new ArrayList<Grid>())){
            if(grid==null) {
                grid = gridService.find_key_phere(phere);
            }
            else{
                grid.addAll(gridService.find_key_phere(phere));
            }
        }
        if (!gridService.find_key_price(price1_from, price1_to).equals(new ArrayList<Grid>())){
            if(grid==null) {
                grid = gridService.find_key_price(price1_from,price1_to);
            }
            else{
                grid.addAll(gridService.find_key_price(price1_from,price1_to));
            }
        }
        if (!gridService.find_key_valute(valute).equals(new ArrayList<Grid>())){
           if(grid==null) {
               grid = gridService.find_key_valute(valute);
           }
           else{
               grid.addAll(gridService.find_key_valute(valute));
           }
        }
        return grid;
    }

    @RequestMapping(value="/searchUser")
    @ResponseBody
    public User findByFio(String fio) { return userService.findByFio(fio);}


    @RequestMapping(value="/zak_user_code")
    @ResponseBody
    public Grid_user createZak(int code, String id_user) {
        Grid_user grid_user = grid_userService.findByCode(code, id_user);
        return grid_user;
    }
    @RequestMapping(value="/zak_rez_code")
    @ResponseBody
    public Rez createRez(int code, String id_user) {
        Rez rez = rezService.findRezCode(code, id_user);
        return rez;
    }

    @RequestMapping(value="/user_view")
    @ResponseBody
    public String user_view() throws IOException {
        URL u;
        u = new URL("http://localhost:8080");
        Scanner s;
        s= new Scanner(u.openStream());
        return "index";
    }

    @RequestMapping(value="/zak_user")
    @ResponseBody
    public Map<String, Object> createZak( String code, String name, String object, String status,
                                          String price1, String subject, String phone1, String name_thing1,
                                          String trademark1, String volume1, String ei1, String valute1,
                                          String date, String dend, String description, String login_user, String bell) throws ParseException {
        System.out.println(bell);
        Map<String, Object> result = new HashMap<String, Object>();
        int price = Integer.parseInt(price1);
        int code1 = Integer.parseInt(code);
        int volume = Integer.parseInt(volume1);
        char valute = valute1.charAt(0);
        Grid_user grid_user = new Grid_user();
        grid_user.setCode(code1);
        grid_user.setName(name);
        grid_user.setObject(object);
        grid_user.setStatus(status);
        grid_user.setPrice(price);
        grid_user.setSubject(subject);
        grid_user.setPhone(phone1);
        grid_user.setName_thing(name_thing1);
        grid_user.setTrademark(trademark1);
        grid_user.setVolume(volume);
        grid_user.setEi(ei1);
        grid_user.setValute(valute);
        grid_user.setIdUser(valueOf(login_user));
        grid_user.setZak(Integer.parseInt(bell));
        Date date1=new SimpleDateFormat("dd/MM/yyyy").parse(date);
        grid_user.setDate(date1);
        String month = dend.substring(5,7);
        String day = dend.substring(8,10);
        String year = dend.substring(0,4);
        dend = month+"/"+day+"/"+year;
        Date dend1=new SimpleDateFormat("dd/MM/yyyy").parse(dend);
        grid_user.setDend(dend1);
        grid_user.setDefinition(description);
        grid_userService.saveGrid(grid_user);
        Bell bell1 = bellService.findCode(code, Integer.parseInt(login_user));
        if(bell1 != null) {
            User user12 = userService.findById(Long.parseLong(login_user));
            user12.setBell(user12.getBell().replace(bell1.getBell()+" ", ""));
            bellService.delBell(bell1);
        }
        return result;
    }

    @RequestMapping(value="/add")
    @ResponseBody
    public Map<String, Object> createUser( String login, String password, String fio, String user_right) {
      Map<String, Object> result = new HashMap<String, Object>();
      User user = new User();
      user.setLogin(login);
      user.setPassword(password);
      user.setFio(fio);
      user.setUser_right(user_right);
      userService.saveUser(user);
      b1 = true;
      return result;
  }

    @RequestMapping(value="/delete")
    @ResponseBody
    public int deleteUser(String[] id) {
        int i = 0;
        while( i<id.length) {
            Long id_server = Long.parseLong(id[i]);
            userService.deleteById(id_server);
            i++;
        }
        b1 = true;
        return 0;
    }

    @RequestMapping(value="/director_delete")
    @ResponseBody
    public int deleteDir(String id) {
        Long id_server = Long.parseLong(id);
        grid_userService.deleteById(id_server);
        return 0;
    }

    @RequestMapping(value="/search")
    @ResponseBody
    public List<User> searchUser(String login) {
        user = new ArrayList<User>();
        if(!login.equals("")) {
            user.addAll(userService.findByLoginKey("%" + login + "%"));
            String loginToCase = login.substring(0, 1).toUpperCase() + login.substring(1).toLowerCase();
            user.addAll(userService.findByLoginKey("%" + loginToCase + "%"));
            loginToCase = login.substring(0, 1).toLowerCase() + login.substring(1).toLowerCase();
            user.addAll(userService.findByLoginKey("%" + loginToCase + "%"));
            if(!user.equals(new ArrayList<User>()))
            b1 = false;
            else{
                b1=true;
            }
        }
        else{
            b1=true;
        }
        return user;
    }

    @RequestMapping(value="/change")
    @ResponseBody
    public int changeUser(String user_right, String id) {
        User user = userService.findById(Long.parseLong(id));
        user.setUser_right(user_right);
        userService.saveUser(user);
        b1 = true;
        return 0;
    }

    @RequestMapping(value="/update")
    @ResponseBody
    public Map<String, Object> updateUser ( Long id, String login, String password, String fio){
        Map<String, Object> result = new HashMap<String, Object>();
        User user = userService.findById(id);
        if(login!="")
            user.setLogin(login);
        if(password!="")
            user.setPassword(password);
        result.put("fio1", user.getFio());
        if(fio!="")
           user.setFio(fio);
        result.put("fio2", fio);
        userService.saveUser(user);
        result.put("login", login);
        return result;
    }

    @RequestMapping(value="/site_add")
    @ResponseBody
    public List<Site> createSite( String code, String name, String object, String status,
                                          String price1, String subject, String phone1, String name_thing1,
                                          String trademark1, String volume1, String ei1, String valute1,String date, String dend, String description, String id) throws ParseException {
        Site site = new Site();
        int price = Integer.parseInt(price1);
        int code1 = Integer.parseInt(code);
        int volume = Integer.parseInt(volume1);
        char valute = valute1.charAt(0);
        site.setCode(code1);
        site.setName(name);
        site.setObject(object);
        site.setStatus(status);
        site.setPrice(price);
        site.setSunject(subject);
        site.setPhone(phone1);
        site.setNamething(name_thing1);
        site.setTrademark(trademark1);
        site.setVolume(volume);
        site.setEi(ei1);
        site.setValute(valute);
        Date date1=new SimpleDateFormat("dd-MM-yyyy").parse(date);
        site.setDate(date1);
        Date dend1=new SimpleDateFormat("dd-MM-yyyy").parse(dend);
        site.setDend(dend1);
        site.setDefinition(description);
        siteService.saveSite(site);
        Rez rez12 = new Rez();
        rez12.setName(site.getName());
        rez12.setCode(site.getCode());
        rez12.setObject(site.getObject());
        rez12.setStatus(site.getStatus());
        rez12.setPrice(site.getPrice());
        rez12.setUserid(id_user);
        User user1 = userService.findById(Long.parseLong(id));
        user1.setRez("red");
        int random_number = 1 + (int) (Math.random() * 3);
        if(random_number == 1){
            rez12.setRezultat("Выиграл");
        }
        else if(random_number == 2){
            rez12.setRezultat("Проиграл");
        }
        else {
            rez12.setRezultat("Ожидается");
        }
        rezService.saveRez(rez12);
        return siteService.findAllSite();
    }
}