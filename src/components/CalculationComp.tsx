import { useState } from "react";
import AddForm from "./AddForm";
import CalcForm from "./CalcForm";
import "./calculationcomp.css";
import { Employee } from "./Employee";

function CalculationComp() {
    const [employees, setEmployees] = useState<Employee[]>([]);

    function addEmployee(employee: Employee){
        setEmployees([...employees, employee]);
    }
    
    return(
        <div className="container">
            <div className="leftP"><AddForm onSubmit={addEmployee}/></div>
            <div className="rightP"><CalcForm employees={employees}/></div>
        </div>
    );
}

export default CalculationComp;