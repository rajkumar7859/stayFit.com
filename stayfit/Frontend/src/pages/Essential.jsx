import React from 'react'
import Footer from '../components/Footer/Footer'
import BlogNav from './BlogNav'
import Essen from './Essen'

import style from "../styling/Blog.module.css";
 const Essential = () => {
  return (
    <>
    <BlogNav/>
    <div className={style.blogMainContainer}>
      
      <Essen />
    
    </div>
    <Footer />
    </>
  )
}
export default Essential