import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/reservations">Réservations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/holidays">Congés</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/disponibilities">Disponibilitées</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/hours">Heures</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employées</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;