import { NavLink } from "react-router-dom";


export default function Header({ nomeApp }) {

    const headerLinks = [
        { title: "I viaggi", path: "/" },
    ];
    return (
        <>

            <nav className="navbar header">
                <div className="container-fluid header-inner">
                    <div className="header-brand">
                        <img src="/image/logoblu.png" alt="BoolRoad" className="header-logo" />
                        <span className="header-title d-none d-sm-inline">{nomeApp}</span></div>
                    <div className="header-actions">
                        <NavLink to="/" className="header-link">
                            I viaggi
                        </NavLink>
                    </div>

                </div>
            </nav>


        </>
    );
}