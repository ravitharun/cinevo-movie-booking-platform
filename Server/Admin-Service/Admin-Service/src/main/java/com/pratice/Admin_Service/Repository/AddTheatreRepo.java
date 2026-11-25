package com.pratice.Admin_Service.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;

import com.pratice.Admin_Service.entity.AddTheatreEntity;

public interface AddTheatreRepo extends JpaRepository<AddTheatreEntity, Long> {

}
