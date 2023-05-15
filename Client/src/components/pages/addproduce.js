import React, { useState } from 'react';
import style from '../Style/addproduce.css';
import { useQuery } from '@apollo/client';

import { QUERY_PRODUCE } from '../../utils/queries';

//strech: add functionality to add list of current produce to left side

//functionality to bring in current seed produce
function AddProduce() {
    const { loading, data } = useQuery(QUERY_PRODUCE);
    const produce = data?.produce || [];
    const [selectedPro, setSelectedPro] = useState(['']);

    return (
        <div>
            <div className='producepage'>
                <h2>Add your current produce</h2>
                <form>
                    {/* multiple select for produce items */}
                    {loading ? (
                        <div className='loading'>Loading...</div>
                    ) : (<select className='selection'
                        multiple={true}
                        value={selectedPro}
                        onChange={e => setSelectedPro(Array.from(e.target.selectedOptions, option => option.value))}
                         >
                        {produce.map(item => (
                            <option key={item._id} value={item._id}>
                                {item.name}
                            </option>
                        ))}
                    </select>)}
            </form>
                <div className='valueS'>
                    {/* Shows what is selected from list */}
                    <h2>Your selected produce: {selectedPro.join(', ')}</h2></div>

            </div>
        </div>)
}

export default AddProduce;