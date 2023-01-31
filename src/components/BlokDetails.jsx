import React from "react";
import { useParams } from "react-router-dom"
import db from '../db.json'
import {Table} from 'reactstrap'

export default function BlokDetails(){
const { id } = useParams();
const singleProduct = db.find(elem => elem.id === parseInt(id));
const {name , username, email,  phone,  website, company } = singleProduct;
console.log("Hello");

    return(
        <div className="container">
        <h1>This is BlokDetails - { id }</h1>

        <Table striped>
  <thead>
  <tr>
      <td>Name:</td>
      <td>{name}</td>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>Username:</td>
      <td>{username}</td>
    </tr>

    
    <tr>
      <td>Email:</td>
      <td>{email}</td>
    </tr>

    <tr>
      <td>Phone:</td>
      <td>{phone}</td>
    </tr>

    <tr>
      <td>Website:</td>
      <td>{website}</td>
    </tr>

    <tr>
      <td>company:</td>
      <td>{company.name}</td>
    </tr>
  </tbody>
</Table>
        </div>
        
    )
}
