import AuthorBadge from "../author-badge"
import "./styles.css"

export default function Post({ post }){
  return(
    <div className="post-container">
      <div>
        <img className="piture-post" src={post.image} />
      </div>
      
      <div className="container-post">
        <div className="content-post">
          <p>{post.date}</p>

          <h2>{post.title}</h2>

          <p>{post.description}</p>
        </div>

        <AuthorBadge />
      </div>
    </div>
  )
}