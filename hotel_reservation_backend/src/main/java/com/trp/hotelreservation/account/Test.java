package com.trp.hotelreservation.account;

import com.trp.hotelreservation.utils.JwtUtil;
import com.trp.hotelreservation.utils.MySQLConnector;
import io.jsonwebtoken.JwtException;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/test")
public class Test {

    @GetMapping(path = "/hello")
    public Map<String, Object> _hello() {
        Map<String, Object> map = new HashMap<>();
        ArrayList<String> arr = new ArrayList<>();
        ArrayList<Map> arr2 = new ArrayList<>();
        Map<String, String> map2 = new HashMap<>();
        arr.add("Apple");
        arr.add("Banana");
        map2.put("fn", "Olaf");
        map2.put("ln", "Jintalha");
        arr2.add(map2);
        map.put("key", arr);
        map.put("foo", "bar");
        map.put("aa", "bb");
        map.put("obj", arr2);
        return map;
    }

    @GetMapping(path = "/hello0123")
    public Map<String, Object> _helloworld() {
        Map<String, Object> response = new HashMap<>();
        try {
            Connection connection = MySQLConnector.getConnection();
            response.put("success", true);
        } catch (SQLException e) {
            e.printStackTrace();
            response.put("success", false);
        }
        return response;
    }

    @GetMapping(path = "/user")
    public Map<String, Object> _userCalling() {
        Map<String, Object> response = new HashMap<>();
        try {
            Connection connection = MySQLConnector.getConnection();
            Statement stmt = connection.createStatement();
            ResultSet resultSet = stmt.executeQuery("SELECT * FROM users");

            response.put("success", true);
            ArrayList<Map<String, Object>> users = new ArrayList<>();

            while (resultSet.next()) {
                Map<String, Object> user = new HashMap<>();
                user.put("id", resultSet.getInt("id"));
                user.put("firstname", resultSet.getString("fname"));
                user.put("lastname", resultSet.getString("lname"));
                user.put("email", resultSet.getString("email"));
                users.add(user);
            }

            response.put("RESULT", users);
        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
        }
        return response;
    }

    @GetMapping(path = "/userId")
    public Map<String, Object> _userId(@RequestParam int id) {
        Map<String, Object> response = new HashMap<>();
        try {
            Connection connection = MySQLConnector.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM users WHERE id = ?");
            preparedStatement.setInt(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();
            response.put("success", true);

            resultSet.next();
            Map<String, Object> user = new HashMap<>();
            user.put("id", resultSet.getInt("id"));
            user.put("firstname", resultSet.getString("fname"));
            user.put("lastname", resultSet.getString("lname"));
            user.put("email", resultSet.getString("email"));
            response.put("RESULT", user);

        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
        }
        return response;
    }

    @GetMapping("/jwt")
    public Map<String, Object> jtw(@CookieValue String token) {
        Map<String, Object> res = new HashMap<>();
        try {
            int a = JwtUtil.parseToken(token);
            res.put("decoded", a);
        } catch (JwtException e) {
            res.put("error", true);
        }


        return res;
    }

}
