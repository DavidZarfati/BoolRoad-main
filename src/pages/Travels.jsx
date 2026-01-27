import { useEffect, useState } from "react";
import travelersArray from "../../travelers";
import TravelersCard from "../components/TravelersCard";
import { useParams } from "react-router-dom";
import ButtonGoBack from "../components/ButtonGoBack";
import axios from "axios";

export default function Travelers() {
    const { slug } = useParams()
    // const viaggiatori = travelersArray.filter((traveler) => traveler.id_travel === parseInt(id))
    const [filteredTravelers, setFilteredTravelers] = useState([]);
    const [filterVar, setFilterVar] = useState("");
    const [travelers, setTravelers] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:3000/boolroad/${slug}`)
            .then((resp) => {
                setTravelers(resp.data)
                setFilteredTravelers(resp.data)
            })
    }, [])



    function filter(event) {
        event.preventDefault();
        const completeName = travelers.map((traveler) => traveler.name + " " + traveler.surname);
        const newFilteredTravelers = travelers.filter((traveler, index) =>
            completeName[index].toLowerCase().includes(filterVar.toLowerCase())
        );
        setFilteredTravelers(newFilteredTravelers);
    }

    function reset() {
        setFilteredTravelers(travelers)
        setFilterVar("")
    }


    return (
        <>
            <div className="container">
                <div className="d-flex align-items-center gap-2 title-bar"><ButtonGoBack /><h2>Viaggi</h2></div>
                <nav className="navbar">
                    <div className="container py-4">
                        <form className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm mb-4 w-100" role="search" onSubmit={() => filter(event)}>
                            <input className="form-control border-0 bg-transparent shadow-none flex-grow-1" type="search" placeholder="Search" aria-label="Search" value={filterVar} onChange={(event) => setFilterVar(event.target.value)} />
                            <button className="btn buttons" type="submit"><i className="bi bi-search"></i></button>
                            <button className="btn buttons" onClick={reset}><i className="bi bi-arrow-counterclockwise"></i></button>
                        </form>
                    </div>
                </nav>
                {filteredTravelers.length == 0 ? <div>nessun partecipante trovato</div> :
                    <div className="row">
                        {filteredTravelers.map((traveler) => (
                            <div className="col-12 col-md-6 mb-3" key={traveler.id}>
                                <TravelersCard traveler={traveler} />
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}