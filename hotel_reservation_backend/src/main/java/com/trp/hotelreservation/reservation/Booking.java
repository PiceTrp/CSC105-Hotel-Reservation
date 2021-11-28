package com.trp.hotelreservation.reservation;

import com.trp.hotelreservation.utils.JwtUtil;
import com.trp.hotelreservation.utils.MySQLConnector;
import io.jsonwebtoken.JwtException;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
public class Booking {
    @PostMapping(path = "/booking")
    public Map<String, Object> booking(@CookieValue String token,
                                       @RequestParam int noRoom,
                                       @RequestParam long checkin,
                                       @RequestParam long checkout,
                                       @RequestParam String roomType,
                                       @RequestParam int price
    ) {
        Map<String, Object> res = new HashMap<>();

        try {
            int userId = JwtUtil.parseToken(token);

            Connection connection = MySQLConnector.getConnection();
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT id, room_no FROM rooms WHERE type = ?");
            preparedStatement.setString(1, roomType);
            ResultSet resultSet = preparedStatement.executeQuery();
            // check whether the room is available or not (by date)

            ArrayList<Map<String, Object>> availableRooms = new ArrayList<>();
            Date checkin_date = new Date(checkin);
            Date checkout_date = new Date(checkout);

            while (resultSet.next()) {
                PreparedStatement check_statement = connection.prepareStatement(
                        "SELECT reservation_rooms.id AS r_id, reservation_rooms.room_id, reservations.*" +
                                "FROM reservation_rooms" +
                                "    INNER JOIN reservations" +
                                "    ON reservations.id = reservation_rooms.reservation_id" +
                                "        AND (" +
                                "                (reservations.checkin >= ? AND reservations.checkout <= ?) OR" +
                                "                (reservations.checkin <= ? AND reservations.checkout >= ?) OR" +
                                "                (reservations.checkin <= ? AND reservations.checkout >= ?) OR" +
                                "                (reservations.checkin <= ? AND reservations.checkout >= ?)" +
                                "            )" +
                                "    WHERE room_id = ?");
                check_statement.setDate(1, checkin_date);
                check_statement.setDate(2, checkout_date);
                check_statement.setDate(3, checkin_date);
                check_statement.setDate(4, checkin_date);
                check_statement.setDate(5, checkout_date);
                check_statement.setDate(6, checkout_date);
                check_statement.setDate(7, checkin_date);
                check_statement.setDate(8, checkout_date);
                check_statement.setInt(9, resultSet.getInt("id"));

                ResultSet checkResult = check_statement.executeQuery();
                // if table is null, it means it's not get into any of the conditions, so the date is available
                if (!checkResult.next()) {
                    Map<String, Object> room = new HashMap<>();
                    room.put("id", resultSet.getInt("id"));
                    room.put("room_no", resultSet.getString("room_no"));
                    availableRooms.add(room);
                }
            }

            // check whether number of rooms that user want to reserve is available or not
            if (availableRooms.size() >= noRoom) {
                res.put("available", true);
                ArrayList<Map<String, Object>> reservedRoom = new ArrayList<>(availableRooms.subList(0, noRoom));
                // Create reservation
                PreparedStatement reservationStatement = connection.prepareStatement("INSERT INTO reservations (user_id, checkin, checkout, price) " +
                        "VALUES (?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
                reservationStatement.setInt(1, userId);
                reservationStatement.setDate(2, checkin_date);
                reservationStatement.setDate(3, checkout_date);
                reservationStatement.setInt(4, price);
                reservationStatement.executeUpdate();

                // Get generated key
                ResultSet reservationKey = reservationStatement.getGeneratedKeys();
                reservationKey.next();
                int generatedId = reservationKey.getInt(1);

                ArrayList<String> roomName = new ArrayList<>();
                for (Map<String, Object> room : reservedRoom) {
                    // Add to reservation_room, attach generated, room
                    PreparedStatement reservedRoomStatement = connection.prepareStatement("INSERT INTO reservation_rooms (reservation_id, room_id)" +
                            " VALUES (?,?)");
                    reservedRoomStatement.setInt(1, generatedId);
                    reservedRoomStatement.setInt(2, (int) room.get("id"));
                    reservedRoomStatement.executeUpdate();
                    
                    roomName.add((String) room.get("room_no"));
                }
                res.put("success", true);
                res.put("rooms", roomName);
            } else {
                res.put("success", false);
                res.put("text", "Not enough available room");
            }
        } catch (SQLException e) {
            res.put("success", false);
            res.put("text", "MySQL error");
        } catch (JwtException e) {
            res.put("success", false);
            res.put("text", "JWT error");
        }
        return res;
    }
}
