import React from 'react';
//import { Farmer } from 'farmer';


const Style = {
    card: {
    },
    farmer: {
    },
    produce: {
    }
};

//add farmer hook

// add produce to farmer hook

//return based on information and placeholders above
export default function card() {
    return (
    <div style ={Style.card}>
        {/* card to show farmer and their produce object names are intended objects from backend */}
        <div style={Style.farmer}>
            <h4> Farmer  </h4>
        </div>
        <div style={Style.produce}>
            <p>Farmer.listofproduce </p>
        </div>
    </div>
)};