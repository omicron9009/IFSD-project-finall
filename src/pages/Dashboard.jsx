import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Dashboard.css';

const Dashboard = () => {
  // Hardcoded bank data
  const banks = [
    {
      bankName: 'ABC Bank',
      branchName: 'Main Branch',
      branchLocation: 'New York, NY',
    },
    {
      bankName: 'XYZ Bank',
      branchName: 'Central Branch',
      branchLocation: 'Los Angeles, CA',
    },
    {
      bankName: 'PQR Bank',
      branchName: 'Downtown Branch',
      branchLocation: 'Chicago, IL',
    },
    {
      bankName: 'LMN Bank',
      branchName: 'East Branch',
      branchLocation: 'Miami, FL',
    },
    {
      bankName: 'DEF Bank',
      branchName: 'West Branch',
      branchLocation: 'Houston, TX',
    },
    {
        bankName: 'ABC Bank',
        branchName: 'Main Branch',
        branchLocation: 'New York, NY',
      },
      {
        bankName: 'XYZ Bank',
        branchName: 'Central Branch',
        branchLocation: 'Los Angeles, CA',
      },
      {
        bankName: 'PQR Bank',
        branchName: 'Downtown Branch',
        branchLocation: 'Chicago, IL',
      },
      {
        bankName: 'LMN Bank',
        branchName: 'East Branch',
        branchLocation: 'Miami, FL',
      },
      {
        bankName: 'DEF Bank',
        branchName: 'West Branch',
        branchLocation: 'Houston, TX',
      },
  ];

  const navigate = useNavigate(); // Initialize the navigate hook

  const handleViewData = (bank) => {
    // Navigate to the BankDetails page (without passing the id)
    navigate('/bankdetails', { state: { bankData: bank } });
  };

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Bank Dashboard</h2>
      <div className="bank-cards">
        {banks.map((bank, index) => (
          <div key={index} className="card">
            <h3>{bank.bankName}</h3>
            <p>{bank.branchName}</p>
            <p>{bank.branchLocation}</p>
            <button onClick={() => handleViewData(bank)}>
              View Data
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Dashboard;
