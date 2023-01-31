import React from "react";
import { Table } from 'reactstrap'
import bd from '../bd.json'
import { Link } from 'react-router-dom'

function Comments() {
    return (
        <div className="container p-5">
            <Table size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bd.map(post => (
                            <tr key={post.id}>
                                <th scope="row"><Link to={`/foo/${post.id}`}>{post.id}</Link></th>
                                <td><Link to={`/foo/${post.id}`}>{post.name}</Link></td>
                                <td><Link to={`/foo/${post.id}`}>{post.email}</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Comments;