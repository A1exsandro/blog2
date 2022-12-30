import { Link } from "react-router-dom";
import "./styles.css";

export default function NavBar(){
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    Meu Blog
                </Link>
            </div>

            <div className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/about">Aprender</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/template">Template</Link>
            </div>
        </nav>
    )
}