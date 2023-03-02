import React from "react";
import { Body, Button } from "../login/loginStyled.js";
import Historic from "./Historic.js";
import { Top } from "./HomeStyled.js";

function Home() {
  return (
    <Body>
      <Top>
        <section className="header">
          <h1>Relógio de ponto</h1>
          <div>
            <h1>#4SXXFMF</h1>
            <h2>Usuário</h2>
          </div>
        </section>

        <section className="clock">
          <div>0h 00m</div>
          <h1>Horas de hoje</h1>
        </section>

        <Button>Hora de entrada</Button>
      </Top>

      <Historic />
    </Body>
  );
}

export default Home;


