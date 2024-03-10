import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetch = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [buttonid,setButtonid]=useState(1);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [buttonid]);

function handleClick()
{
    setButtonid(id)
}
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleClick}> Fetch data</button>
                <center><h2>{post.title}</h2></center>
        </div>
    );
}

export default DataFetch;