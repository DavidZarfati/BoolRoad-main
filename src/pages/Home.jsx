// import travels from "../../data.js"
// import { Link, NavLink } from "react-router-dom"

// export default function Home() {
//     return (
//         <>
//             {travels.map((travel) => (
//                 <div className="card mb-3" key={travel.id}>
//                     <div className="row g-0">
//                         <div className="col-md-4">
//                             <img src={"/image/" + travel.image} className="img-fluid rounded-start" alt={travel.name} />
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h5 className="card-title">{travel.name}</h5>
//                                 <p className="card-text">{travel.description}</p>
//                                 <p className="card-text">from: {travel.initial_date} to: {travel.final_date} </p>
//                                 <p className="card-text"><small className="text-muted">travel created at : {travel.created_at}</small></p>
//                                 <Link to={`/travels/${travel.id}`} className="btn btn-primary btn-sm">Vedi dettagli</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div >
//             ))
//             }
//         </>
//     )
// }
import travels from "../../data.js";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="app-container mx-auto my-5">
            {travels.map((travel) => (
                <Link
                    to={`/travels/${travel.id}`}
                    key={travel.id}
                    className="travel-card"
                >
                    <div
                        className="travel-card-bg"
                        style={{
                            backgroundImage: `url(/image/${travel.image})`,
                        }}
                    ></div>

                    <div className="travel-card-overlay">
                        <h5 className="travel-title">{travel.name}</h5>
                        <p className="travel-subtitle">
                            {travel.initial_date} → {travel.final_date}
                        </p>
                    </div>
                </Link>
            ))}
        </main>
    );
}