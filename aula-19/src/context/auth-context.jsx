import { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");

  return (
    <AuthContext.Provider value={{ email, setEmail, userName: nome, setNome }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
