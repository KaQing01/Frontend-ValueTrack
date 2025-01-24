import React, { useContext, useState } from 'react';
import Value from "../components/Value"
import { DataContext } from '../App';
import DisplayTrack from '../components/DisplayTrack';

function Incomes() {
  const {totalIncome,filteredValues} = useContext(DataContext);
  const [searchId, setSearchId] = useState("");
   
  // Filter all values by valueType (income) and pass them to the <Value> component to display them
  const incomeList = filteredValues
  .filter((value) => value.valueType === "Income")
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
      color={"green"}
  />
  ));

  const filteredIncomeList = searchId ? incomeList.filter((income) => income.props.id.includes(searchId)) : incomeList;

 // Display incomes or a message if no incomes exist
 function displayIncomes() {
  if (totalIncome === 0) {
    return "No Incomes with the selected month!";
  } else if (searchId && filteredIncomeList.length === 0) {
    return "No incomes found with the provided ID!";
  } else {
    return filteredIncomeList;
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
            <h2 style={{ marginRight: "15px" }}>List of Incomes</h2>
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
          <ul>{displayIncomes()}</ul>
        </div>

      {/* Display total incomes */}
      <div className="col-3" style={{ color: "green" }}>
        <DisplayTrack totalValueType={totalIncome} valueType={"Incomes"} />
      </div>
    </div>
  </div>
);
}

export default Incomes;

