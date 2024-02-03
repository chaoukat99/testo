import React from 'react'
import { useEffect , useState } from 'react'
import Produit from '../Data';
import { useParams } from 'react-router-dom';
import Menu from '../Menu';
function Produits() {


    // let [api,setApi]=useState([]);

   let {id_prd}=useParams();
   let product=Produit.find(el=>el.id==id_prd);
  return (

    <>
    <Menu/>
    <div>
      <h1>Produit num : {id_prd}</h1>
      <ul>
        <li>Name : {product.name} </li>
        <li>Brand : {product.brand} </li>
        <li >Price :  {product.price} </li>
      </ul>
    </div>
    </>
  )
}

export default Produits
