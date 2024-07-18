import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser.js";

const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/mood-booster">Mood Boost</Link>
        </li> */}
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <Link to="/contact">Contact</Link>
        </li> */}
      </ul>
      {user ? (
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li onClick={() => signOut(getAuth())}>
            <Link>Logout</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/demo">Demo</Link>
          </li>
          <li onClick={() => navigate("/login")}>
            <Link>Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
