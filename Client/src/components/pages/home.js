import React from 'react';
import Card from '../card';
import { useQuery } from '@apollo/client';
import { GET_FARMER } from '../../utils/queries';
import style from "../Style/Style.css";

function Home() {
    const { loading, error, data } = useQuery(GET_FARMER);
    const farmers = data?.farmer || [];
    if (loading) return <p>Loading...</p>
    if (error) return <p>Something Went Wrong</p>
    return (
        <div>
            <h3 className='h3'> This is the current offerings from Farmers' Harvest</h3>
            <ul>
                {/* cards display farmers and produce for front page */}

                {!loading && !error && ( 
                    <li> {farmers.map(farmer => (
                        <Card key={farmers.id} farmer={farmers} />
                    ))} </li>
                )}
            </ul>
        </div>
    );
};
export default Home;