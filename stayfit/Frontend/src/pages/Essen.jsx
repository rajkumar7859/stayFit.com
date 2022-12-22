import React from "react";
import { useState } from "react";
import style from "../styling/Blog.module.css";
import { Text,Box } from '@chakra-ui/react'
import EssentNav from "./EssentNav"
const Essen = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={style.MainLatestArticlesDiv}>
      <div className={style.LATESTDiv}>
        
        <div className={style.line2}></div>
      </div>
  
      <div>
        
        <div>
          <img
            className={style.blogTrendingPoster}
            src="https://blog.myfitnesspal.com/wp-content/uploads/layerslider/Essential-Guides/UACF-EssentialGuide_Hero_Full_final1.jpg"
            alt=""
          />
        </div>
       
       <Box  display="grid">
        <Text fontSize="29px" fontWeight={28}>Essentials-Guides </Text>
        <Box display="flex">
    
        <Text fontSize="28px" fontWeight={28} color="grey"> NUTRITION & WEIGHT LOSS</Text>
        <Box  className={style.line3}></Box>
        </Box>
       </Box>
       
        <div className={style.trendingBlogImages}>
          <div>
          <img
              className={style.trendingBlogGridImages}
              src="https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Macros-No-Badge-2-368x289.jpg.webp"
              alt=""
            />
                  <Text fontSize="19px" >Essentials-Guides To Macros</Text>
                  <Text   color="grey"> Macronutrient is a bucket term for the three types of nutrients that make up the bulk of what we eat: carbohydrates,...</Text>
          </div>
          <div>
            <img
              className={style.trendingBlogGridImages}
              src="https://blog.myfitnesspal.com/wp-content/uploads/2021/01/Essential-Guide-to-Food-Logging-featured-368x289.jpg.webp"
              alt=""
            />
            
            <Text fontSize="19px" >Essentials-Guides To Food-Logging</Text>
                  <Text   color="grey">Whether your goal is to lose weight, build strength, perform at your peak or improve your overall health, keeping...</Text>
            
          </div>



          
          <div>
            <img
              className={style.trendingBlogGridImages}
              src="https://blog.myfitnesspal.com/wp-content/uploads/2018/01/UACF_EG_Hero_NoBadge_Carbs-368x289.jpg"
              alt=""
            />
          
          <Text fontSize="19px" >Essentials-Guides To Carbohydrates</Text>
                  <Text   color="grey">Carbohydrates are controversial among people trying to lose weight. Because individual carbohydrate needs aren’t...</Text>
            
          </div>

          
          <div>
            <img
              className={style.trendingBlogGridImages}
              src="https://blog.myfitnesspal.com/wp-content/uploads/2019/01/Essential-Guide-to-Hydration-368x289.jpg"
              alt=""
            />
            <Text fontSize="19px" >Essentials-Guides To Hydrate</Text>
                  <Text   color="grey">Have you had enough water today? This question is often left out of the nutrition conversation but has an enormous...</Text>
          </div>
          <div>
            <img
              className={style.trendingBlogGridImages}
              src="https://blog.myfitnesspal.com/wp-content/uploads/2020/06/Essential-Guide-to-Walking-and-Steps-2-368x289.jpg"
              alt=""
            />
            <Text fontSize="19px" >Essentials-Guides To Walking And Steps</Text>
                  <Text   color="grey">Walking is one of the most rewarding lifelong activities you can choose. While it may not be a huge calorie burner —...</Text>
          </div>
          <div>
            <img
              className={style.trendingBlogGridImages}
              src="https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Strength-Training-2-368x289.jpg"
              alt=""
            />
            <Text fontSize="19px" >Essentials-Guides To Strength Training</Text>
                  <Text   color="grey">Whether you’re looking to sign up for a 5K or simply live a healthier life and engage in a wide range of activities...</Text>
          </div>
        </div>

        {show ? (
          <div className={style.trendingBlogImages}>
            <div>
              <img
                className={style.trendingBlogGridImages}
                src="https://blog.myfitnesspal.com/wp-content/uploads/2021/04/Essential-Guide-to-MyFitnessPal-Premium-4-368x289.jpg"
                alt=""
              />
              <h4 className={style.trendingBlogGridHeading}>
                Mixed Berry Tart
              </h4>
              <p className={style.trendingBlogGridPara}>JULY 4, 2022</p>
            </div>
            <div>
              <img
                className={style.trendingBlogGridImages}
                src="https://blog.myfitnesspal.com/wp-content/uploads/2016/01/ThingsYoullLearn-368x289.jpg"
                alt=""
              />
              <h4 className={style.trendingBlogGridHeading}>
                15 Festive Fourth of July Recipes Under 425 Calories
              </h4>
              <p className={style.trendingBlogGridPara}>JULY 1, 2022</p>
            </div>
            <div>
              <img
                className={style.trendingBlogGridImages}
                src="https://blog.myfitnesspal.com/wp-content/uploads/2021/01/5-Ways-to-Progress-From-Walking-to-Running-750x592.jpg"
                alt=""
              />
              <h4 className={style.trendingBlogGridHeading}>
                5 Ways to Progress From Walking to Running
              </h4>
              <p className={style.trendingBlogGridPara}>JUNE 29, 2022</p>
            </div>
            <div>
              <img
                className={style.trendingBlogGridImages}
                src="https://blog.myfitnesspal.com/wp-content/uploads/2021/09/How-Much-Water-Should-You-Actually-Drink-750x592.jpg"
                alt=""
              />
              <h4 className={style.trendingBlogGridHeading}>
                How Much Water Should You Actually Drink?
              </h4>
              <p className={style.trendingBlogGridPara}>JUNE 27, 2022</p>
            </div>
            <div>
              <img
                className={style.trendingBlogGridImages}
                src="https://blog.myfitnesspal.com/wp-content/uploads/2022/06/9-Healthy-Burger-Recipes-Under-450-Calories-750x592.jpeg"
                alt=""
              />
              <h4 className={style.trendingBlogGridHeading}>
                9 Healthy Burger Recipes Under 450 Calories
              </h4>
              <p className={style.trendingBlogGridPara}>JUNE 24, 2022</p>
            </div>
            <div>
              <img
                className={style.trendingBlogGridImages}
                src="https://blog.myfitnesspal.com/wp-content/uploads/2020/02/How-an-Athletes-Weight-Impacts-Macro-Needs-3-750x592.jpg"
                alt=""
              />
              <h4 className={style.trendingBlogGridHeading}>
                How an Athlete’s Weight Impacts Macro Needs
              </h4>
              <p className={style.trendingBlogGridPara}>JUNE 22, 2022</p>
            </div>
          </div>
        ) : null}
      </div>
      <div onClick={() => setShow(true)} className={style.blogHomeLoadMore}>
        <p>LOAD MORE</p>
      </div>
      <br />
       <EssentNav/>
       <br />
       <br />
       <br />
       <br />
    </div>
  );
};

export default Essen;