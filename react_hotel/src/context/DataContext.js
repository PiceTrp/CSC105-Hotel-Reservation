import { useState, createContext, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "../utils/axios";

export const DataContext = createContext();

export const DataWrapper = ({ children }) => {
    const [data, setData] = useState({
        loggedin: false,
        nametitle: null,
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        country: "",
        currency: "",
        amount: 1,
        checkin: new Date(),
        checkout: new Date(),
        contact: false,
        roomtype: "",
        step: 0,
    });

    useEffect(() => {
        axios.get("http://localhost:8080/account/fetch").then((response) => {
            if (response.data.success) {
                setData({
                    ...data,
                    loggedin: true,
                    nametitle: response.data.nametitle,
                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    phone: response.data.phone,
                    country: response.data.country,
                    currency: response.data.currency,
                    booking: [],
                });
            }
        });
    }, []);

    const dataState = {
        data: data,
        setData: (d) => {
            setData(d);
        },
    };

    return (
        <DataContext.Provider value={dataState}>
            {children}
        </DataContext.Provider>
    );
};
