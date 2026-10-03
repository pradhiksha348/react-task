import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-600 p-4">
        <div className="flex justify-center gap-8">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
    </div>
  );
};

export default Navbar;