import { useState,useEffect } from "react";
import GridCard from "../grid"

const Grid2 = () => {
    const [gridData, setGridData] = useState([])
    useEffect(() => {
        fetch('http://localhost:1400/api/gridRow2')
            .then(res => res.json())
            .then((data) => {
                setGridData(data);
            });
    }, []);
    return(
        <div className='grid-layout'>
            {
                gridData.map((info)=>{
                    return (
                        <GridCard key={info.id} data={info} />
                    )
                })
            }
        </div>
    )
}
export default Grid2;