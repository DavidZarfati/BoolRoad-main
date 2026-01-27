import travelersArray from "../../travelers.js"
import React, { useState } from 'react';


export default function TravelersCard({ traveler }) {
    const [isVisible, setIsVisible] = useState(false);
    if (!traveler) return null;
    return (
        <>
            <div className="travel-card" id="altezza" key={traveler.id}>
                <div
                    className="travel-card-bg" id="traveler"
                    style={{ backgroundImage: `url(/image/${traveler.img})`, opacity: 0.70 }}
                ></div>
                <div className="travel-card-overlay traveler-overlay">
                    <h5 className="travel-title traveler-title px-2">
                        {traveler.name} {traveler.surname}
                    </h5>

                    <button className="btn bg-light border rounded-pill px-4 py-2 shadow-sm 
               d-inline-flex align-items-center gap-2" onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? 'Nascondi' : 'Mostra'} Informazioni Personali <i className="bi bi-plus-lg text-secondary"></i>
                    </button>
                    {isVisible && (<>
                        <p className="travel-subtitle traveler-subtitle px-3 my-3">
                            <strong>Email:</strong> <a className="text-white" href="">{traveler.email}</a>
                        </p>
                        <p className="travel-subtitle traveler-subtitle px-3">
                            <strong>Telefono:</strong> <a className="text-white" href="">{traveler.phone_number}</a>
                        </p>
                        <p className="travel-subtitle traveler-subtitle px-3">
                            <strong>CF:</strong> {traveler.CF}
                        </p>
                    </>

                    )}
                </div>
            </div>
        </>
    );
}