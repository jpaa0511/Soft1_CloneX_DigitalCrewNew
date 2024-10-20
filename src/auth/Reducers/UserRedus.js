import { userTypes } from "../Types/userTypes";

export const UserReducer = (state = {}, action = {}) => {
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
        user: {},
        errorMessage: null,
      };

    case userTypes.error:
      return {
        ...state,
        loggef: false,
        errorMessage: action.payload?.errorMessage,
      };

    default:
      return state;
  }
};
