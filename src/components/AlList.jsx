import React from "react";
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import al from '../al.json'

function AlList() {
    return (
    <>
            <Table striped>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                        title
                        </th>
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
        </>
    )
}

export default AlList;