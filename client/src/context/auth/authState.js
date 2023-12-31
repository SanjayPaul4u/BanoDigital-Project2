import AuthContext from "./authContext";
import React, { useContext, useState } from "react";
import axios from 'axios'
import SetCookie from '../../hooks/setCookie'
import GetCookie from '../../hooks/getCookie'
import RemoveCookie from '../../hooks/removeCookie'
import AlertContext from "../alert/alertContext";
import ReviewContext from "../review/reviewContext";
import ProgressContext from "../progress/progressContext";



const AuthState = (props) => {
    const host = process.env.REACT_APP_SERVER;
    const [user, setUser] = useState([]);

    // using "useContext" 📌
    const alert_context = useContext(AlertContext);
    const {showAlertFunc} = alert_context;
    const review_context = useContext(ReviewContext);
    const {setUserReview} = review_context;
    const progress_context = useContext(ProgressContext);
    const {setProgressFunc} = progress_context;

    // GET USER API CALL 📌
    const getUserApiCall = async () =>{
        try {
            setProgressFunc(50);
            
            const token = GetCookie("bdigital-token");
            const response = await axios({
                method: "get",
                url:`${host}/api/auth/getuser/${token}`,
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            setProgressFunc(80);
            const data = await response.data;
            // console.log(data.user_data);
            setUser([data.user_data])
            setProgressFunc(100);
            return data;
        } catch (error) {
            console.log("getUserApiCall error********");
            console.log(error);
        }
    }

    // SIGN UP API CALL 📌
    const singUpApiCall = async(userData) =>{
        try {  
            setProgressFunc(50);
            const response = await axios({
                method: "post",
                url:`${host}/api/auth/signup`,
                data: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            setProgressFunc(80);
            const data = await response.data;
            // console.log(data);
            SetCookie("bdigital-token", data.token);
            setUser([data.saved_data]);
            showAlertFunc("success", "Account Created Successfully");
            setProgressFunc(100);
            return data;
        } catch (error) {
            console.log("singUpApiCall error********");
            console.log(error);
            
            if(error.response.data.message){
                showAlertFunc("error", `${error.response.data.message}`);
            }else{
                showAlertFunc("error", `Can not Create Acount due to some Reason`);
            }
            return error;
        }
    };

    // LOGIN API CALL 📌
    const logInApiCall = async(userData) =>{
        try {  
            setProgressFunc(50);
            const response = await axios({
                method: "post",
                url:`${host}/api/auth/login`,
                data: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json" //important
                }
                
            })
            setProgressFunc(80);
            const data = await response.data;
            // console.log(data);
            SetCookie("bdigital-token", data.token);
            setUser([data.user_data])
            showAlertFunc("success", "LogedIn Successfully");
            setProgressFunc(100);
            return data;
        } catch (error) {
            console.log("logInApiCall error********");
            console.log(error);

            if(error.response.data.message){
                showAlertFunc("error", `${error.response.data.message}`);
            }else{
                showAlertFunc("error", `LogIn Fail`);
            }
            return error;
        }
    };

    // LOGOUT FUNCTION 📌
    const [isLogout, setIsLogout] = useState(false);

    const logOutFunc = async()=>{
        try {
            setProgressFunc(50);
            setIsLogout(true);
            RemoveCookie("bdigital-token");
            setProgressFunc(80);
            setUser([]);
            setUserReview(null);
            showAlertFunc("success", "LogedOut Successfully");
            setProgressFunc(100);
        } catch (error) {
            console.log("logOutFunc error********");
            console.log(error);
            showAlertFunc("error", "LogedOut Error");
        }
    }

    return <AuthContext.Provider value={{singUpApiCall, user, getUserApiCall, logInApiCall, logOutFunc, isLogout}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthState;