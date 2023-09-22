import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apidata = "https://fakestoreapi.com/products/";

const App = () => {
  const [alldata, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(apidata);
      setData(response.data);
    };

    getData();
  }, []);

  return (
    <>
      <h1> Fake Store Data</h1>
      <div className='container p-2 m-2'>
        <div className='row'>
          {alldata.map((post) => {
            const { id, title, image, description } = post;
            return (
              <div className='col-4' key={id}>
                <div className="card m-2 d-flex flex-column h-100">
                  <img src={image} className="card-img-top img-fluid w-50 p-2" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
