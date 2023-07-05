import React, { useState } from 'react'
import axios from 'axios'
import './../App.css'

function Get() {

    const [posts,setPosts] = useState([]); // inittially empty
    const [count, setCount] = useState(1);
    // const [id, setId] = useState(1);
    // const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    // useEffect(() =>{
    //     axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //         .then(response =>{
    //             console.log(response);
    //             setPosts(response.data);
    //         })
    //         .catch(error =>{
    //             console.log(error);
    //         })
    // })

    const handleClick = () =>{
        setCount(count +1);

        if( count %2 === 1){
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response =>{
                console.log(response);
                setPosts(response.data);
            })
            .catch(error=>{
                console.log(error);
            })
        }  
        if(count %2 === 0){
            setPosts([]);
        }  

        
    }

  return (
    <div className='get'>
        {/* <input type='text' onChange={ e => setId(e.target.value)} /> setting id */}
        <button className='button__get' onClick={handleClick}>Get All</button>

        <ul className='result__get'>
            {
                posts.map(post => <li key = {post.id}>{post.title}</li>)
            }

        </ul>

        
    </div>
  )
}

export default Get