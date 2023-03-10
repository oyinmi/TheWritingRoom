import React from "react";

const initialValueState = {
    user: null,
}

export const authContext = React.createContext(initialValueState);


export function AuthContextProvider(props) {
    const [user, setUser] = React.useState('');
    const [users, setUsers] = React.useState([]);

    // authentication
    const register = ( firstname, lastname, email, password, confirmPassword) => {
        setUsers(prevState => [
            ...prevState,
            {
                id: users.length + 1,
                firstname,
                lastname,
                email,
                password,
                confirmPassword
            }
        ]);
    }

    const login = ( email, password) => {
        const user = users.find(item => item.email === email.trim().toLowerCase() && item.password === password);
        console.log(user);
        if (user) {
            setUser(user);
        }
    }

    // logout
    function logout() {
        setUser(null);
    }

    return (
        <authContext.Provider
            value={{
                user,
                register,
                login,
                logout,
            }}
        >
             {props.children}
         </authContext.Provider>
     );
 
};