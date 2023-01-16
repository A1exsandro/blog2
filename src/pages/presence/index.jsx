import React, { useState } from "react";
import './styles.css';

const Presence = () => {
  const [names, setNames] = useState([
    {
      name: 'Alex' 
    },
    {
      name: 'Sandro'  
    },
    {
      name: 'Antônio' 
    },
    {
      name: 'Alexsandro' 
    },
  ]);

  const handleDelete = ({name}) => {
    setNames(names.filter((item) => item.name  !== name))
  }

  
  // console.log(cards);

  return(
 
    <div className="containerPresence">
      {
        names.map((item, index) => (
          <div key={index} className="cardPresence">
            <div className="avatar">{index + 1}</div>
            <div className="info">
               
              {item.name}
            </div>
            <div className="button" onClick={() => handleDelete(item)}>X</div>
          </div>    
        ))
      } 

      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Presenças</th>
              <th>Faltas</th>
            </tr>
          </thead>
          <tbody>
            {
              names.map((item, index) =>(
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                 
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div> 
 
  );
}

export default Presence;