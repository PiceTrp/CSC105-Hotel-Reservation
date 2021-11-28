package com.trp.hotelreservation.account;

import com.trp.hotelreservation.utils.JwtUtil;
import com.trp.hotelreservation.utils.MySQLConnector;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/account")
public class Login {

    @PostMapping(path = "/login")
    public Map<String, Object> _login(@RequestParam String email, @RequestParam String pass) {
        Map<String, Object> response = new HashMap<>();
        try {
            Connection connection = MySQLConnector.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM users WHERE email = ? AND passwd = ?");
            preparedStatement.setString(1, email);
            preparedStatement.setString(2, pass);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                response.put("loggedin", true);
                response.put("token", JwtUtil.generateToken(resultSet.getInt("id") + ""));
                response.put("success", true);
            } else {
                response.put("loggedin", false);
                response.put("success", true);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            response.put("success", false);
        }
        return response;
    }


}
