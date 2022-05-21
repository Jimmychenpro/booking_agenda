import React from "react";
import EmployeeCard from "../components/employeeCard";


function Employee() {
    return (
        <div className="row">
            <div className="col">
                <EmployeeCard name="Melissa"/>
            </div>
            <div className="col">
                <EmployeeCard name="Jeanne"/>
            </div>
            <div className="col">
                <EmployeeCard name="Justine"/>
            </div>
            <div className="col">
                <EmployeeCard name="Milla"/>
            </div>
        
        </div>
    );
}

export default Employee;