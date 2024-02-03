import React from 'react'
import Produit from '../Data'
import Menu from '../Menu'
import { Link } from 'react-router-dom'
function Links() {
  return (
    <>
     <Menu/> 
     <div className='d-flex justify-content-center flex-wrao gap-3'>

     {Produit.length>0?Produit.map(el=>(
        <div key={el.id}>
            <Link className='box' to={`/produits/${el.id}`} >{el.id}</Link>
        </div>
     )):<h1>No data</h1>}
     </div>
    </>
  )
}

export default Links
