import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "../shared/authForms.scss";
import { useNavigate } from "react-router";
const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const handleSubmit =async (e) => {
    e.preventDefault(e);
    await handleLogin({ email, password});
    navigate("/")
  }

  if(loading){
    return (<main><h1>Loading...</h1></main>)
  }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <button className="primary-button" type="submit">
            Login
          </button>

          {/* register Link */}
          <div
            style={{
              marginTop: "1.5rem",
              textAlign: "center",
              fontSize: "0.875rem",
              color: "#a1a1aa",
            }}
          >
            Don't have an account?{" "}
            <a
              href="/register"
              style={{
                color: "#e1034d",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              register
            </a>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
