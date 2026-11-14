package com.pratice.User_Services.DTO;

public class UserSingupDto {

    private long Userid;
    private String Full_anme;
    private long MobileNumber;
    private String email;
    private String TheatreName;
    private String city;
    private String State;
    private String TheatreAddress;
    private String passwoard;
    private String Role;

    public String getRole() {
        return Role;
    }

    public void setRole(String role) {
        Role = role;
    }

    public long getUserid() {
        return Userid;
    }

    public void setUserid(long userid) {
        Userid = userid;
    }

    public String getFull_anme() {
        return Full_anme;
    }

    public void setFull_anme(String full_anme) {
        Full_anme = full_anme;
    }

    public long getMobileNumber() {
        return MobileNumber;
    }

    public void setMobileNumber(long mobileNumber) {
        MobileNumber = mobileNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTheatreName() {
        return TheatreName;
    }

    public void setTheatreName(String theatreName) {
        TheatreName = theatreName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }

    public String getTheatreAddress() {
        return TheatreAddress;
    }

    public void setTheatreAddress(String theatreAddress) {
        TheatreAddress = theatreAddress;
    }

    public String getPasswoard() {
        return passwoard;
    }

    public void setPasswoard(String passwoard) {
        this.passwoard = passwoard;
    }

}
