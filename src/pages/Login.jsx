import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // ✅ ADD THIS

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        formData
      );

      // OPTIONAL: Save token
      // localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      navigate("/"); // ✅ REDIRECT TO HOME

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      {/* LEFT IMAGE */}
      <div className={styles.loginImage}>
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051"
          alt="Login"
        />
      </div>

      {/* RIGHT FORM */}
      <div className={styles.loginForm}>
        <h2>Welcome Back</h2>
        <p>Login to continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />

          {error && <div className={styles.error}>{error}</div>}

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <span className={styles.signupText}>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
