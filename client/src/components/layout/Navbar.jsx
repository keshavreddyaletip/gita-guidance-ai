import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBookOpen,
  FaHistory,
  FaStar,
  FaUserCircle,
} from "react-icons/fa";

export default function Navbar() {
  const linkStyle =
    "flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-indigo-800 transition";

  return (
    <nav className="bg-indigo-900 text-white shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl font-bold text-yellow-400">
          🪷 GitaMitra
        </h1>

        <div className="flex gap-3">

          <NavLink className={linkStyle} to="/home">
            <FaHome />
            Home
          </NavLink>

          <NavLink className={linkStyle} to="/chapters">
            <FaBookOpen />
            Chapters
          </NavLink>

          <NavLink className={linkStyle} to="/journey">
            <FaHistory />
            My Journey
          </NavLink>

          <NavLink className={linkStyle} to="/favorites">
            <FaStar />
            Favorites
          </NavLink>

        </div>

        <NavLink to="/profile">

          <FaUserCircle className="text-4xl hover:text-yellow-400 transition" />

        </NavLink>

      </div>

    </nav>
  );
}