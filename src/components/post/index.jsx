import AuthorBadge from "../author-badge"
import "./styles.css"

export default function Post(){
  return(
    <div className="post-container">
      <div>
        <img className="piture-post" src="https://www.estudokids.com.br/wp-content/uploads/2020/02/o-que-e-paisagem.jpg" />
      </div>
      
      <div className="container-post">
        <div className="content-post">
          <p>July 24, 2020</p>

          <h2>Here is the title</h2>

          <p>
            Hello people, i am Alexsandro, and am learn the programing
            this is a blog build for me, this is a paragrapho only for test,
            sorry i dont very well writing in english, but i also am learn!!!!
          </p>
        </div>

        <AuthorBadge />
      </div>
    </div>
  )
}