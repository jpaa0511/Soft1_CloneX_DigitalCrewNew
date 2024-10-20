import { FireBaseAuth } from "./config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
} from "firebase/auth";

export const authUser = async (email, password) => {
  try {
    console.log(email, password);

    const result = await signInWithEmailAndPassword(
      FireBaseAuth,
      email,
      password
    );

    console.log("Usuario logueado correctamente", result);

    const { uid, photoURL, displayName } = result.user;

    return {
      ok: true,
      uid,
      email,
      password,
      photoURL,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const registerUser = async (email, password, displayName) => {
  try {
    const result = await createUserWithEmailAndPassword (
      FireBaseAuth,
      email,
      password
    );

    const { uid, photoURL } = result.user;

    await updateProfile(FireBaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      email,
      photoURL,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

const GoogleProvider = new GoogleAuthProvider();

export const authWithGoogle = async () => {
  GoogleProvider.setCustomParameters({ prompt: "select_account" });

  try {
    const result = await signInWithPopup(FireBaseAuth, GoogleProvider);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  };
};

const FacebooProvider = new FacebookAuthProvider();

export const AuthWithFacebook = async () => {
  FacebooProvider.setCustomParameters({ prompt: "select_account" });

  try {
    const result = await signInWithPopup(FireBaseAuth, FacebooProvider);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  };
};
