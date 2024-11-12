import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

function Card({ title, description }) {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default Card;
