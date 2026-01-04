import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/navbar.css";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isSearch, setisSearch] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <nav className="mybg">
      <div className="btn">
        <button onClick={() => setisOpen(!isOpen)}>
          {isOpen ? "✖️ Menu" : "☰ Menu"}
        </button>

        {isOpen && (
          <ol>
            <li onClick={() => navigate("/")}>Home</li>
            <li>Menu</li>
            <li>Contact</li>
          </ol>
        )}
      </div>

      <div className="center">
        <h4>FARAN</h4>
      </div>

      <div className="right">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/signup")}>Signup</button>

        <button onClick={() => setisSearch(!isSearch)}>
          {isSearch ? "Cancel" : "SEARCH 🔍"}
        </button>

        {isSearch && (
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
