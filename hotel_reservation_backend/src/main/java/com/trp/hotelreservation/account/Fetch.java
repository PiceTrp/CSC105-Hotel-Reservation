package com.trp.hotelreservation.account;

import com.trp.hotelreservation.utils.JwtUtil;
import com.trp.hotelreservation.utils.MySQLConnector;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class Fetch {
    @GetMapping(path = "/account/fetch")
    public Map<String, Object> _login(@CookieValue String token) {
        Map<String, Object> res = new HashMap<>();

        try {
            int userId = JwtUtil.parseToken(token);

            Connection connection = MySQLConnector.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM users WHERE id = ?");
            preparedStatement.setInt(1, userId);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()) {
                res.put("success", true);

                res.put("nametitle", resultSet.getString("name_title"));
                res.put("firstname", resultSet.getString("fname"));
                res.put("lastname", resultSet.getString("lname"));
                res.put("email", resultSet.getString("email"));
                res.put("phone", resultSet.getString("phone"));
                res.put("country", resultSet.getString("country"));
                res.put("currency", resultSet.getString("currency"));
            } else {
                res.put("success", false);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            res.put("success", false);
        }
        return res;
    }
}
