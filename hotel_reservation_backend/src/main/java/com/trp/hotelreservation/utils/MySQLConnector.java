package com.trp.hotelreservation.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySQLConnector {
    public static final String URL = "jdbc:mysql://mysql.cslab.bsthun.com:1205/royalcoral";
    public static final String USERNAME = "picetrp";
    public static final String PASSWORD = "12378451223";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }
}
