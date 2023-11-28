import React from 'react';
import ContactContext from './contactContext';
import axios from 'axios';
import GetCookie from '../../hooks/getCookie';

const ContactState = (props) =>{  
    const host = "http://127.0.0.1:5500"  


    // CONTACT SUBMIT API CALL 📌
    const contactSubmitApiCall = async(contactData)=>{
        console.log(contactData);
        try {
            const token = GetCookie("bdigital-token");            
            const response = await axios({
                method:"post",
                url:`${host}/api/contact/submitcontact/${token}`,
                data: JSON.stringify(contactData),
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            const data = await response.data;
            // console.log(data);
            return data;
        } catch (error) {
            console.log("contactSubmitApiCall error***");
            console.log(error);

            return error;
        }
    }


    return <ContactContext.Provider value={{contactSubmitApiCall}}>
        {props.children}
    </ContactContext.Provider>
}

export default ContactState;