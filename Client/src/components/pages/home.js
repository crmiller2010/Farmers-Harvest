import React from 'react';
import Card from '../card';

//card functionality needs to add new card per each farmer

const style = {
    title: {

    }
}

// needs functionality to create cards based on seed farmers/added farmers.

export default function Home() {
    return (
        <div>
            <div>
                <h2 style={style.title}> Welcome to Farmers' Harvest</h2>
            </div>
            <ul>
                <li> <Card /></li>
            </ul>
        </div>
    );
};