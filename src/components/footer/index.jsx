import { Link } from "react-router-dom";
import "./styles.css";

export default function Footer(){
  return (
    <nav className="footer">
      <div className="footer-link">
        <Link to="/">Never Stop Trying</Link>
      </div>
    </nav>
  )
}