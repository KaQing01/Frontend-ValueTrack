import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div >
      <div className="container" style={{marginTop:"20px"}}>
        <h3 className="text-bg-primary p-2 text-center">INSTRUCTIONS</h3>
        <h4 className="alert text-center">--- Use the navigation bar to switch between pages ---</h4>
      </div>

      {/*Home Page*/}
      <div className="container" style={{padding:"65px", borderBottom:"2px dashed black"}}>
        <Link className="nav-link" to="/">
          <h3><span class="badge text-bg-dark">Home</span></h3>
        </Link>
          <ol>
            <li>On the homepage, use the <em>"Select Month"</em> dropdown to filter the displayed data by month. 
            You can see the total incomes, expenses, and savings for the selected period.
            (by deafault it displays for all periods)</li>
            <li>Click the <span className="badge text-bg-warning">Add Expense / Income</span> button to open a form. Fill in the required fields (e.g., type, category, amount, date) and click Save. 
              Your new record of expenses or incomes will be added to the list.</li>
            <li>Navigate to the <span className="badge text-bg-secondary">Expense</span> or <span className="badge text-bg-success">Income</span> pages to search for a record...</li>
            <li>Click the <span className="badge text-bg-success">Add Company</span> button to open a form to save a company info. Fill in the required fields (e.g., Company Name, business type, location) and click Save. 
            The company will be saved on the <span className="badge text-bg-info">Companies</span> page.</li>
          </ol>

          <div id="displayMonthlyTrack">
            <Link className="nav-link" to="/">
            <div className="container text-center" style={{marginTop: '50px', border: '2px solid black', borderRadius:'5px',}}>
              <div>
                <div className="row" style={{backgroundColor: 'black'}}>
                  <h1 className="col">Monthly $ Track</h1>
                  <div className="col">
                    <label id="selectedMonth" className="col" style={{ margin: '20px 5px 0px 0px' }}> Select Month: </label>
                    <select className="col text-center" id="month">
                      <option>All Months</option>
                    </select>
                  </div>
                </div>
                <div className="row text-center align-items-center" id="displayValues" style={{ margin: '20px' }}>
                  <div className="col">
                    <p>Expenses</p>
                    <span id="expenses">-C$ 0.00</span>
                  </div>
                  <div className="col">
                    <p>Incomes</p>
                    <span id="incomes">+C$ 0.00</span>
                  </div>
                  <div className="col">
                    <p>Savings</p>
                    <span id="savings">C$ 0.00</span>
                  </div>
                </div>
              </div>
            </div>
            </Link>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop:"50px" }}>
              <button type="button" class="btn btn-warning">Add Expense / Income</button>
              <button type="button" class="btn btn-success">Add Company</button>
            </div>
          </div>
      </div>
          
    {/* Expense and Income pages */}
    <div className="container" style={{ padding: "65px", borderBottom:"2px dashed black" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "20px" }}>
          <Link to="/expenses">
            <h3>
              <span className="badge text-bg-secondary">Expense</span>
            </h3>
          </Link>
        </div>
        <div>
          <Link to="/incomes">
            <h3>
              <span className="badge text-bg-success">Income</span>
            </h3>
          </Link>
        </div>
      </div>
      <ol>
        <li>On the Income or Expenses pages, scroll to see all records for the selected month or all months.</li>
        <li>Search for a specific <strong>expense</strong> or <strong>income</strong> by ID on the search bar.</li>
        <li>Get monthly total <strong>expense</strong> or <strong>income</strong> filtered with a selected month.</li>
        <li><span className="badge text-bg-success">EDIT</span> feature to modify a single <strong>expense</strong> or <strong>income</strong> record.</li>
        <li><span className="badge text-bg-danger">DELETE</span> feature to remove a record from the database.</li>
      </ol>
      <p>Try yourself to see how it works! Click <span className="badge text-bg-secondary">Expense</span> OR <span className="badge text-bg-success">Income</span> </p>
    </div>

     {/*Companies page*/}
    <div className="container" style={{ padding: "65px", borderBottom:"2px dashed black" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "20px" }}>
          <Link to="/companies">
            <h3>
              <span className="badge text-bg-info">Companies</span>
            </h3>
          </Link>
        </div>
      </div>
      <ol>
        <li>This is the page where you can find a list of companies that you added from the <span class="badge text-bg-dark">Home</span> page. </li>
        <li>You can see information about their business type and branch location.</li>
      </ol>
  
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4" id="displayCompanyCard">
          <div className="card h-100 shadow-sm border-0" style={{borderRadius: '12px',transition: 'transform 0.3s ease, box-shadow 0.3s ease',}}>
            <div
              className="card-header"
              style={{
                backgroundColor: 'black',
                borderRadius: '12px 12px 0 0',
                padding: '1rem',
                color: '#fff',
                fontWeight: '600',
                fontSize: '1.25rem',
                textAlign: 'center',
              }}
            >Company Name</div>
                
            <div className="card-body">
              <p
                style={{
                fontSize: '1rem',
                color: '#555',
                lineHeight: '1.6',
                marginBottom: '10px',
              }}>
                <strong>Type:</strong> Business Type
                <br />
                <strong>Location:</strong> Address
              </p> 
            </div>
          </div>     
      </div>
    </div>
      
    {/*About page*/}
    <div className="container" style={{padding:"65px"}}>
      <Link to="/about">
        <h3><span class="badge text-bg-primary">About</span></h3>
      </Link>
      <ol>
        <li>Learn about the pages and how to use their features</li>
        <li>Get a brief description of each page</li>
      </ol>    
    </div>
  </div>
  );
};

export default About;
