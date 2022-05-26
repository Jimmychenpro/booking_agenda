import React, {useEffect} from "react";
import EmployeeCard from "../components/EmployeeCard";
import axios from "axios";

function Employee() {
    const [json, setJson] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/employees')
            .then(res => {
                setJson(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    function getEmployees() {
        return json.map(employee => {
            return <EmployeeCard key={employee.id} employee={employee}/>
        });
    }

    return (
        <>
            {/* Section présentation HomePage */}
            <section>
                    
            </section>
            {/* section avec les différents 'employées */}
            <section>
                <div className="mt-4 d-flex flex-row flex-wrap justify-content-center">
                    {getEmployees()}
                </div>
            </section>
        </>
    );
}

export default Employee;