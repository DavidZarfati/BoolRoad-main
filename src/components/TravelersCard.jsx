import travelersArray from "../../travelers.js"
import React, { useState } from 'react';


export default function TravelersCard({ traveler }) {
    const [isVisible, setIsVisible] = useState(false);
    if (!traveler) return null;
    return (
        <>
            <div>
                <div className="travel-card" style={{ width: "auto" }} key={traveler.id}>
                    <div
                        className="travel-card-bg"
                        style={{ backgroundImage: `url(/image/${traveler.img})`, opacity: 0.12 }}
                    ></div>
                    <div className="travel-card-overlay traveler-overlay">
                        <h5 className="travel-title traveler-title">
                            {traveler.name} {traveler.surname}
                        </h5>

                        <button className="btn btn bg-light border rounded-pill px-4 py-2 shadow-sm 
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
            </div>
        </>
    );
}