package com.pratice.Admin_Service.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pratice.Admin_Service.DTO.AddTheatreDto;
import com.pratice.Admin_Service.Repository.AddTheatreRepo;

@Service
public class AddTheatreServices {

    @Autowired
    public AddTheatreRepo addTheatre;

    // create the new Theatre
    public String AddnewTheatre(AddTheatreDto AddTheatre) {
        AddTheatreDto Add = new AddTheatreDto();
        Add.setCity(AddTheatre.getCity());

        return null;
    }




    // Get the New Theater 

}
