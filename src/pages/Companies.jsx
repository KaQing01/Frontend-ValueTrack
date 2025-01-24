import React, { useContext } from 'react';
import { DataContext } from '../App';

//Page that displays the list of saved companies
function Companies() {
  const { companies } = useContext(DataContext);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5" style={{fontWeight: '700', fontSize: '2.5rem', color: '#333',}}>Companies Directory</h1>
      <div className="row justify-content-center">
        {companies && companies.length > 0 ? (companies.map((company) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100 shadow-sm border-0" style={{borderRadius: '12px',transition: 'transform 0.3s ease, box-shadow 0.3s ease',}}>
                {/* Card Header */}
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
                >{company.name}</div>
                
                {/* Card Body */}
                <div className="card-body">
                  <p
                    style={{
                    fontSize: '1rem',
                    color: '#555',
                    lineHeight: '1.6',
                    marginBottom: '10px',
                  }}>
                    <strong>Type:</strong> {company.type}
                    <br />
                    <strong>Location:</strong> {company.location}
                  </p> 
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No companies stored.</p>
        )}
      </div>
    </div>
  );
}

export default Companies;
