import React from "react";
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import db from '../db.json'

function BigList() {
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
                        db.map(post => (
                            <tr key={post.id}>
                                <th scope="row"><Link to={`/blogs/${post.id}`}>{post.id}</Link></th>
                                <td><Link to={`/blogs/${post.id}`}>{post.name}</Link></td>
                                <td><Link to={`/blogs/${post.id}`}>{post.username}</Link></td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </>
    )
}

export default BigList;