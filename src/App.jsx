import React, { useState, useEffect, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import axios from 'axios';

// Create a context to share data across the component tree
export const DataContext = createContext(); 

const App = () => {
  const [values, setValues] = useState([]); // store all values fetched from the backend
  const [companies, setCompanies] = useState([]); // store all companies fetched from the backend

  // Store and track the selected month
  const [selectedMonth, setSelectedMonth] = useState(""); 

  // Fetch values from the backend
  useEffect(() => {
    axios
    .get('http://localhost:5081/values')
    .then((response) => setValues(response.data))
    .catch((error) => console.error(error));
  }, [values]);

  // Fetch companies from the backend
  useEffect(() => {
    axios
    .get('http://localhost:5081/companies')
    .then((response) => setCompanies(response.data))
    .catch((error) => console.error(error));
  }, [companies]);

  // Array of months for select month dropdown 
  const monthNames = [
    'January', 'February', 'March', 'April','May', 'June',
    'July','August', 'September', 'October','November', 'December',
  ];
  
  // Get the selected month index
  const selectedMonthIndex = selectedMonth ? monthNames.indexOf(selectedMonth) + 1 : null;

  // Filter values based on the selected month
  const filteredValues = values.filter((value) => {
    if (!selectedMonthIndex) return true; // If no month is selected, return all values
    const valueDate = new Date(value.date);
    return valueDate.getMonth() + 1 === selectedMonthIndex;
  });

  // Calculate total income from filtered values
  const totalIncome = filteredValues
  .filter((value) => value.valueType === "Income")
  .reduce((sum, value) => sum + parseFloat(value.amount), 0);

  // Calculate total expenses from filtered values
  const totalExpense = filteredValues
  .filter((value) => value.valueType === "Expense")
  .reduce((sum, value) => sum + parseFloat(value.amount), 0);

  const savings = totalIncome - totalExpense;

  // Display savings only when it's positive
  function getSavings(savings){
    if(savings < 0){
      return 0;
    }else{
      return savings.toFixed(2);
    }
  }

  return (
    // Provide the data and functions to the component tree via context
    <DataContext.Provider
      value={{
        values,
        companies,
        filteredValues,
        selectedMonth,
        setSelectedMonth,
        monthNames,
        totalIncome,
        totalExpense,
        savings,
        getSavings,
        setValues,
        setCompanies,
      }}
    >
      <Navbar />
      <Outlet /> {/* Render child components for nested routes */}
    </DataContext.Provider>
  );
};

export default App;
