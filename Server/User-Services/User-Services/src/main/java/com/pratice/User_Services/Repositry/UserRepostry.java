package com.pratice.User_Services.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pratice.User_Services.Entity.UserEntity;

public interface UserRepostry extends JpaRepository<UserEntity ,Long>
{

}
