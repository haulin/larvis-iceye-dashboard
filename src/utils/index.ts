import { Acquisition as apiAcquisition, User as apiUser } from "./larvisApi";

export {
  getCurrentUser,
  removeCurrentUser,
  setCurrentUser,
} from "./localStorage"; // must be exported first as AuthContext and larvisApi use it

export { AuthContext, AuthProvider, authReducer } from "./AuthContext";
export { getAcquisitions, token, userList } from "./larvisApi";

export type Acquisition = apiAcquisition;
export type User = apiUser;
