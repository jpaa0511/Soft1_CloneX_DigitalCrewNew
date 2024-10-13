import { userTypes } from "../types/UserTypes";

export const UserReducer = (state, action) => {
  switch (action.type) {
    case userTypes.logIn:
      return {
        ...state,
        logged: true,
        user: action.payload,
        errorMessage: null,
      };

    case userTypes.logOut:
      return {
        logged: false,
        user: null,
        errorMessage: null,
      };

    case userTypes.error:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
