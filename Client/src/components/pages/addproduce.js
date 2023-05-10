import React, { useState } from 'react';

const style = {
    title: {

    },
    sidebar: {

    },
}

//add functionality to bring in current seed produce

//add functionality to add list of current produce to left side

 function AddProduce () {

  const [selectedPro, setSelectedPro] = useState(['']);
  
  return (
    <div>
        <div>
            <h2 style={style.title}>Add your current produce</h2>
            <form>
                <select
                multiple={true}
                value={selectedPro}
                onChange={e =>{
                    const options = [...e.target.selectedOptions];
                    const values = options.map(option => option.value);
                    setSelectedPro(values);
                }} >
                <option {...AddProduce.name} />
                </select>
            </form><div>
            <p>Your produce: {selectedPro.join(', ')}</p></div>
            <div style={style.sidebar}>
            </div>
        </div>
    </div>)
}

export default AddProduce;