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
      {travels.map((travel) => (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={"/image/" + travel.image} className="img-fluid rounded-start" alt={travel.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{travel.name}</h5>
                <p className="card-text">{travel.description}</p>
                <p className="card-text">from: {travel.initial_date} to: {travel.final_date} </p>
                <p className="card-text"><small className="text-muted">travel created at : {travel.created_at}</small></p>
              </div>
            </div>
          </div>
        </div>
      ))}



    </>
  )
}

export default App
