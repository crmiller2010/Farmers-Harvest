import React from 'react';
import style from "./Style/card.css";
// import { farmer } from 'farmer';


//return based on information and placeholders above
export default function card({ farmer }) {
    return (
        
        <div className="CardS">
            <ul>
                {/* card to show farmer and their produce object names are intended objects from backend */}
                <div>
                    <h4> {farmer.name}, {farmer.email}  </h4></div>
                <div>
                    <p>{farmer.produce.name}, {farmer.produce.price}</p>
                </div>
                </ul>
        </div>
    )
};