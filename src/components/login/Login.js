import React from "react";
import { Body, Section, Button } from "./loginStyled.js";

function Login() {
  return (
    <Body>
      <Section>
        <h1>
          Ponto <span>Ilumeo</span>
        </h1>
        <div>
          <label htmlFor="user-code-input">Código do usuário</label>
          <input id="user-code-input" type="text"  placeholder="Insira seu código"/>
        </div>
        <Button>Confirmar</Button>
      </Section>
    </Body>
  );
}

export default Login;

