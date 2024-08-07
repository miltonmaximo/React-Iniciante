import React from "react";
import ComponenteAula1 from "../components/ComponenteAula1";
import Header from "../components/Header";

const Aula1 = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">
          Bem vindo as implementações da Aula 1
        </h1>
      </div>
      <ComponenteAula1 />
    </div>
  );
};

export default Aula1;
