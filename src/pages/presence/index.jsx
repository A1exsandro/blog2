import React, { useState } from "react";
import './styles.css';

const Presence = () => {
  const handleSubmit = (async () => {
    await fetch(`http://localhost:3001/calls`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          call: { date: "", names: ['a', 'b', 'c', 'd'] } 
        })
      }
    )
  });

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
        <form onSubmit={handleSubmit}>
            <button type="submit">
              Create
            </button>
          </form>
      </div>
    </div> 
 
  );
}

export default Presence;