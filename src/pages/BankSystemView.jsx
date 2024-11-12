import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import './BankSystemView.css';

const BankSystemView = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [banks, setBanks] = useState([
    {
      id: '1',
      bankName: 'Bank A',
      branchName: 'Main Branch',
      branchLocation: 'New York',
    },
    {
      id: '2',
      bankName: 'Bank B',
      branchName: 'Second Branch',
      branchLocation: 'California',
    },
    {
      id: '3',
      bankName: 'Bank C',
      branchName: 'Third Branch',
      branchLocation: 'Texas',
    },
  ]);

  const [selectedBank, setSelectedBank] = useState(null);

  const handleViewData = (bank) => {
    setSelectedBank(bank);
  };

  const handleGenerateReport = () => {
    alert(`Generating report for ${selectedBank.bankName}`);
  };

  return (
    <div className="container">
      <header>
        <h1>View Bank Data</h1>
        <nav className="navbar1 navbar-dark bg-dark itsok">
          <div className="navmine" id="navbarNav">
            <ul className="navbar-nav navmine">
              <li className="nav-item">
                <a className="nav-link text-white" href="#generate-report">
                  Generate Report
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#viewdata">
                  View Bank Data
                </a>
              </li>
              <li className="nav-item">
                {/* Use Link to navigate to the /dashboard route */}
                <Link className="nav-link text-white" to="/dashboard">
                  Bank Dashboard
                </Link>
              </li>
              <li className="nav-item">
                {/* Use Link to navigate to the /dashboard route */}
                <Link className="nav-link text-white" to="/bankdetails">
                  Data Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="o" id="generate-report">
        <h2>Generate Report</h2>
        <h4>Select a Bank to View Data</h4>

        <div id="bankList" className="card-columns">
          {banks.map((bank) => (
            <div key={bank.id} className="card">
              <div className="card-body">
                <h5 className="card-title">{bank.bankName}</h5>
                <p className="card-text">Branch: {bank.branchName}</p>
                <p className="card-text">Location: {bank.branchLocation}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleViewData(bank)}
                >
                  View Data
                </button>
                <button
                  className="btn btn-success ml-2"
                  onClick={handleGenerateReport}
                  style={{ marginTop: '10px' }}
                >
                  Generate Report
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedBank && (
          <div id="bankDataContainer" className="mt-5">
            <h4>Bank Data for: {selectedBank.bankName}</h4>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Account No: 1234567890</h5>
                <p className="card-text">Bank: {selectedBank.bankName}</p>
              </div>
            </div>
          </div>
        )}

        {selectedBank && (
          <div id="reportGenerationSection" className="">
            <h5>Select Report Format for {selectedBank.bankName}</h5>
            <select id="reportFormat" className="form-select sad">
              <option value="word">Word</option>
            </select>
            <button
              className="btn btn-success sad"
              id="generateReportBtn"
              onClick={handleGenerateReport}
            >
              Generate Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BankSystemView;
