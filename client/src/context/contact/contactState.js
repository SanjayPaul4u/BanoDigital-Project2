import React, { useContext } from 'react';
import ContactContext from './contactContext';
import axios from 'axios';
import GetCookie from '../../hooks/getCookie';
import AlertContext from "../alert/alertContext";
import ProgressContext from '../progress/progressContext';


const ContactState = (props) =>{  
    const host = process.env.REACT_APP_SERVER;
    // using "useContext" 
    const alert_context = useContext(AlertContext);
    const { showAlertFunc } = alert_context;
    const progress_context = useContext(ProgressContext);
    const {setProgressFunc} = progress_context;
    

    // CONTACT SUBMIT API CALL 📌
    const contactSubmitApiCall = async(contactData)=>{
        console.log(contactData);
        try {
            setProgressFunc(50);
            const token = GetCookie("bdigital-token");            
            const response = await axios({
                method:"post",
                url:`${host}/api/contact/submitcontact/${token}`,
                data: JSON.stringify(contactData),
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            setProgressFunc(80);
            const data = await response.data;
            // console.log(data);
            showAlertFunc("success", `Contact Message Submmited Successfully`);
            setProgressFunc(100);
            return data;
        } catch (error) {
            console.log("contactSubmitApiCall error***");
            console.log(error);

            if(error.response.data.message){
                showAlertFunc("error", `${error.response.data.message}`);
            }else{
                showAlertFunc("error", `Can not Submit Contact Message due to some Reason`);
            }
            return error;
        }
    }


    return <ContactContext.Provider value={{contactSubmitApiCall}}>
        {props.children}
    </ContactContext.Provider>
}

export default ContactState;