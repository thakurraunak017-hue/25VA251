import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h2>My App</h2>
      
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;