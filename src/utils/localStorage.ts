export const getCurrentUser = () => {
  const access: string = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser") || "{}").access
    : "";
  const user_id: string = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser") || "{}").user_id
    : "";
  return { access, user_id };
};

export const setCurrentUser = (currentUser) => {
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
};

export const removeCurrentUser = () => {
  localStorage.removeItem("currentUser");
};
