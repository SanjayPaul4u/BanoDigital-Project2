import AuthContext from "./authContext";
import React, { useState } from "react";
import axios from 'axios'



const AuthState = (props) => {
    // Using "useState"
    const [signUpUser, setSignUpUser] = useState([]);

    // SIGN UP API CALL 📌
    const singUpApiCall = async(userData) =>{
        try {  
            const response = await axios({
                method: "post",
                url:`http://localhost:5500/api/auth/signup`,
                data: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            const data = await response.data;
            // console.log(data);
            setSignUpUser(signUpUser.concat(data))
        } catch (error) {
            console.log("singUpApiCall error********");
            console.log(error);
        }
    };

    // GET API CALL 📌

    return <AuthContext.Provider value={{singUpApiCall, signUpUser}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthState;