import * as React from 'react';

const AdPage = ({ username, imageUrl, likes, caption }) => {
  return (

    <div className="container mt-5">
      <div className="row mb-5">
          <div className="d-flex pb-3 pt-1 shadow-4 text-center align-items-center bg-danger" style={{ height: "200px"}}>
              <h3>
                  Write suggestions in this section
              </h3>
          </div>
      </div>
      <div className="row">
          <div className="d-flex pb-3 pt-1 shadow-4 text-center align-items-center bg-success mb-2" style={{ height: "150px"}}>
              <h3>
                  Advertise Here
              </h3>
          </div>
          <div className="d-flex pb-3 pt-1 shadow-4 text-center align-items-center bg-success" style={{ height: "150px"}}>
              <h3>
                  Advertise Here
              </h3>
          </div>
      </div>
    </div>
  );
}
 export default AdPage;