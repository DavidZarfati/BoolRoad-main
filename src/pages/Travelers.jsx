import travelersArray from "../../travelers.js";
import TravelersCard from "../components/TravelersCard";

export default function Travelers() {
    return (
        <main className="travelers-container">
            {travelersArray.map((traveler) => (
                <TravelersCard traveler={traveler} key={traveler.id} />
            ))}
        </main>
    );
}
