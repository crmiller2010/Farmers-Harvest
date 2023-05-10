import React from 'react';
import Card from '../card';

//card functionality needs to add new card per each farmer

const style = {
    title: {

    }
}

// needs functionality to create cards based on seed farmers/added farmers.

function Home() {
    return (
        <div>
            <div>
                <h2 style={style.title}> This is a test of the fun system I have built,</h2>
            </div>
            <ul>
                <li><Card /></li>
                <li>This should be where produce and the farmers are shown</li>
            </ul>
        </div>
    );
};
export default Home;