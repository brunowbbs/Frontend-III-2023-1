import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const response = localStorage.getItem("@times_user_name");
    setName(response);
  }, []);

  function saveName(user_name) {
    setName(user_name);
    localStorage.setItem("@times_user_name", user_name);
  }

  function saveToken(token) {
    localStorage.setItem("@times_token", token);
  }

  function removeUserStorage() {
    localStorage.removeItem("@times_user_name");
    localStorage.removeItem("@times_token");
  }

  return (
    <AuthContext.Provider
      value={{ name, saveName, removeUserStorage, saveToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
