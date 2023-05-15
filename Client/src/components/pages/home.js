import React from 'react';
import Card from '../card';
import { gql, useQuery } from '@apollo/client';
import style from "../Style/Style.css";
import { QUERY_FARMER } from '../../utils/queries';



function Home() {
    const { loading, error, data } = useQuery(QUERY_FARMER)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Something Went Wrong</p>
    return (
        <div>
            <h3 className='h3'> This is the current offerings from Farmers' Harvest</h3>
            <ul>
                {/* cards display farmers and produce for front page */}


                {!loading && !error && (
                    <li> {data.produces.map(produce => (
                        <Card key={produce._id} produce={produce.name} />
                    ))} </li>
                )}
            </ul>
        </div>
    );
};
export default Home;