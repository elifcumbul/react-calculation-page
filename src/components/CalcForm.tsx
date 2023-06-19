import { Dayjs } from "dayjs";
import { FC, useState } from "react";
import { BasicDatePicker } from "./BasicDatePicker";
import "./calcform.css";
import { Employee } from "./Employee";

interface CalcFormProps {
    employees: Employee[];
}

const CalcForm: FC<CalcFormProps> = (props) => {
    const [date, setDate] = useState<Dayjs | null>(null);
    
    const DisplayData=props.employees.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.username}</td>
                    <td>{info.email}</td>
                    <td>{info.salary}</td>
                    <td>{info.department}</td>
                </tr>
            )
        }
    )

    function quarterCalc(date: Dayjs | null){
        if(date !== null){
            const month = date.get('month');
            const div = month / 3;
            return (Math.floor(div)+1);
        }
    }  

    function inflationCalc(date: Dayjs | null){
        var inflation;

        if(date !== null){
            const month = date.get('month');
            const quarter = (Math.floor(month/3) + 1);

            if (quarter === 1){
                inflation = 5.75;
            }else if(quarter === 2){
                inflation = 9.67;
            }else if(quarter === 3){
                inflation = 12.88;
            }else if(quarter === 4){
                inflation = 14.67;
            }
        }

        return inflation;
    }


    return(
        <div className="calculationPart">
            <div className="title">
                <h2>ABC ŞİRKET</h2>
            </div>
            <form className="form">
                <div className="show">
                    <table className="tbl">
                        <thead className="head">
                            <tr>
                            <th>Ad-Soyad</th>
                            <th>E-mail</th>
                            <th>Maaş</th>
                            <th>Departman</th>
                            </tr>
                        </thead>
                        <tbody className="body">
                            {DisplayData} 
                        </tbody>
                    </table> 
                    <div className="right">
                        <div className="choose"><BasicDatePicker value={date} setValue={setDate}></BasicDatePicker></div>
                        <div className="info">
                            <div className="info1">Seçtiğiniz tarih {quarterCalc(date)}. çeyreğe denk gelmektir.</div>
                            <div className="info2">Enflasyon Oranı: {inflationCalc(date)}%</div>
                        </div>
                        
                        <div className="button">
                            <button className="calc" type="submit" disabled>Hesapla</button>
                        </div>
                    </div>
                </div>
                
                
            </form>
        </div>
    );
}

export default CalcForm;