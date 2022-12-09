import { Link } from "react-router-dom";
import "./styles.css";

export default function NavBar(){
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <h3>Meu Blog</h3>
                </Link>
            </div>

            <div className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/Culture">Cultura</Link>
            </div>
        </nav>
    )
}