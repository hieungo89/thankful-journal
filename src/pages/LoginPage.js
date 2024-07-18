import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/profile");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Log in</h1>
        {error && <p className="error">{error}</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => logIn()}>Log In</button>
        <Link className="account" to="/create-account">
          Don't have an account? Create one here
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
