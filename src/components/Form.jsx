import React, { useState } from 'react';

function Form(props) {
  // Values collection
  const [valueType, setValueType] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  // Companies collection 
  const [nameofCompany, setCompanyName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  const [activeForm, setActiveForm] = useState(false); // Toggle form display
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [formType, setFormType] = useState(""); // Tracks which form is active (income/expense or company)

  const categoryList = [
    'Food', 'Transportion', 'Utilities', 
    'Groceries', 'Entertainment', 'Healthcare', 
    'Tuition Fee', 'Rent', 'Work', 'Awards or Scholarships',
    'Miscellaneous', 'Other',
  ];

  function handleSubmit(event) {
    event.preventDefault();
    if (formType === "addCompany") {
      props.addCompany(nameofCompany, type, location); // Use the addCompany function for adding a company
      setSuccessMessage("Company added successfully!");
    } else {
      props.addValue(valueType, category, company, amount, description, date); // Use the addValue function for income/expense
      setSuccessMessage("Value added successfully!");
    }

    setTimeout(() => setSuccessMessage(""), 3000);

    // Reset form fields after submission
    setValueType("");
    setCategory("");
    setAmount("");
    setDescription("");
    setDate("");
    setCompany("");
    setCompanyName("");
    setType("");
    setLocation("");

    setActiveForm(false); // Hide the form after submission
  }

  return (
    <div>
      {/* Success Message */}
      {successMessage && (
        <div
          className="alert alert-success text-center"
          role="alert"
          style={{ marginTop: "20px", width: "50%", marginLeft: "auto", marginRight: "auto" }}
        >
          {successMessage}
        </div>
      )}

      {/* Buttons to toggle forms */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "50px" }}>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            setActiveForm(true);
            setFormType("addValue");
          }}
        >
          Add Expense / Income
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setActiveForm(true);
            setFormType("addCompany");
          }}
        >
          Add Company
        </button>
      </div>

      {/* Form for Adding Expense/Income or Company */}
      {activeForm && (
        <form className="container mt-4 p-4 border rounded" style={{ maxWidth: "600px" }} onSubmit={handleSubmit}>
          {formType === "addValue" ? (
            <>
              <h2 className="label-wrapper">Add New Value</h2>
              {/* Value Type Radio Buttons */}
              <div className="row mb-3">
                <div className="col-4">
                  <label className="col-form-label">Value Type</label>
                </div>
                <div className="col-8">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="valueType"
                      id="expensesRadio"
                      value="Expense"
                      checked={valueType === "Expense"}
                      onChange={(e) => setValueType(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="expensesRadio"> Expense </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="valueType"
                      id="incomesRadio"
                      value="Income"
                      checked={valueType === "Income"}
                      onChange={(e) => setValueType(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="incomesRadio"> Income </label>
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="row mb-3">
                <div className="col-4">
                  <label htmlFor="inputCompany" className="col-form-label">Company</label>
                </div>
                <div className="col-8">
                <select
                  id="inputCompany"
                  className="form-select"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                >
                  <option value="">Select a Company</option>
                  {props.companies.map((company) => (
                    <option value={company.name}>
                      {company.name}
                    </option>
                  ))}
                </select>
                </div>
              </div>

              {/* Category Selection */}
              <div className="row mb-3">
                <div className="col-4">
                  <label htmlFor="inputCategory" className="col-form-label"> Category </label>
                </div>
                <div className="col-8">
                  <select
                    id="inputCategory"
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="">Select a Category</option>
                    {categoryList.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Amount */}
              <div className="row mb-3">
                <div className="col-4">
                  <label htmlFor="inputAmount" className="col-form-label"> Amount </label>
                </div>
                <div className="col-8">
                  <input
                    id="inputAmount"
                    type="number"
                    className="form-control"
                    placeholder="C$0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div className="row mb-3">
                <div className="col-4">
                  <label htmlFor="inputDescription" className="col-form-label"> Description </label>
                </div>
                <div className="col-8">
                  <textarea
                    id="inputDescription"
                    className="form-control"
                    placeholder="More details"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="3"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Date */}
              <div className="row mb-3">
                <div className="col-4">
                  <label htmlFor="inputDate" className="col-form-label"> Date </label>
                </div>
                <div className="col-8">
                  <input
                    id="inputDate"
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="label-wrapper">Add New Company</h2>
               {/* Company Name */}
              <div className="row mb-3">
                <div className="col-4">
                  <label htmlFor="inputCompanyName" className="col-form-label">Company Name</label>
                </div>
                <div className="col-8">
                  <input
                    id="inputCompanyName"
                    type="text"
                    className="form-control"
                    placeholder="Enter company name"
                    value={nameofCompany}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>
              </div>

               {/* Business Type */}
              <div className="row mb-3">
                <div className="col-4">
                  <label htmlFor="inputCompanyType" className="col-form-label">Type</label>
                </div>
                <div className="col-8">
                  <input
                    id="inputCompanyType"
                    type="text"
                    className="form-control"
                    placeholder="e.g.Food, Retail, Education..."
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                  />
                </div>
              </div>

               {/* Location */}
              <div className="row mb-3">
                <div className="col-4">
                  <label htmlFor="companyLocation" className="col-form-label">Location</label>
                </div>
                <div className="col-8">
                  <input
                    id="companyLocation"
                    type="text"
                    className="form-control"
                    placeholder="Enter address, city or country"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>
            </>
          )}

          {/* Submit and Cancel Buttons */}
          <div className="d-flex justify-content-end mt-4">
            <button type="button" className="btn btn-secondary" onClick={() => setActiveForm(false)}> Cancel </button>
            <button type="submit" className="btn btn-primary"> Save </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Form;
