import React from "react";
import EmployeeCard from "../components/employeeCard";


function Employee() {
    return (
        <>  
          
            {/* navbar par défault juste dire qu'il en ai une  */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </nav>

            {/* Section présentation HomePage */}
            <section>
                    
            </section>
            {/* section avec les différents 'employées */}
            <section>
                <div className="row mt-4">

                        <EmployeeCard name="Melissa"/>                
                        <EmployeeCard name="Jeanne"/>                
                        <EmployeeCard name="Justine"/>                
                        <EmployeeCard name="Milla"/>                
                        <EmployeeCard name="Massia"/>
                            
                </div>
            </section>
        </>
    );
}

export default Employee;