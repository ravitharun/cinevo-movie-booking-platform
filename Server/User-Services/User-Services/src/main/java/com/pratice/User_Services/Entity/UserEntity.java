package com.pratice.User_Services.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userid;
    private String username;
    private long userMobilenumber;
    private String useremail;
    private String TheatreName;
    private String state;
    private String city;
    private String TheatreAddress;
    private String passowrd;

    private String userRole;

    public String getuserRole() {
        return userRole;
    }

    public void setuserRole(String userRole) {
        this.userRole = userRole;
    }

    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public long getUserMobilenumber() {
        return userMobilenumber;
    }

    public void setUserMobilenumber(long userMobilenumber) {
        this.userMobilenumber = userMobilenumber;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getTheatreName() {
        return TheatreName;
    }

    public void setTheatreName(String theatreName) {
        TheatreName = theatreName;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getTheatreAddress() {
        return TheatreAddress;
    }

    public void setTheatreAddress(String theatreAddress) {
        TheatreAddress = theatreAddress;
    }

    public String getPassowrd() {
        return passowrd;
    }

    public void setPassowrd(String passowrd) {
        this.passowrd = passowrd;
    }

}
