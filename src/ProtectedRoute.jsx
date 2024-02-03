import React from 'react'
import { Outlet , Navigate } from 'react-router-dom' 
function ProtectedRoute() {
    let test=JSON.parse(window.localStorage.getItem("is_logged"))
 
  return test?<Outlet/>:<Navigate to="/" />
}


export default ProtectedRoute
