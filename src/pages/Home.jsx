import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Home() {
    const [travels, setTravels] = useState([])
    useEffect(() => {
        axios
            .get(`http://localhost:3000/boolroad`)
            .then((resp) => {
                setTravels(resp.data)
                // console.log(resp.data)
            })
    }, [])

    return (
        <main className="app-container p-5 mx-auto my-5">
            {travels.map((travel) => (
                <Link
                    to={`/travels/${travel.slug}`}
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
                            {travel.initial_date.substring(0, 10)} → {travel.final_date.substring(0, 10)}
                        </p>
                    </div>
                </Link>
            ))}
        </main>
    );
}