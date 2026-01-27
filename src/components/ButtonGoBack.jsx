import { useNavigate } from "react-router-dom"

export default function ButtonGoBack() {
    const navigation = useNavigate();

    function goBack() {
        navigation(-1)
    }
    return (
        <>
            <button type="button" className="buttons shadow-sm btn-light bg-light border rounded-circle shadow-sm
               d-inline-flex align-items-center justify-content-center" onClick={goBack}><i className="bi bi-chevron-left text-secondary"></i></button>
        </>
    )
}

