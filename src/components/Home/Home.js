import React, { useEffect, useState } from "react";
import { AuthContext } from "../../providers/auth.js";
import { Body, Button } from "../login/loginStyled.js";
import Confirmation from "./Confirmation.js";
import Historic from "./Historic.js";
import { Top } from "./HomeStyled.js";

function Home() {
  const { dados } = React.useContext(AuthContext);
  const user = dados[0].codeUser;

  const [time, setTime] = useState({ hour: 0, minute: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [cont, setCont] = useState(0);
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          let nextMinute = prevTime.minute + 1;
          let nextHour = prevTime.hour;
          if (nextMinute === 60) {
            nextMinute = 0;
            nextHour += 1;
          }
          return { hour: nextHour, minute: nextMinute };
        });
      }, 10);//Ajustar tempo
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStopClick = () => {
    const dateNow = new Date().toISOString();
    if (cont === 0) {
      setStartTime(dateNow);
      setCont(cont + 1);
      setIsRunning(true);
    } else {
      setFinishTime(dateNow);
      setIsRunning(false);
      setCont(cont + 1);
    }
  };

  return (
    <Body>
      { cont < 2 ? 
      <Top>
        <section className="header">
          <h1>Relógio de ponto</h1>
          <div>
            <h1>{user}</h1>
            <h2>Usuário</h2>
          </div>
        </section>
        <section className="clock">
          <div>
            {time.hour < 10 ? "0" : ""}
            {time.hour}h {time.minute < 10 ? "0" : ""}
            {time.minute}m
          </div>
          <h1>Horas de hoje</h1>
        </section>

        <Button onClick={handleStartStopClick}>
          {isRunning ? "Hora de saída" : "Hora de entrada"}
        </Button>
      </Top> : 
      <Confirmation user={user} time={time} startTime={startTime} finishTime={finishTime} />
      }

      <Historic dados={dados} />
    </Body>
  );
}

export default Home;
