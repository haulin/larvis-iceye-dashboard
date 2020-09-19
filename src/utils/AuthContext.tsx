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
      console.log(state);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: "",
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
