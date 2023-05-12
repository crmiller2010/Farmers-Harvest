import React, { useState } from 'react';
import style from '../Style/addproduce.css';

//add functionality to bring in current seed produce

//add functionality to add list of current produce to left side

 function AddProduce () {

  const [selectedPro, setSelectedPro] = useState(['']);
  
  return (
    <div>
        <div className='producepage'>
            <h2>Add your current produce</h2>
            <form>
                {/* multiple select for produce items */}
                <select className='selection'
                multiple={true}
                value={selectedPro}
                onChange={e =>{
                    const options = [...e.target.selectedOptions];
                    const values = options.map(option => option.value);
                    setSelectedPro(values);
                }} >
                <option {...AddProduce.name} />
                </select>
            </form>
            <div className='valueS'>
                {/* Shows what is selected from list */}
            <h2>Your selected produce: {selectedPro.join(', ')}</h2></div>
            
        </div>
    </div>)
}

export default AddProduce;