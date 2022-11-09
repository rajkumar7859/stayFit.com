import React from "react";

import style from "../styling/Blog.module.css";

import BlogNav from "./BlogNav"
import Footer from "../components/Footer/Footer";
const BlogHomePage = () => {
  return (
    <>
    <BlogNav/>
    <div className={style.blogMainContainer}>
    
    </div>
    <Footer />
    </>
  );


};

export default BlogHomePage;
