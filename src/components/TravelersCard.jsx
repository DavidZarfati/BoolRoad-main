import travelersArray from "../../travelers.js"
import React, { useState } from 'react';

export default function TravelersCard({ traveler }) {
    const [isVisible, setIsVisible] = useState(false);
    if (!traveler) return null;
    return (
        <>
            <div className="d-flex flex-wrap gap-3">
                <div className="card" style={{ width: "18rem" }} key={traveler.id}>
                    <img src={"/image/" + traveler.img} className="img-fluid rounded-start" alt={traveler.name} />
                    <div className="card-body">
                        <h5 className="card-title">
                            {traveler.name} {traveler.surname}
                        </h5>

                        <button className="btn btn-outline-primary" onClick={() => setIsVisible(!isVisible)}>
                            {isVisible ? 'Nascondi' : 'Mostra'} Informazioni Personali
                        </button>
                        {isVisible && (<>
                            <p className="card-text">
                                <strong>Email:</strong> {traveler.email}
                            </p>
                            <p className="card-text">
                                <strong>Telefono:</strong> {traveler.phone_number}
                            </p>
                            <p className="card-text">
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