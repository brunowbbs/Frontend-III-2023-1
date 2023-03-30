import { createContext, useState } from "react";

export const MyContext = createContext({});

const MyProvider = ({ children }) => {
  const [nome, setNome] = useState("Wesley");

  return (
    <MyContext.Provider
      value={{
        nome: nome,
        disciplina: "Front",
        setNome: setNome,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
