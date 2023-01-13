import "./styles.css"

const students = [
  {
    id: 1,
    name: "Alexsando",
    shift: "noturno"
  },
  {
    id: 2,
    name: "Anderson",
    shift: "noturno"
  },
  {
    id: 3,
    name: "Antônio",
    shift: "noturno"
  },
  {
    id: 4,
    name: "Alan",
    shift: "noturno"
  },
  {
    id: 5,
    name: "Alex",
    shift: "noturno"
  },
  {
    id: 6,
    name: "Augusto",
    shift: "noturno"
  },
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
            </div>
          )
        })
      }
 
    </div>
  )
}