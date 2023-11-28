import React, { useContext } from 'react'
import'../../style/MainAlert.css'
import AlertContext from '../../context/alert/alertContext'


const MainAlert = () => {
  // using 'useContext'
  const alert_context = useContext(AlertContext);
  const {Alert} = alert_context;

  
  return (
    <>
    {Alert && Alert.type==="error" && <div className='fixed-top container' id='main-alert'>
        <div id='sub-alert-div'>
            <div className="alert alert-danger alert1" role="alert">
                <i className="fa-solid fa-circle-exclamation me-2 main-alert-icon"></i>
                {Alert.message}
            </div>
        </div>
    </div>}

    {Alert && Alert.type==="success" && <div className='fixed-top container' id='main-alert'>
        <div id='sub-alert-div'>
            <div className="alert alert-success alert2 " role="alert">
                <i className="fa-solid fa-circle-check me-2 main-alert-icon"></i> 
                 {Alert.message}
            </div>
        </div>
    </div>}
    </>
  )
}

export default MainAlert