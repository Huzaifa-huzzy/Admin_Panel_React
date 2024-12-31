import React from "react";
import { Link } from "react-router-dom";
import logo from './letter-s.png'

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen px-4 py-8 overflow-y-auto bg-gradient-to-b from-blue-500 to-indigo-600 border-r dark:bg-gradient-to-b dark:from-blue-800 dark:to-indigo-900 fixed top-0 left-0 bottom-0 shadow-lg">
      <Link to="/">
        <img
          className="w-auto h-7 sm:h-8 mb-8"
          src={logo}
          alt="Logo"
        />
      </Link>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <NavItem to="/dashboard" text="Dashboard" icon={<i className="fas fa-tachometer-alt"></i>} />
          <div className="my-2" /> {/* Adds gap between items */}
          <NavItem to="/accounts" text="Accounts" icon={<i className="fas fa-users"></i>} />
          <div className="my-2" /> {/* Adds gap between items */}
          <NavItem to="/signIn" text="SignIn" icon={<i className="fas fa-ticket-alt"></i>} />
          <div className="my-2" /> {/* Adds gap between items */}
          <NavItem to="/error" text="Error" icon={<i className="fas fa-cogs"></i>} />
          <hr className="my-6 border-gray-300 dark:border-gray-700" />
        </nav>

        <Link to="/" className="flex items-center px-4 py-2 -mx-2 mt-6 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-800 transition duration-300">
          <img
            className="object-cover mx-2 rounded-full h-9 w-9 border-2 border-white"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="avatar"
          />
          <span className="mx-2 font-medium text-white dark:text-gray-100">John Doe</span>
        </Link>
      </div>
    </aside>
  );
};

const NavItem = ({ to, icon, text }) => (
  <Link
    to={to}
    className="flex items-center px-4 py-2 text-lg font-medium text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-800 transition duration-200" // Increased font size to text-lg
  >
    {icon && <span className="mr-3 text-lg">{icon}</span>}
    <span>{text}</span>
  </Link>
);

export default Sidebar;
