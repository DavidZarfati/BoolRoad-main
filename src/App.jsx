import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import travels from "../data.js"
import travelers from "../data.js"

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <h1>Benvenuti dai los cavallos hermanos</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={"/image/" + travels[0].image} className="img-fluid rounded-start" alt={travels[0].name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{travels[0].name}</h5>
              <p className="card-text">{travels[0].description}</p>
              <p className="card-text">from: {travels[0].initial_date} to: {travels[0].final_date} </p>
              <p className="card-text"><small className="text-muted">travel created at : {travels[0].created_at}</small></p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
