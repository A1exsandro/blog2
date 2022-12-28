import { Link } from "react-router-dom"
import AuthorBadge from "../author-badge"
import "./styles.css"

export default function Post({ post }){
  return(
    <Link to="/english"> 
      <div className="card">
        <div>
          <img className="imgContainer" src={post.image} />
        </div>

        <div className="text">
          <h2>First Title</h2>
          <div className="details">
            <AuthorBadge />
            <div className="date">
              <h3>17 de Janeiro</h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}