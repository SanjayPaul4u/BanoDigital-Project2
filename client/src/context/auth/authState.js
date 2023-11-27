import AuthContext from "./authContext";

const AuthState = (props) => {
    return <AuthContext.Provider value={{name: "Sanjay"}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthState;