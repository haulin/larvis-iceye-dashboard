import React from "react";

interface InitialState {
  isAuthenticated: boolean;
  user_id: string;
}

const initialState = {
  isAuthenticated: false,
  user_id: "",
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
      return {
        ...state,
        access: action.payload.access,
        isAuthenticated: true,
        user_id: action.payload.user_id,
      };
    case "LOGOUT":
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
