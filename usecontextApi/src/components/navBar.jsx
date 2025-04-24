import { NavLink } from "react-router";

export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
       
        <ul className="flex space-x-6">
          <li>
            <NavLink to={'/#'} className="hover:text-red-500">Home</NavLink>
          </li>
          <li>
            <NavLink to={"/comments"} className="hover:text-gray-300">Comments</NavLink>
          </li>
          <li>
            <NavLink to={"/todos"} className="hover:text-gray-300">Todos</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  