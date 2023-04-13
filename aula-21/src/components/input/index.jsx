import { useState } from "react";

export default function Input() {
  const [name, SetName] = useState("");

  return (
    <input
      placeholder="Digite seu nome"
      value={name}
      onChange={(e) => SetName(e.target.value)}
    />
  );
}
