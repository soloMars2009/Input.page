import React from "react";
import { useParams } from "react-router-dom"
import al from '../al.json'
import {Table} from 'reactstrap'

export default function AlDetails(){
const { id } = useParams();
const singleProduct = al.find(elem => elem.id === parseInt(id));
const { userId, title } = singleProduct;


    return(
        <div className="container">
        <h1>This is Albums - { id }</h1>
        <Table striped>
  <thead>
  <tr>
      <td>userId:</td>
      <td>{userId}</td>
    </tr>
  </thead>
  <tbody>    
  <tr>
      <td>Title:</td>
      <td>{ title }</td>
    </tr>
  </tbody>
</Table>
        </div>
        
    )
}
