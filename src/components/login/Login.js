import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/auth";
import { getHistoricPoints } from "../../services/ilumeo.services";
import { Body, Section, Button } from "./loginStyled.js";

function Login() {
  const navigate = useNavigate();
  const { setDados } = React.useContext(AuthContext);
  const [code, setCode] = useState("");

  function handForm(e) {
    
    const promise = getHistoricPoints(code);
    promise.then((res) => {
      setDados(res.data);
      navigate(`../Home`);
      setCode("");
    });

    promise.catch((err) => {
      const message = err.response.statusText;
      alert(message);
      setCode("");
    });
  }

  return (
    <Body>
      <Section>
        <h1>
          Ponto <span>Ilumeo</span>
        </h1>
        <div>
          <label htmlFor="user-code-input">Código do usuário</label>
          <input
            id="user-code-input"
            placeholder="Insira seu código"
            type="text"
            onChange={(e) => {
              setCode(e.target.value);
            }}
            value={code}
            required
          />
        </div>
        <Button onClick={() => handForm()}>Confirmar</Button>
      </Section>
    </Body>
  );
}

export default Login;
