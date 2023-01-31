import React from "react";
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import bd from '../bd.json'

function ComList() {
    return (
        <>
            <Table striped>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            First Name
                        </th>

                        <th>
                            Username
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bd.map(post => (
                            <tr key={post.id}>
                                <th scope="row"><Link to={`/foo/${post.id}`}>{post.id}</Link></th>
                                <td><Link to={`/foo/${post.id}`}>{post.name}</Link></td>
                                <td><Link to={`/foo/${post.id}`}>{post.username}</Link></td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </>
    )
}

export default ComList;