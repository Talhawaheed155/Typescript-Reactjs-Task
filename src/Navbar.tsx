
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-white text-2xl font-semibold flex items-center">
        <img
          src="/favico.png" // Assuming the image is in the public folder
          alt="Your Logo"
          className="w-14 h-14 mr-2 ml-40" // Adjust the width and height as needed
        />
      </Link>

      {/* Conditional Sign Up and Sign In Buttons */}
      <div className="mr-40">
        {location.pathname === '/' && (
          <Link
            to="/signup"
            className="rounded-lg border-2 border-red-1 bg-transparent htext-red-1 px-2 py-1 w-16 cursor-pointer transition duration-300 hover:bg-red-1 hover:text-white font-bold mr-4"
          >
            Sign Up
          </Link>
        )}
         {location.pathname === '/forgot-password' && (
          <Link
            to="/signup"
            className="rounded-lg border-2 border-red-1 bg-transparent text-red-1 px-2 py-1 w-16 cursor-pointer transition duration-300 hover:bg-red-1 hover:text-white font-bold mr-4"
          >
            Sign Up
          </Link>
        )}
        {location.pathname === '/signup' && (
          <Link
            to="/"
            className="rounded-lg border-2 border-red-1 bg-transparent text-red-1 px-2 py-1 w-16 cursor-pointer transition duration-300 hover:bg-red-1 hover:text-white font-bold mr-4"
          >
            Sign In
          </Link>
        )}
        {location.pathname === '/forgot-password' && (
          <Link
            to="/signup"
            className="rounded-lg border-2 border-red-1 bg-transparent text-red-1 px-2 py-1 w-16 cursor-pointer transition duration-300 hover:bg-red-1 hover:text-white font-bold mr-4"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
