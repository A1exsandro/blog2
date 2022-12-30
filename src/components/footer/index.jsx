import { Link } from "react-router-dom";
import "./styles.css";

export default function Footer(){
  return (
    <div className="footer">
      <div className="footer-link">
        <Link to="/">Never Stop Trying</Link>
      </div>
    </div>
  )
}