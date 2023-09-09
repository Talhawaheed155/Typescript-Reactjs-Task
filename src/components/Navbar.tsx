import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const location = useLocation();

  const { user, logout } = useAuth();

  return (
    <nav className="p-4 flex justify-between items-center">
      {/* Logo */}
      <Link
        to="/"
        className="text-white text-2xl font-semibold flex items-center"
      >
        <img
          src="/favico.png" // Assuming the image is in the public folder
          alt="Your Logo"
          className="w-14 h-14 mr-2 ml-40" // Adjust the width and height as needed
        />
      </Link>

      {/* Conditional Sign Up and Sign In Buttons */}
      <div className="mr-40">
        {!user && location.pathname !== "/sign-in" && (
          <Link
            to="/sign-in"
            className="rounded-lg border-2 border-red-1 bg-transparent text-red-1 px-2 py-1 w-16 cursor-pointer transition duration-300 hover:bg-red-1 hover:text-white font-bold mr-4"
          >
            Sign In
          </Link>
        )}
        {!user && location.pathname !== "/sign-up" && (
          <Link
            to="/sign-up"
            className="rounded-lg border-2 border-red-1 bg-transparent text-red-1 px-2 py-1 w-16 cursor-pointer transition duration-300 hover:bg-red-1 hover:text-white font-bold mr-4"
          >
            Sign Up
          </Link>
        )}
        {user && (
          <Link
            to="/sign-in"
            onClick={logout}
            className="rounded-lg border-2 border-red-1 bg-transparent text-red-1 px-2 py-1 w-16 cursor-pointer transition duration-300 hover:bg-red-1 hover:text-white font-bold mr-4"
          >
            Log Out
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
