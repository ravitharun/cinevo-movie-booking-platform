package com.pratice.User_Services.Repositry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pratice.User_Services.Entity.UserEntity;

public interface UserRepostry extends JpaRepository<UserEntity, Long>

{

    List<UserEntity> findByUseremail(String useremail);
    
}
