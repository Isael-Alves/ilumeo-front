import React, { useEffect, useState } from "react";
import { AuthContext } from "../../providers/auth.js";
import { Body, Button } from "../login/loginStyled.js";
import Historic from "./Historic.js";
import { Top } from "./HomeStyled.js";

function Home() {
  const { dados } = React.useContext(AuthContext);
  const user = dados[0].codeUser;
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect(() => {
  //   const startTimer = () => {
  //     setIsRunning(true);
  //     setInterval(() => {
  //       if (isRunning) {
  //         if (minutes === 59) {
  //           setHours(hours + 1);
  //           setMinutes(0);
  //         } else {
  //           setMinutes(minutes + 1);
  //         }
  //       }
  //     }, 60000);
  //   };
  // }, [isRunning]);

  // const pauseTimer = () => {
  //   setIsRunning(false);
  // };

  return (
    <Body>
      <Top>
        <section className="header">
          <h1>Relógio de ponto</h1>
          <div>
            <h1>#{user}</h1>
            <h2>Usuário</h2>
          </div>
        </section>

        <section className="clock">
          <div>
            {hours.toString().padStart(2, "0")}h{" "}
            {minutes.toString().padStart(2, "0")}m
          </div>
          <h1>Horas de hoje</h1>
        </section>

        <Button>
          Hora de entrada
        </Button>
      </Top>

      <Historic dados={dados} />
    </Body>
  );
}

export default Home;
