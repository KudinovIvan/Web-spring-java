package net.proselyte.springbootdrmo.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name ="site")
public class Site {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }

    public String getSunject() {
        return sunject;
    }

    public void setSunject(String sunject) {
        this.sunject = sunject;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
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

    public String getNamething() {
        return namething;
    }

    public void setNamething(String namething) {
        this.namething = namething;
    }

    public String getTrademark() {
        return trademark;
    }

    public void setTrademark(String trademark) {
        this.trademark = trademark;
    }

    public Integer getVolume() {
        return volume;
    }

    public void setVolume(Integer volume) {
        this.volume = volume;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public char getValute() {
        return valute;
    }

    public void setValute(char valute) {
        this.valute = valute;
    }

    public String getEi() {
        return ei;
    }

    public void setEi(String ei) {
        this.ei = ei;
    }

    public String getNameorg() {
        return nameorg;
    }

    public void setNameorg(String nameorg) {
        this.nameorg = nameorg;
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

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Date getDend() {
        return dend;
    }

    public void setDend(Date dend) {
        this.dend = dend;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getSd() {
        return sd;
    }

    public void setSd(String sd) {
        this.sd = sd;
    }

    @Column(name = "name")
    private String name;

    @Column(name = "object")
    private String object;

    @Column(name = "status")
    private String status;

    @Column(name = "kind")
    private String kind;

    @Column(name = "sunject")
    private String sunject;

    @Column(name = "code")
    private Integer code;

    @Column(name = "definition")
    private String definition;

    @Column(name = "phone")
    private String phone;

    @Column(name = "name_thing")
    private String namething;

    @Column(name = "trademark")
    private String trademark;

    @Column(name = "volume")
    private Integer volume;

    @Column(name = "date")
    private Date date;

    @Column(name = "valute")
    private char valute;

    @Column(name = "ei")
    private String ei;

    @Column(name = "name_org")
    private String nameorg;

    @Column(name = "inn")
    private String inn;

    @Column(name = "email")
    private String email;

    @Column(name = "adres")
    private String adres;

    @Column(name = "price")
    private Integer price;

    @Column(name = "date_end")
    private Date dend;

    @Column(name = "section")
    private String section;

    @Column(name = "sd")
    private String sd;
}