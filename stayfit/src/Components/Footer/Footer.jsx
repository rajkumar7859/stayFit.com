import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="block1">
      <div className="block2">
        <div className="block3">
          <p className="tag">
            <a href="https://www.myfitnesspal.com/">Calorie Counter</a>
          </p>
          <p className="space">
            <a href="">Blog</a>
          </p>
          <p className="space">
            <a href="">Terms</a>
          </p>
          <p className="space">
            <a href="">Privacy</a>
          </p>
          <p className="space">
            <a href="">Contact Us</a>
          </p>
          <p className="space">
            <a href="">API</a>
          </p>
          <p className="space">
            <a href="">Jobs</a>
          </p>
          <p className="space">
            <a href="">Feedback</a>
          </p>
          <p className="space">
            <a href="">Community Guidelines</a>
          </p>
          <p className="space">
            <a href="">Ad Choices</a>
          </p>
          <p className="space">
            <a href="">Do Not Sell My Personal Information</a>
          </p>
        </div>
        <div className="block4">
          <select className="menu">
            <option value="">English</option>
            <option value="">Bengali</option>
            <option value="">Albanian</option>
            <option value="">Bambara</option>
            <option value="">chinese</option>
            <option value="">Estonian</option>
            <option value="">french</option>
            <option value="">Greek</option>
            <option value="">Hmong</option>
            <option value="">Italian</option>
            <option value="">japanese</option>
          </select>
        </div>
      </div>
      <div className="block5">
        <p>© 2022 MyFitnessPal, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
