import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#222" }}>
      <Link to="/" style={{ color: "white", margin: "0 10px" }}>Home</Link>
      <Link to="/about" style={{ color: "white", margin: "0 10px" }}>About</Link>
      <Link to="/projects" style={{ color: "white", margin: "0 10px" }}>Projects</Link>
      <Link to="/contact" style={{ color: "white", margin: "0 10px" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
