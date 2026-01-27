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
    const [userInputData, setFormData] = useState({
        name: '',
        surname: '',
        phone_number: '',
        email: '',
        image: null,
        slug: slug,
        cf: '',
    });
    useEffect(() => {
        axios
            .get(`http://localhost:3000/boolroad/${slug}`)
            .then((resp) => {
                setTravelers(resp.data)
                setFilteredTravelers(resp.data)
            })
    }, [])

    const handleChange = (event) => {
        const { name, type, value, files } = event.target;
        if (type === "file") {
            setFormData((prev) => ({
                ...prev,
                [name]: files && files[0] ? files[0] : null
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const dati = new FormData();
        for (const key in userInputData) {
            dati.append(key, userInputData[key])
        }

        axios.post(`http://localhost:3000/boolroad/travelers`, dati, { Headers: { "Content-Type": "part/form-data" } })
            .then((resp) => {
                console.log(resp.data);
                axios
                    .get(`http://localhost:3000/boolroad/${slug}`)
                    .then((resp) => {
                        setFilteredTravelers(resp.data)
                        setTravelers(resp.data)
                        console.log(resp.data)
                    })
            })
        setFormData({
            name: '',
            surname: '',
            phone_number: '',
            email: '',
            image: null,
            cf: '',
            slug: slug
        });
        // Reset file input manually
        if (event.target && event.target.image) {
            event.target.image.value = '';
        }
    };

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
            <form className="mx-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nome
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={userInputData.name || ""}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">
                        Cognome
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="surname"
                        name="surname"
                        onChange={handleChange}
                        value={userInputData.surname || ""}
                    />
                    <label className="my-4">Numero di telefono
                        <input type="tel" name="phone_number" onChange={handleChange} value={userInputData.phone_number || ""} className="mx-3 date-pill shadow-sm" />
                    </label>
                    <br />
                    <label className="my-4">Email
                        <input type="email" name="email" onChange={handleChange} value={userInputData.email || ""} className="mx-3 date-pill shadow-sm" />
                    </label>
                    <label className="my-4">Codice Fiscale
                        <input type="text" name="cf" onChange={handleChange} value={userInputData.cf || ""} className="mx-3 date-pill shadow-sm" />
                    </label>
                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Carica immagine
                    </label>

                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        className="form-control"
                        onChange={handleChange}
                    />

                </div>

                {/* Anteprima */}
                {userInputData.image && (
                    <img
                        src={URL.createObjectURL(userInputData.image)}
                        alt="preview"
                        width="200"
                        className="mb-3"
                    />
                )}




                <button type="submit" className="header-link border-none">
                    Submit
                </button>
            </form>
        </>
    )
}