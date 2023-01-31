import React from "react";
import { useParams } from "react-router-dom"
import bd from '../bd.json'
import {Table} from 'reactstrap'

export default function ComDetails(){
const { id } = useParams();
const singleProduct = bd.find(elem => elem.id === parseInt(id));
const {postId , name, email ,body} = singleProduct;


    return(
        <div className="container">
        <h1>This is Comments  - { id }</h1>

        <Table striped>
  <thead>
  <tr>
      <td>postId:</td>
      <td>{postId}</td>
    </tr>
  </thead>
  <tbody>    
  <tr>
      <td>Name:</td>
      <td>{name}</td>
    </tr>
    <tr>
      <td>Email:</td>
      <td>{email}</td>
    </tr>
    <tr>
      <td>Body:</td>
      <td>{body}</td>
    </tr>
  </tbody>
</Table>
        </div>
        
    )
}
