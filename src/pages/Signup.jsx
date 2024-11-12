import React from 'react';
import { motion } from 'framer-motion';
import './Signup.css';

function Signup() {
  return (
    <motion.div
      className="signup loginCard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Signup</button>
      </form>
    </motion.div>
  );
}

export default Signup;
