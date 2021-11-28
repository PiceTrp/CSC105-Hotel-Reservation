package com.trp.hotelreservation.account;

import com.trp.hotelreservation.utils.MySQLConnector;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/account")
public class Signup {
    @PostMapping(path = "/signup")
    public Map<String, Object> signup(@RequestParam String title, @RequestParam String fname,
                                      @RequestParam String lname, @RequestParam String email,
                                      @RequestParam String pass, @RequestParam String phone) {
        Map<String, Object> response = new HashMap<>();
        try {
            Connection connection = MySQLConnector.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO users (name_title, fname, lname, email, phone, passwd) VALUES (?,?,?,?,?,?)");
            preparedStatement.setString(1, title);
            preparedStatement.setString(2, fname);
            preparedStatement.setString(3, lname);
            preparedStatement.setString(4, email);
            preparedStatement.setString(5, phone);
            preparedStatement.setString(6, pass);
            preparedStatement.execute();
            response.put("success", true);
        } catch (Exception e) {
            response.put("success", false);
            e.printStackTrace();
        }
        return response;
    }

}
