import React from "react";
import { getCurrentUser, removeCurrentUser, setCurrentUser } from "utils";

interface InitialState {
  isAuthenticated: boolean;
  user_id: string;
}

const { access, user_id } = getCurrentUser();

const initialState = {
  access,
  isAuthenticated: Boolean(user_id),
  user_id,
};

export const AuthContext = React.createContext<{
  state: InitialState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      const currentUser = {
        access: action.payload.access,
        user_id: action.payload.user_id,
      };
      setCurrentUser(currentUser);
      return {
        ...state,
        isAuthenticated: true,
        ...currentUser,
      };
    case "LOGOUT":
      removeCurrentUser();
      return {
        ...state,
        isAuthenticated: false,
        user_id: "",
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
