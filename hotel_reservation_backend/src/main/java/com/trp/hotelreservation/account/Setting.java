package com.trp.hotelreservation.account;

import com.trp.hotelreservation.utils.JwtUtil;
import com.trp.hotelreservation.utils.MySQLConnector;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class Setting {
	@PostMapping(path = "/account/setting")
	public Map<String, Object> _setting(@CookieValue String token,
	                                    @RequestParam String title,
	                                    @RequestParam String fname,
	                                    @RequestParam String lname,
	                                    @RequestParam String email,
	                                    @RequestParam String phone,
	                                    @RequestParam String country,
	                                    @RequestParam String currency) {
		Map<String, Object> res = new HashMap<>();
		
		try {
			int userId = JwtUtil.parseToken(token);
			Connection connection = MySQLConnector.getConnection();
			PreparedStatement preparedStatement = connection.prepareStatement("UPDATE users " +
					"SET name_title = ?," +
					"fname = ?," +
					"lname = ?," +
					"email = ?," +
					"phone = ?," +
					"country = ?," +
					"currency = ?" +
					"WHERE id = ?");
			preparedStatement.setString(1, title);
			preparedStatement.setString(2, fname);
			preparedStatement.setString(3, lname);
			preparedStatement.setString(4, email);
			preparedStatement.setString(5, phone);
			preparedStatement.setString(6, country);
			preparedStatement.setString(7, currency);
			preparedStatement.setInt(8, userId);
			preparedStatement.execute();
			res.put("update", true);
			
		} catch (SQLException e) {
			e.printStackTrace();
			res.put("update", false);
		}
		return res;
	}
	
}
