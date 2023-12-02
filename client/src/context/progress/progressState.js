import { useState } from "react";
import ProgressContext from "./progressContext";

const ProgressState = (props)=>{
    const [progress, setProgress] = useState(0)

    const setProgressFunc = (progress) =>{
        setProgress(progress);
    }

    return <ProgressContext.Provider value={{progress, setProgressFunc}}>
        {props.children}
    </ProgressContext.Provider>
}

export default ProgressState;