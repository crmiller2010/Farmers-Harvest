import React from 'react';
import style from './Style/footer.css';

export default function Footer() {
    return (
        <div className='Footer'>
            {/* footer shows who made app */}
            <p className='FootText'> Farmers' Harvest was created by: </p>
            <p className='FootText'> Chris Miller, Liana Moore, Samuel Wright, Alex Hickey,   May 2023</p>
        </div>
    )
};

