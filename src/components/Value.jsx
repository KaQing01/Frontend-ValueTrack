import { useState } from "react";
import axios from "axios";

function Value(props) {
  const [isEditing, setEditing] = useState(false);
  const [category, setCategory] = useState(props.category);
  const [company, setCompany] = useState(props.company);
  const [amount, setAmount] = useState(props.amount);
  const [description, setDescription] = useState(props.description);
  const [date, setDate] = useState(props.date);

  // Edit a value info
  function editValue(id, valueType, category, company,amount,description,date) {
    axios
    .patch(`http://localhost:5081/values/${id}`, { valueType: valueType, category: category, company: company, amount: amount, description: description, date: date})
    .then((response) => {
    const updatedValue = response.data;
    const editedValueList = props.values.map((value) =>
    value._id === id ? updatedValue : value
    );
    setValues(editedValueList);
    })
    .catch((error) => console.error(error));
    }

  // Delete a value
  function deleteValue(id) {
    axios
    .delete(`http://localhost:5081/values/${id}`)
    .then(() => setValues(props.values.filter((value) => value._id !== id)))
    .catch((error) => console.error(error));
  }

  function handleSubmit(e) {
    e.preventDefault();
    editValue(props.id, props.valueType, category, company, amount, description, date);
    setEditing(false);
  }

  const editingTemplate = (
    <div
      className="iexpenses-details container border rounded shadow-sm mb-4 p-4" 
      style={{ width: "880px", marginLeft: "0", marginTop:"40px", backgroundColor: "grey"}}
    >
    <form className="stack-small" onSubmit={handleSubmit}>
      <div  style={{backgroundColor: "white", padding: "5px"}} >
      <div className="row align-items-center m-2">
        <div className="col-4"><strong>Category:</strong></div>
        <div className="col-8">
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        
        <div className="col-4"><strong>Company:</strong></div>
        <div className="col-8">
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="col-4"><strong>Amount:</strong></div>
        <div className="col-8">
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      
        <div className="col-4"><strong>Description:</strong></div>
        <div className="col-8">
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        
        <div className="col-4"><strong>Date:</strong></div>
        <div className="col-8">
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button type="button" className="btn btn-danger" onClick={() => setEditing(false)}> Cancel </button>
        <button type="submit" className="btn btn-success me-2"> Update </button>
      </div>
      </div>
    </form>
  </div>
);

  const viewTemplate = (
    <div
      className="iexpenses-details container border rounded shadow-sm mb-4 p-4" 
      style={{ width: "880px", marginLeft: "0", marginTop:"40px", backgroundColor: "grey"}}
    >
      <div style={{backgroundColor: "white", padding: "5px"}}>
        <div className="row align-items-center m-2">
          <div className="col-4"><strong>Category</strong></div>
          <p className="col-8">{props.category}</p>
        
          <div className="col-4"><strong>Company</strong></div>
          <div className="col-8">{props.company}</div>
          
          <div className="col-4"><strong>Amount</strong></div>
          <div className="col-8" style={{color:`${props.color}`}}>${props.amount}</div>
          
          <div className="col-4"><strong>Description</strong></div>
          <div className="col-8">{props.description}</div>
      
          <div className="col-4"><strong>Date</strong></div>
          <div className="col-8">{props.date.split("T")[0]}</div>
  
          <div className="col-4"><strong>ID</strong></div>
          <div className="col-8">{props.id}</div>
        </div>
        
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-success me-2" onClick={() => setEditing(true)}> Edit</button>
          <button className="btn btn-danger" onClick={() => deleteValue(props.id)}> Delete</button>
        </div>
      </div>
    </div>
    );
    
    return <div>{isEditing ? editingTemplate : viewTemplate}</div>;
}

export default Value;
