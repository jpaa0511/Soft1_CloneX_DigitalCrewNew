import { userTypes } from "../Types/userTypes";
import { authUser, registerUser, authWithGoogle, AuthWithFacebook } from "../../Connecting_to_Firebase/authProviders";

export const useAuth = (dispatch) => {
  const logInUser = async (email, password) => {
    const { ok, uid, photoURL, displayName, errorMessage } = await authUser(
      email,
      password
    );

    if (!ok) {
      dispatch({ type: userTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = { uid, email, photoURL, displayName };

    const action = {
      type: userTypes.logIn,
      payload,
    };

    localStorage.setItem("user", JSON.stringify(payload));
    dispatch(action);
    return true;
  };

  const logOutUser = () => {
    localStorage.removeItem("user");
    const action = {
      type: userTypes.logOut,
    };
    dispatch(action);
  };

  const   signUpUser = async (email, password, displayName) => {
    const { ok, uid, photoURL, errorMessage } = await registerUser(
      email,
      password,
      displayName
    );

    if (!ok) {
      dispatch({ type: userTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = { uid, email, photoURL, displayName };

    const action = {
      type: userTypes.logIn,
      payload,
    };

    localStorage.setItem("user", JSON.stringify(payload));

    dispatch(action);

    return true;
  };

  const logInWithGoogle = async () => {
    const { ok, uid, displayName, email, photoURL, errorMessage } =
      await authWithGoogle();

    if (!ok) {
      dispatch({ type: userTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = {
      uid,
      email,
      displayName,
      photoURL,
    };

    const action = {
      type: userTypes.logIn,
      payload,
    };

    localStorage.setItem("user", JSON.stringify(payload));

    dispatch(action);

    return true;
  };

  const logInWithFacebook = async () => {
    const { ok, uid, displayName, email, photoURL, errorMessage } =
      await AuthWithFacebook();

    if (!ok) {
      dispatch({ type: userTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = {
      uid,
      email,
      displayName,
      photoURL,
    };

    const action = {
      type: userTypes.logIn,
      payload,
    };

    localStorage.setItem("user", JSON.stringify(payload));

    dispatch(action);

    return true;
  };

  return { logInUser, logOutUser, signUpUser, logInWithGoogle, logInWithFacebook };
};


