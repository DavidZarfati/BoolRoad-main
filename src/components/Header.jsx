import { NavLink } from "react-router-dom";

export default function Header({ nomeApp }) {

    const headerLinks = [
        { title: "I viaggi", path: "/" },
        // { title: "I viaggiatori", path: "/travels" }
    ];
    return (
        // <section>
        //     <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //         <div className="container-fluid">
        //             <span className="navbar-brand">{nomeApp}</span>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        //                 <span className="navbar-toggler-icon"></span></button><div className="collapse navbar-collapse" id="navbarNav">
        //                 <ul className="navbar-nav">
        //                     {headerLinks.map((link, index) => (
        //                         <li className="nav-item" key={index}>
        //                             <NavLink to={link.path}>{link.title}</NavLink>
        //                         </li>
        //                     ))}</ul>
        //             </div>
        //         </div>
        //     </nav>
        // </section>
        <>

            <nav className="navbar app-header header">
                <div className="container-fluid app-header-container align-items-center justify-content-between py-2">
                    <div className="d-flex align-items-center gap-2"><img src="/path/al/tuo-logo.png" alt="BoolRoad" className="app-logo" />
                        <span className="app-title d-none d-sm-inline">{nomeApp}</span></div>
                    <div className="d-flex align-items-center gap-2">
                        <NavLink to="/" className="nav-link bg-light border rounded-circle shadow-sm d-inline-flex align-items-center justify-content-center">
                            I viaggi
                        </NavLink>
                    </div>
                </div>
            </nav>


        </>
    );
}