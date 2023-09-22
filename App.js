import React, { useEffect, useState } from 'react'
import axios from 'axios';

const apidata = "https://fakestoreapi.com/products/";

const App = () => {
  const [alldata, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(apidata);
      setData(response.data);
    }

    getData();
  }, [])
  return (
    <>
      <h1> Fake Store Data</h1>
      <div className='container p-2 m-2'>
              <div className='row'>
      {
        alldata.map((post) => {
          const { id, title, image, description } = post;
          return (
           
                <div className='col-4'>
                <div class="card m-2" key={id} style={{ width: "400px", height:"500px"}}>
                  <img src={image} class="card-img-top img-fluid w-50 p-2" alt="..." />
                  <div class="card-body d-flex">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                  </div>
                </div>
                </div>
           
          )

        })
      }
         </div>
            </div>


    </>
  )
}

export default App