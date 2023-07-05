import axios from 'axios';
import React, { useState } from 'react'

function Post() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const [data, setData] = useState([]);

    

    const postData = (e) =>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            title,
            body
        }). then(response=> console.log('Posting data...', response.data))
        .catch(error =>{
            console.log(error);
        })
    }

    // const arr = data.map((data, index) =>{
    //     return(
    //         <tr>
    //             <td style={{border: '1px solid black'}} > {data.id}</td>
    //             <td style={{border: '1px solid black'}} > {data.title}</td>
    //             <td style={{border: '1px solid black'}} > {data.body}</td>                
    //         </tr>
    //     )
    // })
  return (
    <div className='post'>
        
        <form>            
            Title: <input type='text' value={title} onChange={ e => setTitle(e.target.value)}/> <br/> <br/>
            Body: <input type='text' value={body} onChange={e => setBody(e.target.value)} /> <br/> <br/>
            <button className='button__post' onClick={postData}>Post</button>
        </form>
    </div>
  )
}

export default Post