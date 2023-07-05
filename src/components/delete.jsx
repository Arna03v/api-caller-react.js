import React, { useState } from 'react'
import axios from 'axios';

function Delete() {
    const [id, setId] = useState();

    const handleDelete=(id,e) =>{
        e.preventDefault();
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response =>{
            console.log('deleted', response)
        })
        .catch(error =>{
            console.log(error);
        })

    }
  return (
    <div className='delete'>
        <input type='text'
        value={id}
        onChange={e=> setId(e.target.value)} placeholder='enter an id'/>
        <button className='button__delete' onClick={ e => handleDelete(id, e)}>Delete</button>
    </div> 
    )
}

export default Delete