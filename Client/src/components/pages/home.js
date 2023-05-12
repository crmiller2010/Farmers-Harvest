import React from 'react';
import Card from '../card';
import {gql,useQuery} from '@apollo/client'

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
const style = {
    title: {

    }
}

// needs functionality to create cards based on seed farmers/added farmers.

function Home() {
    const{loading,error,data } = useQuery(GET_PRODUCE)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Something Went Wrong</p>
    return (
        <div>
            <div>
                <h2 style={style.title}> This is a test of the fun system I have built,</h2>
            </div>
            <ul>
                {/* cards display farmers and produce for front page */}
               
                <li>This should be where produce and the farmers are shown</li>
                { !loading&& !error&& (
                    <li> {data.produces.map(produce => (
                        <Card key={produce.id} produce={produce} />
                    ))} </li>
                ) }
            </ul>
        </div>
    );
};
export default Home;