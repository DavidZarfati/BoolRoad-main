import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Home() {
    const [userInputData, setFormData] = useState({
        name: '',
        description: '',
        initial_date: '',
        final_date: '',
        image: null,
    });

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

        axios.post(`http://localhost:3000/boolroad`, dati, { headers: { "Content-Type": "part/form-data" } })
            .then((resp) => {
                console.log(resp.data);
                axios
                    .get(`http://localhost:3000/boolroad`)
                    .then((resp) => {
                        setTravels(resp.data)
                        // console.log(resp.data)
                    })
            })
        setLoadForm(false)




        setFormData({
            name: '',
            description: '',
            initial_date: '',
            final_date: '',
            image: null
        });
        // Reset file input manually
        if (event.target && event.target.image) {
            event.target.image.value = '';
        }
    };
    const [travels, setTravels] = useState([])
    useEffect(() => {
        axios
            .get(`http://localhost:3000/boolroad`)
            .then((resp) => {
                setTravels(resp.data)
                // console.log(resp.data)
            })
    }, [])

    const [loadForm, setLoadForm] = useState(false);

    function resetForm() {
        setFormData({
            name: '',
            description: '',
            initial_date: '',
            final_date: '',
            image: null
        });
        // Reset file input manually
        if (event.target && event.target.image) {
            event.target.image.value = '';
        }
        setLoadForm(false)
    }




    return (
        <>
            <div className="sm_mainheader"> <button className="btn btn-primary" onClick={() => setLoadForm(true)}>Aggiungi viaggio </button> </div>
            <main className="app-container p-5 mx-auto my-5">
                {travels.map((travel) => (
                    <Link
                        to={`/travels/${travel.slug}`}
                        key={travel.id}
                        className="travel-card"
                    >
                        <div
                            className="travel-card-bg"
                            style={{
                                backgroundImage: `url(/image/${travel.image})`,
                            }}
                        ></div>

                        <div className="travel-card-overlay">
                            <h5 className="travel-title">{travel.name}</h5>
                            <p className="travel-subtitle">
                                {travel.initial_date.substring(0, 10)} → {travel.final_date.substring(0, 10)}
                            </p>
                        </div>
                    </Link>
                ))}

            </main>
            {loadForm &&
                <div className="sm_form">
                    <form className="mx-5" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Destinazione
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                aria-describedby="emailHelp"
                                onChange={handleChange}
                                value={userInputData.name}
                            />
                            <div id="emailHelp" className="form-text">
                                Inserisci qui la destinazione del nuovo viaggio
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                                Descrizione del viaggio
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                onChange={handleChange}
                                value={userInputData.description}
                            />
                            <label className="my-4 py-2">Quando inizia il viaggio?
                                <input type="date" name="initial_date" onChange={handleChange} value={userInputData.initial_date} className="date-pill shadow-sm py-2" />
                            </label>
                            <br />
                            <label className="my-4 py-2">Quando finisce il viaggio?
                                <input type="date" name="final_date" onChange={handleChange} value={userInputData.final_date} className="date-pill shadow-sm py-2" />
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
                        <button onClick={resetForm} className="btn btn-warning ms-3">
                            Close
                        </button>
                    </form>
                </div>
            }
        </>
    );
}