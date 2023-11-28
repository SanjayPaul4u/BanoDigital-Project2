import AuthContext from "./authContext";
import React, { useRef, useState } from "react";
import axios from 'axios'
import SetCookie from '../../hooks/setCookie'
import GetCookie from '../../hooks/getCookie'
import RemoveCookie from '../../hooks/removeCookie'




const AuthState = (props) => {
    const host = "http://127.0.0.1:5500"

    const [user, setUser] = useState([]);

    // GET USER API CALL 📌
    const getUserApiCall = async () =>{
        try {
            const token = GetCookie("bdigital-token");
            const response = await axios({
                method: "get",
                url:`${host}/api/auth/getuser/${token}`,
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            const data = await response.data;
            // console.log(data);
            setUser([data.user_data])
            
            return data;
        } catch (error) {
            console.log("getUserApiCall error********");
            console.log(error);
        }
    }

    // SIGN UP API CALL 📌
    const singUpApiCall = async(userData) =>{
        try {  
            const response = await axios({
                method: "post",
                url:`${host}/api/auth/signup`,
                data: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            const data = await response.data;
            // console.log(data);
            SetCookie("bdigital-token", data.token);
            setUser([data.saved_data])
            return data;
        } catch (error) {
            console.log("singUpApiCall error********");
            console.log(error);
            
            return error;
        }
    };

    // LOGIN API CALL 📌
    const logInApiCall = async(userData) =>{
        try {  
            const response = await axios({
                method: "post",
                url:`${host}/api/auth/login`,
                data: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            const data = await response.data;
            // console.log(data);
            SetCookie("bdigital-token", data.token);
            setUser([data.user_data])
            return data;
        } catch (error) {
            console.log("logInApiCall error********");
            console.log(error);

            return error;
        }
    };

    // LOGOUT FUNCTION 📌
    const Logout_and_vanish_automate = useRef();

    const logOutFunc = async()=>{
        try {
            RemoveCookie("bdigital-token");
            console.log("Log out");
            setUser([]);
            Logout_and_vanish_automate.current.click();
        } catch (error) {
            console.log("logOutFunc error********");
            console.log(error);
        }
    }

    return <AuthContext.Provider value={{singUpApiCall, user, getUserApiCall, logInApiCall, logOutFunc, Logout_and_vanish_automate}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthState;