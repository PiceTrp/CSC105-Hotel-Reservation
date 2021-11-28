package com.trp.hotelreservation.reservation;

import com.trp.hotelreservation.utils.JwtUtil;
import com.trp.hotelreservation.utils.MySQLConnector;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
public class History {
	@GetMapping(path = "/history")
	public Map<String, Object> _history(@CookieValue String token) {
		Map<String, Object> res = new HashMap<>();
		
		try {
			int userId = JwtUtil.parseToken(token);
			Connection connection = MySQLConnector.getConnection();
			PreparedStatement preparedStatement = connection.prepareStatement(
					"SELECT reservations.*, group_concat(rooms.room_no) as rooms FROM reservations " +
							"INNER JOIN reservation_rooms ON reservations.id = reservation_rooms.reservation_id " +
							"INNER JOIN rooms ON rooms.id = reservation_rooms.room_id " +
							"WHERE user_id = ? " +
							"GROUP BY reservations.id ");
			preparedStatement.setInt(1, userId);
			ResultSet resultSet = preparedStatement.executeQuery();
			
			ArrayList<Object> arr = new ArrayList<>();
			while (resultSet.next()) {
				Map<String, Object> reserve = new HashMap<>();
				reserve.put("checkin", resultSet.getDate("checkin").getTime());
				reserve.put("checkout", resultSet.getDate("checkout").getTime());
				reserve.put("price", resultSet.getInt("price"));
				reserve.put("rooms", resultSet.getString("rooms"));
				arr.add(reserve);
			}
			res.put("success", true);
			res.put("list", arr);
		} catch (SQLException e) {
			e.printStackTrace();
			res.put("success", false);
		}
		return res;
	}
}
