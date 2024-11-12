import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import './Home.css';

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to B.A.R.T, the Bank Audit Report Tool</h1>
      <div className="card-container">
        <Card title="A tool for" description="View bank details" />
        <Card title="A tool for" description="Make queries" />
        <Card title="A tool for" description="Generate reports!" />
      </div>
    </motion.div>
  );
}

export default Home;
