import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/register",
        formData
      );
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="signup-container">
      {/* LEFT FORM */}
      <div className="signup-form">
        <h2>Create Account</h2>
        <p>Join us and stay updated</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <span className="login-text">
          Already have an account? <a href="/login">Login</a>
        </span>
      </div>

      {/* RIGHT IMAGE */}
      <div className="signup-image">
        <img
          src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
          alt="signup visual"
        />
      </div>
    </div>
  );
};

export default Signup;
