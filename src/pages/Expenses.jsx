import React, { useContext, useState } from 'react';
import Value from "../components/Value";
import { DataContext } from '../App';
import DisplayTrack from '../components/DisplayTrack';

function Expenses() {
  const { totalExpense, filteredValues, values, setValues } = useContext(DataContext);
  const [searchId, setSearchId] = useState(""); // State for the search input

  // Filter all values by valueType (expense) and pass them to the <Value> component to display them
  const expenseList = filteredValues
    .filter((value) => value.valueType === "Expense")
    .map((value) => (
      <Value
        key={value._id} 
        id={value._id}
        valueType={value.valueType}
        category={value.category}
        company={value.company}
        amount={value.amount}
        description={value.description}
        date={value.date}
        color={"red"}
        values={values}
        setValues={setValues}
      />
    ));

  // Filter the list by ID if a search is performed
  const filteredExpenseList = searchId ? expenseList.filter((expense) => expense.props.id.includes(searchId)) : expenseList;

  // Display expenses or a message if no expenses exist
  function displayExpenses() {
    if (totalExpense === 0) { 
      return "No Expenses with the selected month!";
    } else if (searchId && filteredExpenseList.length === 0) {
      return "No expenses found with the provided ID!";
    } else {
      return filteredExpenseList; 
    }
  }

  return (
    <div>
      <div className="row">
        {/* Title and Search Bar */}
        <div className="col-8">
          <div
            style={{
              display: "flex",
              alignItems: "flex-start", 
              margin: "20px", 
            }}
          >
            <h2 style={{ marginRight:"15px" }}>List of Expenses</h2>
            <input
              type="text"
              placeholder="Search by ID"
              value={searchId} 
              onChange={(e) => setSearchId(e.target.value)}
              style={{
                width: "40%", 
                padding: "10px", 
                borderRadius: "5px", 
                border: "1px solid #ccc", 
              }}
            />
          </div>
          <ul>{displayExpenses()}</ul>
        </div>

        {/* Display total expenses */}
        <div className="col-3" style={{ color: "red" }}>
          <DisplayTrack totalValueType={totalExpense} valueType={"Expenses"} />
        </div>
      </div>
    </div>
  );
}

export default Expenses;
