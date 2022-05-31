import React from "react";
import EmployeeCard from "../components/employeeCard";


function Employee() {
    return (
        <>  

            {/* Section présentation HomePage */}
            <section>
                <div className="container text-white">
                    <h1>IfapMeet</h1>
                    <p className="">Bienvenue sur le site  unique de l'Ifapme pour rencontrer les filles les plus ouvertes de toute les formations proposées. Tout est si simple, tu scroll, tu choisis, tu réserves et tu profites!</p>


                </div>
                    
            </section>
            {/* section avec les différents 'employées */}
            <section>
                <div className="row mt-4">

                        <EmployeeCard name="Melissa"/>                
                        <EmployeeCard name="Jeanne"/>                
                        <EmployeeCard name="Justine"/>                
                        <EmployeeCard name="Milla"/>                 
                </div>
            </section>
        </>
    );
}

export default Employee;