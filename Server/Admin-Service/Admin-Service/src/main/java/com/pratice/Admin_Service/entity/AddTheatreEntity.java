package com.pratice.Admin_Service.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "TheatreManagement")
public class AddTheatreEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long theatreId;
    private String TheaterAdminid;
    public Long getTheatreId() {
        return theatreId;
    }

    public void setTheatreId(Long theatreId) {
        this.theatreId = theatreId;
    }

    public String getTheaterAdminid() {
        return TheaterAdminid;
    }

    public void setTheaterAdminid(String theaterAdminid) {
        TheaterAdminid = theaterAdminid;
    }

    private String theatreName;
    private String theatreEmai;
    private String contactNumber;
    private String city;
    private String state;
    private String pincode;
    private String numberOfScreens;
    private String theatreStatus;
    private String fullAddress;

    public String getTheatreName() {
        return theatreName;
    }

    public void setTheatreName(String theatreName) {
        this.theatreName = theatreName;
    }

    public String getTheatreEmai() {
        return theatreEmai;
    }

    public void setTheatreEmai(String theatreEmai) {
        this.theatreEmai = theatreEmai;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getNumberOfScreens() {
        return numberOfScreens;
    }

    public void setNumberOfScreens(String numberOfScreens) {
        this.numberOfScreens = numberOfScreens;
    }

    public String getTheatreStatus() {
        return theatreStatus;
    }

    public void setTheatreStatus(String theatreStatus) {
        this.theatreStatus = theatreStatus;
    }

    public String getFullAddress() {
        return fullAddress;
    }

    public void setFullAddress(String fullAddress) {
        this.fullAddress = fullAddress;
    }
}
