package net.proselyte.springbootdrmo.model;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name ="zak_user")
public class Grid_user {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code")
    private int code;

    @Column(name = "id_zak")
    private int zak;

    public int getZak() {
        return zak;
    }

    public void setZak(int zak) {
        this.zak = zak;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getObject() {
        return object;
    }

    public void setObject(String object) {
        this.object = object;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    @Column(name = "name")
    private String name;

    @Column(name = "object")
    private String object;

    @Column(name = "status")
    private String status;

    @Column(name = "price")
    private int price;

    @Column(name = "sunject")
    private String subject;

    @Column(name="valute")
    private char valute;

    @Column(name="ei")
    private String ei;

    @Column(name="name_org")
    private String name_org;

    @Column(name="inn")
    private String inn;

    @Column(name="email")
    private String email;

    @Column(name="adres")
    private String adres;

    public String getName_org() {
        return name_org;
    }

    public void setName_org(String name_org) {
        this.name_org = name_org;
    }

    public String getInn() {
        return inn;
    }

    public void setInn(String inn) {
        this.inn = inn;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAdres() {
        return adres;
    }

    public void setAdres(String adres) {
        this.adres = adres;
    }

    public String getEi() {
        return ei;
    }

    public void setEi(String ei) {
        this.ei = ei;
    }

    @Column(name="date_end")
    private Date dend;

    public Date getDend() {
        return dend;
    }

    public void setDend(Date dend) {
        this.dend = dend;
    }

    @Column(name = "definition")
    private String definition;

    public char getValute() {
        return valute;
    }

    public void setValute(char valute) {
        this.valute = valute;
    }

    @Column(name = "phone")
    private String phone;

    @Column(name = "name_thing")
    private String name_thing;

    @Column(name = "trademark")
    private String trademark;

    @Column(name = "volume")
    private int volume;

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
    }

    @Column(name = "date")
    private Date date;

    @Column(name = "login_user")
    private String idUser;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getName_thing() {
        return name_thing;
    }

    public void setName_thing(String name_thing) {
        this.name_thing = name_thing;
    }

    public String getTrademark() {
        return trademark;
    }

    public void setTrademark(String trademark) {
        this.trademark = trademark;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

}
