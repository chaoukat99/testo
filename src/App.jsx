import React from 'react';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Error from './components/Error';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Produits from './components/Produits';
import Links from './components/Links';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Profile from './Profile';
function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />

            <Route path='/login' element={<Login/>}/>
            <Route path='/contact' element={<Contact/>} />
            <Route  path='/produits/:id_prd' element={<Produits/>} />
            <Route path='/about' element={<About/>} />
            
            <Route element={<ProtectedRoute/>}>

            <Route path='/links' element={<Links/>}/>
               <Route path='/profile' element={<Profile/>}/>
            </Route>
            <Route path='*' element={<Error/>} />
        </Routes>
    </Router>
  )
}

export default App
