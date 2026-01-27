import { useState } from "react";
import travelersArray from "../../travelers";
import TravelersCard from "../components/TravelersCard";
import { useParams } from "react-router-dom";
import ButtonGoBack from "../components/ButtonGoBack";

export default function Travelers() {
    const { id } = useParams()
    const viaggiatori = travelersArray.filter((traveler) => traveler.id_travel === parseInt(id))
    const [filteredTravelers, setFilteredTravelers] = useState(viaggiatori);
    const [filterVar, setFilterVar] = useState("");

    function filter(event) {
        event.preventDefault();
        const completeName = viaggiatori.map((traveler) => traveler.name + " " + traveler.surname);
        const newFilteredTravelers = viaggiatori.filter((traveler, index) =>
            completeName[index].toLowerCase().includes(filterVar.toLowerCase())
        );
        setFilteredTravelers(newFilteredTravelers);
    }

    function reset() {
        setFilteredTravelers(viaggiatori)
        setFilterVar("")
    }


    return (
        <>
            <div className="container">
                <div className="d-flex align-items-center gap-2 title-bar"><ButtonGoBack /><h1>Viaggi</h1></div>
                <nav className="navbar">
                    <div className="container">
                        <form className="d-flex align-items-center gap-2 border rounded-pill px-3 py-2 shadow-sm" role="search" onSubmit={() => filter(event)}>
                            <input className="form-control border-0 bg-transparent shadow-none" type="search" placeholder="Search" aria-label="Search" value={filterVar} onChange={(event) => setFilterVar(event.target.value)} />
                            <button className="btn buttons" type="submit"><i className="bi bi-search"></i></button>
                            <button className="btn buttons" onClick={reset}><i className="bi bi-arrow-counterclockwise"></i></button>
                        </form>
                    </div>
                </nav>
                <div className="row">
                    {filteredTravelers.map((traveler) => (
                        <div className="col-12 col-md-6 mb-3" key={traveler.id}>
                            <TravelersCard traveler={traveler} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}