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