import React, { useState, useEffect } from "react";

const ComponenteAula1 = () => {
  const [funcionario, setFuncionario] = useState({ id: 0, nome: "Milton" });
  const [inputValue, setInputValue] = useState("");

  const trocarNome = () => {
    setFuncionario({ id: funcionario.id + 1, nome: inputValue });
  };

  useEffect(() => {
    console.log("O funcionário foi alterado para: ", funcionario);
  }, [funcionario]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1>Aula 1</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={trocarNome}>Troca nome</button>
      <div>
        <p>{funcionario.nome}</p>
      </div>
    </div>
  );
};

export default ComponenteAula1;
