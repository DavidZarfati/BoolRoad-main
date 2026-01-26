import travelersArray from "../../travelers";
import TravelersCard from "../components/TravelersCard";
import { useParams } from "react-router-dom";

export default function Travelers() {
    const { id } = useParams()
    // console.log(travelersArray);
    // console.log(id)

    const viaggiatori = travelersArray.filter((traveler) => traveler.id_travel === parseInt(id))

    // console.log(viaggiatori);

    return (
        <>
            <h1>Viaggi</h1>
            {viaggiatori.map((traveler) => (
                <TravelersCard key={traveler.id} traveler={traveler} />
            ))}
        </>
    )
}