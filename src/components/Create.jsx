import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "reactstrap";

function Create() {

    const [post, setPost] = useState([])
    const[name, setName] = useState('')
    const[username, setUsername] = useState('')


    useEffect(() => {
        axios.get('http://localhost:3004/users')
            .then(res => {
                setPost(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])

function handleChange(e){
    e.preventDefault()
    axios.post('http://localhost:3004/users', {
    name,
    username
})
    .then(res => console.log("Data is saved", res))
    .catch(err => console.log(err))
}


    return (
        <>
            <div className="container mt-5">
                 <form onSubmit={handleChange}>
                    <input 
                    type="text" 
                    className="form-control w-50" 
                    placeholder="Name" 
                    onChange={e => setName(e.target.value)}
                    />
                      <input 
                    type="text" 
                    className="form-control w-50 mt-2" 
                    placeholder="username" 
                    onChange={e => setUsername(e.target.value)}
                    />
                    <button className="btn btn-success mt-4 mb-2">Post</button>
                </form> 

                <div className="container">
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>username</th>

                            </tr>
                        </thead>
                        <tbody>
                            {post.map(elem => (
                                <tr key={elem.id}>
                                    <td>{elem.id}</td>
                                    <td>{elem.name}</td>
                                    <td>{elem.username}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
export default Create;