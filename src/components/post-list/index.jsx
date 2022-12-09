import Post from "../post"
import "./styles.css"

export default function PostList(){
  return(
    <div className="post-list-container">
      <Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
    </div>
  )
}