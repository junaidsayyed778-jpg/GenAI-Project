import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loading, handleRegister} = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ username, email, password });
    navigate("/");
  };
  if(loading){
    return (<main><h1>Loading...</h1></main>)
  }
  return (
    <main>
      <div className="form-container">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          {/* username */}
          <div className="input-group">
            <label htmlFor="username">username</label>
            <input
            onChange={(e)=>{setUsername(e.target.value)}}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
            onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
            onChange={(e)=>{setPassword(e.target.value)}}
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Submit Button */}
          <button className="primary-button" type="submit">
            Register
          </button>

          {/* Login Link */}
          <div
            style={{
              marginTop: "1.5rem",
              textAlign: "center",
              fontSize: "0.875rem",
              color: "#a1a1aa",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#e1034d",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
