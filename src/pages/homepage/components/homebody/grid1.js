import { useState , useEffect } from "react";
import GridCard from "../grid"

const Grid1 = () => {
    const [grid1Data, setGrid1Data] = useState([])
    useEffect(() => {
        fetch('http://localhost:1400/api/gridRow1')
            .then(res => res.json())
            .then((data) => {
                setGrid1Data(data);
            });
    }, []);
    return(
        <div className='grid-layout'>
            {
                grid1Data.map((info)=>{
                    return (
                        <GridCard key={info.id} data={info} />
                    )
                })
            }
        </div>
    )
}

export default Grid1;