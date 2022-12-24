import React from "react";
import style from "../styling/BlogNavFooter.module.css";
import logo from "../Images/fitnesslogo.png";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogNav = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className={style.homeicondiv}>
				<Link to="/">
					<Icons.FaHome className={style.homeicon} />
				</Link>
			</div>
			<div
				style={{ textAlign: "center", cursor: "pointer", width: "20%",
				margin: "auto" }}
				onClick={() => navigate("/myHome")}
			>
				<img src={logo} alt="" style={{width:'40%',margin:'auto'}}/>
			</div>
			<div className={style.socialMediaIconDiv}>
				<a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.myfitnesspal.com%2Fvideo%2F">
				<Icons.FaFacebookSquare className={style.socialMediaIconFB} 
				
				/>
				</a>
				<a
            href="https://twitter.com/intent/tweet?text=Video%20@MyFitnessPal%20-%20https%3A%2F%2Fblog.myfitnesspal.com%2Fvideo%2F"
            target="_blank"
            rel="noreferrer"
          >
         <Icons.FaTwitterSquare className={style.socialMediaIconTwitter} /></a>
		 
		 <a
            href="https://twitter.com/intent/tweet?text=Video%20@MyFitnessPal%20-%20https%3A%2F%2Fblog.myfitnesspal.com%2Fvideo%2F"
            target="_blank"
            rel="noreferrer"
          ><Icons.FaInstagram className={style.socialMediaIconInsta} /></a>
					<a
            href="https://www.pinterest.com/pin/create/bookmarklet/?url=https%3A%2F%2Fblog.myfitnesspal.com%2Fvideo%2F&is_video=true"
            target="_blank"
            rel="noreferrer"
          ><Icons.FaPinterest className={style.socialMediaIconPin} /></a>
				<hr />
				<Icons.FaSearch className={style.socialMediaIconSearch} />
			</div>
			<div className={style.SubHeader_Container}>
				<div style={{ cursor: "pointer" }} onClick={() => navigate("/recipes")}>
					RECIPES
				</div>
				<div>NUTRITION</div>
				<div>WEIGHT LOSS</div>
				<div>FITNESS</div>
				<div>INSPIRATION</div>
				<div style={{ cursor: "pointer" }} onClick={() => navigate("/essential")}>ESSENTIALS</div>
				<div style={{ cursor: "pointer" }} onClick={() => navigate("/video")}>VIDEO</div>
			</div>
		</div>
	);
};

export default BlogNav;
