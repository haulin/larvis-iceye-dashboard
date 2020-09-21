import { User as apiUser } from "./larvisApi";

export {
  getCurrentUser,
  removeCurrentUser,
  setCurrentUser,
} from "./localStorage"; // must be exported first as AuthContext and larvisApi use it

export { AuthContext, AuthProvider, authReducer } from "./AuthContext";
export { token, userList } from "./larvisApi";

export type User = apiUser;
