import "./styles.css"

const students = [
  {
    id: 1,
    name: "Alexsando",
    shift: "noturno",
    presence: "false"
  },
  {
    id: 2,
    name: "Anderson",
    shift: "noturno",
    presence: "false"
  },
  {
    id: 3,
    name: "Antônio",
    shift: "noturno",
    presence: "false"
  },
  {
    id: 4,
    name: "Alan",
    shift: "noturno",
    presence: "false"
  },
  {
    id: 5,
    name: "Alex",
    shift: "noturno",
    presence: "false"
  },
  {
    id: 6,
    name: "Augusto",
    shift: "noturno",
    presence: "true"
  },
]
const calls = [
  {
    date: "12/01/2023",
 
  }
]
 
export default function Contact(){
  return(
    <div className="containerContact">
      <div>Contact</div> 

      {
        students.map((std) => {
          return(
            <div className="contactCard">
              <div className="contactAvatar">{std.id}</div>
              <div className="contactName">{std.name}</div>
              <div>{std.presence}</div>
              
            </div>
          )
        })
      }

      {
        console.log(calls)
      }

      <div className="call">
        <div className="headerCall">
          <div>Data</div>
          <div>Nome</div>
          <div>Presença</div>
        </div>
 
        
        {
          calls.map((call) => {
            return(
              <div className="bodyCall">
                <div>{call.date}</div>
                <div>{call.student }</div>
                <div>{call.presence}</div>
              </div>
            )
          })
        }
        
      </div>
 
    </div>
  )
}