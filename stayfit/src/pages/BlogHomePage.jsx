import React from "react";
import style from "../styling/Blog.module.css";

import BlogNavbar from "./BlogNavbar"
import Footer from "../Components/Footer/Footer";
const BlogHomePage = () => {
  return (
    <>
    <BlogNavbar/>
    <div className={style.blogMainContainer}>
    
    </div>
    <Footer />
    </>
  );


};

export default BlogHomePage;
