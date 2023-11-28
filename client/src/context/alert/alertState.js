import { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = (props) => {
    const [Alert, setAlert] = useState(null);

    const showAlertFunc = (type, msg)=>{
        setAlert({
            type: type,
            message: msg
        })
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    
    }


    return <AlertContext.Provider value={{Alert, showAlertFunc}}>
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;