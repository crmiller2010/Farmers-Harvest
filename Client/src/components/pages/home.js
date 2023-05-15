import React from 'react';
import Card from '../card';
import {gql,useQuery} from '@apollo/client'
import style from "../Style/Style.css";

//card functionality needs to add new card per each farmer
const GET_PRODUCE=gql`
query {
    produces{
        id
        name
        price
        photo
        farmer{
          name
          email
        }
      }
}
`

// needs functionality to create cards based on seed farmers/added farmers.

function Home() {
    const{loading,error,data } = useQuery(GET_PRODUCE)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Something Went Wrong</p>
    return (
        <div>
            <h3 className='h3'> This is the current offerings from Farmers' Harvest</h3>
            <ul>
                {/* cards display farmers and produce for front page */}
               
                
                { !loading&& !error&& (
                    <li> {data.produces.map(produce => (
                        <Card key={produce._id} produce={produce.name} />
                    ))} </li>
                ) }
            </ul>
        </div>
    );
};
export default Home;