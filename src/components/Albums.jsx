import React, { useState, useEffect } from "react";
import { Table } from 'reactstrap'
import al from '../al.json'
import { Link } from 'react-router-dom'
import axios from "axios";


function Albums(){
    const[title, setTitle] = useState('')
    
    function handleChange(e){
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', title)
        .then(res => console.log("Data is saved", res))
        .catch(err => console.log(err))
    }
    
    return(
        <>
   <div className="container p-5">
            <Table size="sm">
            <form onSubmit={handleChange}>
                    <input 
                    type="text" 
                    className="form-control w-50" 
                    placeholder="Name" 
                    onChange={e => setTitle(e.target.value)}
                    />
                    <button className="btn btn-success mt-4 mb-2">Post</button>
                </form>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        al.map(post => (
                            <tr key={post.id}>
                                <th scope="row"><Link to={`/fol/${post.id}`}>{post.id}</Link></th>
                                <td><Link to={`/fol/${post.id}`}>{post.title}</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
        </>
    )
}

export default Albums;