import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use the useNavigate hook
import { motion } from 'framer-motion';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook for programmatic navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Simply redirect to the Dashboard page without validation
    alert('Login successful');
    navigate('/dashboard');  // Redirect to dashboard page
  };

  return (
    <motion.div
      className="login loginCard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </motion.div>
  );
};

export default Login;
