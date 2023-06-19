import { TextField } from "@mui/material";
import { FC } from "react";
import "./addform.css";
import { Employee } from "./Employee";


interface AddFormProps {
    onSubmit: (value: Employee) => void;
}


const AddForm: FC<AddFormProps> = (props) => {
    async function handleSubmit(event: any){
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get("username");
        const email = formData.get("email");
        const salary = formData.get("salary");
        const department = formData.get("department");
        props.onSubmit({username,email,salary,department});
    }
    return(
        <div className="addPart">
            <div className="addTitle">
                <h2>ÇALIŞAN EKLE</h2>
            </div>
            <form onSubmit={handleSubmit} className="addForm">
                <div className="first">
                    <TextField sx={{width: 250}} name="username" id="outlined-basic" label="Ad-Soyad" variant="outlined" />
                </div>
                <div className="second">
                    <TextField sx={{width: 250}} name="email" id="outlined-basic" label="Email" variant="outlined" />
                </div>
                <div className="third">
                    <TextField sx={{width: 250}} name="salary" id="outlined-basic" label="Maaş" variant="outlined" />
                </div>
                <div className="fourth">
                    <TextField sx={{width: 250}} name="department" id="outlined-basic" label="Departman" variant="outlined" />
                </div>
                <div className="addButton">
                    <button className="add" type="submit">Ekle</button>
                </div>
            </form>
            
        </div>
    );
}

export default AddForm;