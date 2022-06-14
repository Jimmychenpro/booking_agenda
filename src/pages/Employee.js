import React, {useEffect} from "react";
import EmployeeCard from "../components/EmployeeCard";
import axios from "axios";

function Employee() {
    const [json, setJson] = React.useState([]);
    const testeur = [{'id':'1',}]

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
                <div className="container text-white text-center">
                    <h1 className="textMauve">Le Choix dans la Date</h1>
                    <p className="">Imaginez.<br></br>
                        Vous êtes de passage à Charleroi, et vous avez besoin de vous détendre.<br></br>
                        Vous arrivez à l’aéroport, mais vous n’avez pas le temps de courir, vous êtes fatigué, et un petit moment de bonheur vous serez du plus agréable.<br></br>
                        Vous vous sentez seul, vous avez un besoin de compagnie, mais le temps vous manque.<br></br>
                    </p>
                </div>
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