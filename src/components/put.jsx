import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Put() {

    const [post, setPost] = useState({
        title: '',
        body:''
    });

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            console.log(response.data);
        })
    },[])

    const handleInput = (event) =>{
        setPost({...post, [event.target.name]: event.target.value})

    }
    const putData = (e)=>{
        e.preventDefault();
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {post})
        .then(reponse =>{
            console.log(reponse.data);
        })
        .catch(e =>{
            console.log(e);
        })
    }
  return (
    <div className='put'> 
        <form>
            Title: <input type='text'
                    onChange={handleInput}
                    name='title'></input><br/><br />
            Body: <input type='text'
                    onChange={handleInput}
                    name='title'></input><br/><br />
            <button className='button__put' onClick={putData}>Put</button>
        </form>
        
        

    </div>
  )
}

export default Put