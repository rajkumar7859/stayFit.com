import React from 'react'
import { Routes,Route } from 'react-router-dom'

import BlogHomePage from './pages/BlogHomePage'




const AllRoutes = () => {
  return (
    <>
    
  
    
    
    <Routes>
        

        <Route path='/blog' element={<BlogHomePage />} />
       
      



    </Routes>
    </>
  )
}

export default AllRoutes