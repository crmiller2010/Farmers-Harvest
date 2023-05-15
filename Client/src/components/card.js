import React from 'react';
//import { Farmer } from 'farmer';
import style from "./Style/card.css";
//add farmer hook

// add produce to farmer hook

//return based on information and placeholders above
export default function card({ produce }) {
    return (

    <div style ={Style.card}>
        {/* card to show farmer and their produce object names are intended objects from backend */}
        <div style={Style.farmer}>
            <h4> {produce.farmer.name}, {produce.farmer.email}  </h4>
            <img src={produce.photo} alt={produce.name}></img>
        </div>
        <div style={Style.produce}>
            <p>{produce.name}, { produce.price}</p>

        </div>
    )
};