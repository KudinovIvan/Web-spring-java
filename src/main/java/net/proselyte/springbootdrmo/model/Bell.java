package net.proselyte.springbootdrmo.model;


import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name ="bell")
public class Bell {
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "code")
    private String code;

    @Column(name = "id_user")
    private int user;

    public String getBell() {
        return bell;
    }

    public void setBell(String bell) {
        this.bell = bell;
    }

    @Column(name = "bell")
    private String bell;

    public int getUser() {
        return user;
    }

    public void setUser(int user) {
        this.user = user;
    }

    @Column(name = "name")
    private String name;

    @Column(name="date_end")
    private Date dend;

    @Column(name = "object")
    private String object;

    @Column(name = "subject")
    private String sunject;

    public String getSunject() {
        return sunject;
    }

    public void setSunject(String sunject) {
        this.sunject = sunject;
    }

    @Column(name = "status")
    private String status;

    @Column(name="valute")
    private char valute;

    @Column(name="ei")
    private String ei;

    @Column(name = "price")
    private Integer price;

    @Column(name = "definition")
    private String definition;

    @Column(name = "phone")
    private String phone;

    @Column(name = "name_thing")
    private String namething;

    @Column(name = "trademark")
    private String trademark;

    @Column(name = "volume")
    private int volume;

    @Column(name = "date")
    private Date date;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
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

    public String getEi() {
        return ei;
    }

    public void setEi(String ei) {
        this.ei = ei;
    }

    public char getValute() {
        return valute;
    }

    public void setValute(char valute) {
        this.valute = valute;
    }

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

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

}
