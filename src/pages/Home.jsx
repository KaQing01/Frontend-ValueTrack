import React, {useState, useContext } from 'react';
import { DataContext } from '../App';
import axios from "axios";
import Form from "../components/Form";

function Home() {
  const {selectedMonth, setSelectedMonth, monthNames, totalIncome, 
  totalExpense, savings, getSavings, values, setValues, companies, setCompanies} = useContext(DataContext);

  // Make a POST request to the backend to add a new value
  function addValue(valueType, category, company,amount,description,date) {
    axios
    .post('http://localhost:5081/values', { valueType, category,company,amount,description,date})
    .then((response) => setValues([...values, response.data]))
    .catch((error) => console.error(error));
  }

  // Make a POST request to the backend to add a new company
  function addCompany(name, type, location) {
    axios
    .post('http://localhost:5081/companies', { name, type, location})
    .then((response) => setCompanies([...companies, response.data]))
    .catch((error) => console.error(error));
  }

  return (
    <div className="todoapp stack-large">
      <div id="displayMonthlyTrack">
          <div 
            className="container text-center" 
            style={{marginTop: '50px', border: '2px solid black',borderRadius: '5px',}} 
          >
          <div>
            <div className="row" style={{backgroundColor: 'black'}}>
              <h1 className="col">{selectedMonth ? selectedMonth : "Monthly $ Track"}</h1>
              <div className="col">
                <label id="selectedMonth" className="col" style={{ margin: '20px 5px 0px 0px' }}> Select Month: </label>
                <select
                  className="col text-center"
                  id="month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                >
                  <option value="">All Months</option>
                  {monthNames.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="row text-center align-items-center"
              id="displayValues"
              style={{ margin: '20px' }}
            >
              <div className="col">
                <p>Expenses</p>
                <span id="expenses">- C${totalExpense.toFixed(2)}</span>
              </div>
              <div className="col">
                <p>Incomes</p>
                <span id="incomes">+ C${totalIncome.toFixed(2)}</span>
              </div>
              <div className="col">
                <p>Savings</p>
                <span id="savings">C$ {getSavings(savings)}</span>
              </div>
            </div>
          </div>
        </div>
    </div> 
      <Form addValue={addValue} addCompany={addCompany} companies={companies}/> 
    </div>
  );
}

export default Home;