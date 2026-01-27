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
                    <h5 className="travel-title traveler-title">
                        {traveler.name} {traveler.surname}
                    </h5>

                    <button className="btn bg-light border rounded-pill px-4 py-2 shadow-sm 
               d-inline-flex align-items-center gap-2" onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? 'Nascondi' : 'Mostra'} Informazioni Personali <i className="bi bi-plus-lg text-secondary"></i>
                    </button>
                    {isVisible && (<>
                        <p className="travel-subtitle traveler-subtitle">
                            <strong>Email:</strong> {traveler.email}
                        </p>
                        <p className="travel-subtitle traveler-subtitle">
                            <strong>Telefono:</strong> {traveler.phone_number}
                        </p>
                        <p className="travel-subtitle traveler-subtitle">
                            <strong>CF:</strong> {traveler.CF}
                        </p>
                    </>

                    )}
                </div>
            </div>
        </>
    );
}