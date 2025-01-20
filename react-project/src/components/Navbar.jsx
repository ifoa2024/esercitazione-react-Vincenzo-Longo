import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";  

export default function Navbar() {
  const { logout } = useAuth();  
  const navigate = useNavigate();
  const location = useLocation();  

  const handleLogout = () => {
    logout();  
    navigate("/");  
  };

  if (location.pathname === "/") {
    return null;
  }

  return (
    <header>
      <nav>
        <div className="flex justify-between p-5 bg-[#38BDF8] text-white">
          <span className="text-2xl">Navbar</span>
          <div>
            <ul className="flex items-center gap-5 text-lg">
              <NavLink to="/home">
                <li>Home</li>
              </NavLink>
              <NavLink to="/info">
                <li>Info</li>
              </NavLink>
              <NavLink to="/contacts">
                <li>Contacts</li>
              </NavLink>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
