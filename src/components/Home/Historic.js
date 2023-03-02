import { StyleHistoric } from "./HomeStyled";
import { format } from 'date-fns';


function Historic({ dados }) {
  return (
    <StyleHistoric>
      <h1>Dias anteriores</h1>
      <ul>
        { 
        dados.map((dado, i) => {
          const { startTime, finishTime } = dado;
          const data = new Date(dado.Date);
          const dataFor = format(data, 'dd/MM/yyyy');

          const time =  (new Date(finishTime).getTime() - (new Date(startTime)).getTime());
          const hora = (new Date(time).getHours());
          const min = (new Date(time).getMinutes());  
          
           return (
            <li key={i}>
              <div className="date">{dataFor}</div>
              <div className="time">{hora}h {min}m</div>
            </li>
           );
        })
        }
      </ul>
    </StyleHistoric>
  );
}

export default Historic;
