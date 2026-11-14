package com.pratice.User_Services.Services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.pratice.User_Services.Config.Password;
import com.pratice.User_Services.DTO.UserSingupDto;
import com.pratice.User_Services.Entity.UserEntity;
import com.pratice.User_Services.Repositry.UserRepostry;

@Service
public class UserServices {

    @Autowired
    public UserRepostry userRepostry;
    @Autowired
    public Password passwordHash;

    @Autowired
    JwtService jwt;
    // @Autowired
    // UserSigninDto userSigninDto;

    // new account creation
    public ResponseEntity<Map<String, Object>> SingUp(UserSingupDto userSingup) {
        Map<String, Object> m = new HashMap<>();
        try {
            if (userSingup.getEmail() == null || userSingup.getCity() == null ||
                    userSingup.getFull_anme() == null
                    || Long.toString(userSingup.getMobileNumber()) == null ||
                    userSingup.getRole() == null
                    || userSingup.getPasswoard() == null || userSingup.getState() == null
                    || userSingup.getTheatreAddress() == null || userSingup.getTheatreName() == null) {

                m.put("message", "Fill the required Feilds");
                m.put("status", HttpStatus.BAD_REQUEST);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(m);
            }

            List<UserEntity> u = userRepostry.findByUseremail(userSingup.getEmail());

            if (u.size() >= 1) {
                m.put("message", "These Email is ALredy Created by Some .");
                m.put("status", HttpStatus.NOT_ACCEPTABLE);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(m);
            }
            UserEntity user = new UserEntity();
            String userPasswrod_hash = passwordHash.Password_hash().encode(userSingup.getPasswoard());
            user.setUseremail(userSingup.getEmail());
            user.setCity(userSingup.getCity());
            user.setUsername(userSingup.getFull_anme());
            user.setUserMobilenumber(userSingup.getMobileNumber());
            user.setuserRole(userSingup.getRole());
            user.setPassowrd(userPasswrod_hash);
            user.setTheatreAddress(userSingup.getTheatreAddress());
            user.setTheatreName(userSingup.getTheatreName());
            user.setState(userSingup.getState());

            user = userRepostry.save(user);
            m.put("message", "User registered successfully");
            m.put("status", HttpStatus.OK);
            m.put("user", user);

            return ResponseEntity.status(HttpStatus.OK).body(m);
        } catch (Exception e) {
            System.err.println(e.getLocalizedMessage() + "THARUNTHARUN");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(m);
        }
    }

    // validate the user login infromation

    public ResponseEntity<Map<String, Object>> VerfiyUserSignin(String UserRole, String userpassword,
            String useremail) {
        // System.err.println("DBTharun");
        Map<String, Object> m = new HashMap<>();

        try {
            List<UserEntity> u = userRepostry.findByUseremail(useremail);
            UserSingupDto user_login = new UserSingupDto();
            if (u.size() <= 0) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
            boolean isMatch = passwordHash.Password_hash().matches(
                    userpassword,
                    u.get(0).getPassowrd());
            if (u.get(0).getUseremail().equals(useremail) && u.get(0).getuserRole().equals(UserRole) && isMatch) {
                String token = jwt.generateToken(
                        u.get(0).getUseremail(),
                        u.get(0).getuserRole());
                user_login.setCity(u.get(0).getCity());
                user_login.setUserid(u.get(0).getUserid());
                user_login.setRole(u.get(0).getuserRole());
                user_login.setFull_anme(u.get(0).getUsername());
                user_login.setEmail(u.get(0).getUseremail());
                user_login.setMobileNumber(u.get(0).getUserMobilenumber());

                m.put("messsage", "Account Details");
                m.put("data", user_login);
                m.put("token", token);
                m.put("status", HttpStatus.OK);
                return ResponseEntity.status(200).body(m);

            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(m);
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(m);

        }

    }
}
