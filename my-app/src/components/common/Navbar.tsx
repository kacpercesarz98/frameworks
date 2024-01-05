import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'; // Import the custom styles

const Navbar: React.FC = () => {
  return (
    <nav>
      <div>
        <Link to="/" className="text-white text-2xl font-bold">
          My Blog
        </Link>
        <div>
          <Link to="/posts" className="text-white">
            Posts
          </Link>
          <Link to="/users" className="text-white">
            Users
          </Link>
          <Link to="/comments" className="text-white">
            Comments
          </Link>                   
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
