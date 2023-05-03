import React, { useState } from 'react';
import { Farmer } from 'farmer';


const Style = {
    card: {
        blah: blah
    },
    farmer: {
        blah: blah
    },
    produce: {
        blah: blah
    }
};

//add farmer hook

// add produce to farmer hook

//return based on information and placeholders above

return (
    <div style ={Style.card}>
        <div style={Style.farmer}>
            <h4> <Farmer /> </h4>
        </div>
        <div style={Style.produce}>
            <p><Farmer.listofproduce /></p>
        </div>
    </div>
)