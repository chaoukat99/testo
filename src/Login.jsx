import React from 'react'
import Menu from './Menu'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
    let [email ,setEmail]=useState("");
    let [pass ,setPass] = useState("");
let navigate=useNavigate();
let check_login=(e,p)=>{
    let users=[{email:"badr@gmail.com",password:"badr123"},{email:"hamza@gmail.com",password:"hamza123"}]
    let finder=users.find(el=>el.email==e && el.password==p)



    if(Boolean(finder)){
        
         localStorage.setItem("is_logged",true);
         navigate("/profile");
    }else{
       

        localStorage.setItem("is_logged",false);

    }
}
  return (
   
    <>
    <Menu/>
    <div className='d-flex justify-content-center'>
      <div className="card" style={{width:600}}>
       <div className="card-header">
        <h2 className='text-center'>Login</h2>
       </div>
       <div className="card-body">
        <div className="">

        <label htmlFor="" className='form-label'>Email : </label>
        <input type="text" className='form-control'
        
        onChange={(e)=>setEmail(e.target.value)}
        
        />
        </div>
        <div className="">

        <label htmlFor="" className='form-label'>Password :</label>
        <input type="password" className='form-control'
        onChange={(e)=>setPass(e.target.value)}
        />
        </div>

        <div className="d-flex justify-content-center mt-2">
            <button className='btn btn-success'
            onClick={()=>{
                check_login(email,pass)
            }}
            
            >Se connecter</button>
        </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default Login
