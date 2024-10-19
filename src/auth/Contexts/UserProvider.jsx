import { useReducer } from "react";
import { UserContext } from "./UserContext";
import { UserReducer } from "../Reducers/UserRedus";
import { useAuth } from "../hooks/useAuth";

const initialState = {
  logged: false,
  user: {},
  errorMessage: null,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const isLogged = (!user) ? false: true;
  const state = {
    logged: isLogged,
    user,
  };
  return state;
};

export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(UserReducer, initialState, init);

  const { logInUser, logOutUser, signUpUser, logInWithGoogle, logInWithFacebook } = useAuth(dispatch); 

  // const loginUser = (email = "", password = "") => {
  //   const validEmail = "usuario@example.com";
  //   const validPassword = "123456";

  //   if (email === validEmail && password === validPassword) {
  //     const userData = {
  //       uid: new Date().getTime(),
  //       name: "Example User",
  //       email,
  //     };

  //     localStorage.setItem("user", JSON.stringify(userData));
  //     dispatch({
  //       type: userTypes.logIn,
  //       payload: userData,
  //     });

  //     return true;
  //   } else {
  //     dispatch({
  //       type: userTypes.error,
  //       payload: "Incorrect credentials",
  //     });
  //     return false;
  //   }
  // };

  // const logoutUser = () => {
  //   localStorage.removeItem("user");
  //   dispatch({ type: userTypes.logOut });
  // };
  
  return (
    <UserContext.Provider
      value={{
        ...userState,
        logInUser,
        logOutUser,
        signUpUser,
        logInWithGoogle,
        logInWithFacebook,
        errorMessage: userState.errorMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
