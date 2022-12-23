import React, { memo, useEffect, useState } from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";

import { Sliders } from "./Slider";
import Styles from "../styling/AppPage.module.css";
import { GrFormSearch } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";

import Headertop from "../components/Headertop";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const AppPage = () => {
  const [app, setApp] = useState([]);
  const [search,setSearch] = useState([]);
  const [inputValue,setInputValue] = useState('')
  const [ loading , setLoading ]=useState(false)

  const onTackerEvent = ()=>{
    setApp(app.filter((e)=>e.app_category==='Activity Trackers'))
    console.log(app)
  }
  const onAllEvent = ()=>{
    data()
  }
  const onFitnessEvent = ()=>{
    
    setApp(app.filter((e)=>e.app_category==='Fitness Apps'))
    console.log(app)
  }  
  let data = async () => {
    setLoading(true)
    let res = await axios.get(`https://newapi.onrender.com/Apps`);
    setApp(res.data);
    setLoading(false)
    console.log(app);
  };

  useEffect(()=>{
    data()
  },[])
  // for searching apps in search input 

  const handleSearch = (e) => {

    setInputValue(e.target.value)
		axios
			.get(`https://newapi.onrender.com/Apps?q=${inputValue}`)
			.then((res) => setSearch(res.data))
			.catch((err) => console.log(err));
	};
  return (
    <>
      <Headertop/>
      <Header />
      <div className={Styles.main}>
        <div>
          <div>
            <Sliders />
          </div>
          <div className={Styles.d1}>
            <div className={Styles.d2}>Featured Apps</div>
{loading?<Image w="20rem" src="https://www.fugusau.edu.ng/wp-content/uploads/2021/01/loading-icon-animated-gif-19.gif" />:
            <div className={Styles.d3}>
              {app.map((el) => (
                <div className={Styles.d4}>
                  <img className={Styles.d4_1} src={el.app_icon_src} href={el.app_icon_href} alt="" />
                  <div className={Styles.d4_2}>
                    <p className={Styles.d4_3}>{el.app_name}</p>
                    <p className={Styles.d4_4}>{el.app_category}</p>
                    <button className={Styles.d4_5}>
                      <a
                        className={Styles.a}
                        href={el.btn_href}
                        target="_blank"
                      >
                        GET
                      </a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
}

            <div className={Styles.d1}>
              <div className={Styles.d2}>App Marketplace</div>
              {loading?<Image w="20rem" src="https://www.fugusau.edu.ng/wp-content/uploads/2021/01/loading-icon-animated-gif-19.gif" />:
                <div className={Styles.d3}>
                {app.map((el) => (
                  <div className={Styles.d4}>
                    <img
                      className={Styles.d4_1}
                      src={el.app_icon_src}
                      alt=""
                      href={el.app_icon_href}
                    />
                    <div className={Styles.d4_2}>
                      <p className={Styles.d4_3}>{el.app_name}</p>
                      <p className={Styles.d4_4}>{el.app_category}</p>
                      <button className={Styles.d4_5}>
                        <a
                          className={Styles.a}
                          href={el.btn_href}
                          target="_blank"
                        >
                          GET
                        </a>
                      </button>
                    </div>
                  </div>
                ))}
              </div>}
            </div>
          </div>
        </div>
{/* for searching apps */}
        <div className={Styles.d5}>
          <div className={Styles.d6}>
            <GrFormSearch style={{ fontSize: "34px" }} />
            <input
              className={Styles.input}
              type="text"
              
              value={inputValue}
              placeholder="Search"
              spellcheck="false"
              onChange={handleSearch}
            />
            
          </div>
          {search.length > 0 && (
							<>
							
								<Box w={"100%"} gap="5" h='200px' border='1px solid black' zIndex={'6'} mb='2rem'>
									<Box border={"1px solid green"}  h='100%' overflow={'scroll'} overflowX='hidden'  >
                  
										{search.map((el) => (
											<Box
                        backgroundColor={'white'}
                        
												borderBottom={"1px solid green"}
												w="100px"
												m={"auto"}
												p="1"
                        
												cursor="pointer"
                        >
												<Box
                        border='1px solid white'
                        background={'white'}
													fontSize={"small"}
													fontWeight="light"
													color={"blue"}
                          onClick={()=>window.location.href="http://abvio.com/mfp5krunmeter"}
												>
													{el.app_name}
												</Box>
												
											</Box>
										))}
									</Box>
									
								</Box>
							</>
						)}

          <div className={Styles.cg} >Categories</div>
          <div className={Styles.d8} onClick={onAllEvent}>All</div>
          <div className={Styles.d8} onClick={onTackerEvent} >Activity Trackers</div>
          <div className={Styles.d8} >Step Trackers</div>
          <div className={Styles.d8} >Scales</div>
          <div className={Styles.d8} onClick={onFitnessEvent}>Fitness Apps</div>
          <div className={Styles.d8} >Lifestyle</div>
          <div className={Styles.d8} >Wearables</div>
          <div className={Styles.d8} >Exercise Equipment</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default memo(AppPage);
