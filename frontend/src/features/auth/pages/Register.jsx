import React from "react";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <main>
      <div className="form-container">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          {/* username */}
          <div className="input-group">
            <label htmlFor="username">username</label>
            <input
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
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
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
