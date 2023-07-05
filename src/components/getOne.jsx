import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './../App.css'

function GetOne() {

    const [post,setPost] = useState({}); // inittially empty
    const [id, setId] = useState();
    const [idFromButtonClick, setIdFromButtonClick] = useState();

    useEffect(() =>{
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response =>{
                console.log(response);
                setPost(response.data);
            })
            .catch(error =>{
                console.log(error);
            })
    },[idFromButtonClick])

    const handleClick = () =>{
        setIdFromButtonClick(id)
    }

  return (
    <div className='getOne'>
        
        
        <input type='text' 
        value={id} 
        onChange={ e => setId(e.target.value)} 
        placeholder='enter id' 
        className='input__getOne'></input> {/*setting id*/}

        <button className='button__get' onClick={handleClick}>Get One</button>

        <div className='result__getOne'>
            {post.title}
        </div>
    </div>
  )
}

export default GetOne