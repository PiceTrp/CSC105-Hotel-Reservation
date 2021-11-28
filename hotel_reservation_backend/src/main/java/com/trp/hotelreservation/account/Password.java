package com.trp.hotelreservation.account;

import com.trp.hotelreservation.utils.JwtUtil;
import com.trp.hotelreservation.utils.MySQLConnector;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class Password {
    @PostMapping(path = "/account/password")
    public Map<String, Object> _setting(@CookieValue String token,
                                        @RequestParam String oldPass,
                                        @RequestParam String newPass) {
        Map<String, Object> res = new HashMap<>();

        try {
            int userId = JwtUtil.parseToken(token);
            Connection connection = MySQLConnector.getConnection();
            PreparedStatement checkUser = connection.prepareStatement("SELECT passwd FROM users WHERE id = ?");
            checkUser.setInt(1, userId);
            ResultSet resultSet = checkUser.executeQuery();
            if(resultSet.next()) {
                if (oldPass.equals(resultSet.getString("passwd"))) {
                    PreparedStatement preparedStatement = connection.prepareStatement("UPDATE users " +
                            "SET passwd = ?" +
                            "WHERE id = ?");
                    preparedStatement.setString(1, newPass);
                    preparedStatement.setInt(2, userId);
                    preparedStatement.execute();
                    res.put("success", true);
                    res.put("update", true);
                } else {
                    res.put("success", true);
                    res.put("update", false);
                }
            } else {
                res.put("success", false);
                res.put("update", false);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            res.put("update", false);
        }
        return res;
    }

}
