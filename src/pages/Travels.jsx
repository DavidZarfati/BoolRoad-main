import { useState } from "react";
import travelersArray from "../../travelers";
import TravelersCard from "../components/TravelersCard";
import { useParams } from "react-router-dom";

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
            <h1>Viaggi</h1>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <form className="d-flex" role="search" onSubmit={() => filter(event)}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={filterVar} onChange={(event) => setFilterVar(event.target.value)} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        <button className="btn btn-warning ms-2" onClick={reset}>Reset</button>
                    </form>
                </div>
            </nav>
            {filteredTravelers.map((traveler) => (
                <TravelersCard key={traveler.id} traveler={traveler} />
            ))}
        </>
    )
}