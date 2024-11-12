import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './BankDetails.css';

const BankDetails = () => {
  return (
    <div className="container">
      <header>
        {/* Navigation Bar */}  
        <nav className="navbar1 navbar-light bg-dark itsok">
          <div className="navmine" id="navbarNav">
            <ul className="navbar-nav navmine">
              <li className="nav-item">
                <a className="nav-link custom-text-color" href="#addDataForm">Create Entry</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-text-color" href="#addQueryForm">Add Observation</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-text-color" href="#getDetailsForm">Get Bank Details</a>
              </li>
              <li className="nav-item">
                {/* Use Link for navigation */}
                <Link className="nav-link custom-text-color" to="/BankSystemView">Generate Report</Link>
              </li>
              <li className="nav-item">
                {/* Use Link for navigation */}
                <Link className="nav-link custom-text-color" to="/dashboard">Bank Dashboard</Link>
              </li>
              <li className="nav-item">
                {/* Use Link for navigation */}
                <Link className="nav-link custom-text-color" to="/BankSystemView">View Bank Details</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="content-section mt-4">
        {/* Forms for dashboard actions */}
        <form id="addDataForm" className="itsok">
          <h3 className="form-heading">Create Entry</h3>
          <div className="form-group">
            <label>Account Number</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Name of Borrower</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Date of Sanction/Renewal</label>
            <input type="date" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Sanctioned Amount</label>
            <input type="number" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Outstanding Balance</label>
            <input type="number" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Other Facilities</label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Create Entry</button>
        </form>

        <form id="addQueryForm" className="mt-5">
          <h3 className="form-heading">Add Observation</h3>
          <div className="form-group">
            <label>Account Number</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Query</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Details</label>
            <textarea className="form-control"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Add Query</button>
        </form>

        <form id="getDetailsForm" className="mt-5">
          <h3 className="form-heading">Get Bank Details</h3>
          <div className="form-group">
            <label>Account Number</label>
            <input type="text" className="form-control" required />
          </div>
          <button type="submit" className="btn btn-primary">Get Details</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5">
        <p className="text-muted">&copy; 2024 Bart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BankDetails;
