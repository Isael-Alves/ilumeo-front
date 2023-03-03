import React from "react";
import { Button } from "../login/loginStyled";
import { Top } from "./HomeStyled";
import moment from "moment";
import { postPoint } from "../../services/ilumeo.services";
import { useNavigate } from "react-router-dom";

function Confirmation({ startTime, finishTime, time, user }) {
  const navigate = useNavigate();
  const data = moment(startTime).format("DD/MM/YYYY");
  const hour = time.hour;
  const min = time.minute;
  const body = {
    codeUser: user,
    Date: startTime,
    startTime: startTime,
    finishTime: finishTime,
  };
  console.log(body);

  const enviarPoint = () => {
    const promise = postPoint(body);

    promise.then((res) => {
      navigate(`../`);
    });

    promise.catch((err) => {
      const message = err.response.statusText;
      alert(message);
    });
  };

  return (
    <Top>
      <section className="confirmationData">
        <h1>Confirmar dados</h1>
        <ul>
          <li>{user}</li>
          <li>{data}</li>
          <li>
            {hour < 10 ? "0" : ""}
            {hour}h {min < 10 ? "0" : ""}
            {min}m
          </li>
        </ul>
      </section>
      <Button onClick={enviarPoint}>Confirmar ponto de hoje!</Button>
    </Top>
  );
}

export default Confirmation;
