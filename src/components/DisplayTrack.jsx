import React, { useContext } from 'react';
import { DataContext } from '../App';

function DisplayTrack (props){
  const { selectedMonth, setSelectedMonth,monthNames} = useContext(DataContext);
    return (
      <div id="displayMonthlyTrack" style={{width:"400px"}}>
        <div 
          className="container text-center" 
          style={{marginTop: '50px', border: '2px solid black',borderRadius: '5px',}} 
        >
        <div>
          <div className="row" style={{backgroundColor: 'black'}}>
            <h1 className="col">{selectedMonth ? selectedMonth : `Monthly ${props.valueType}`}</h1>
            <div className="col" style={{marginTop:"20px"}}>
              <label id="selectedMonth" className="col" style={{ margin: '20px 5px 0px 0px' }}></label>
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
              <p>Total {props.valueType}</p>
              <span>C$ {props.totalValueType.toFixed(2)}</span>
            </div>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTrack;
