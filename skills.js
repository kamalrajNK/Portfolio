import React from "react";
import './skills.css';
import FullStack from "../../assets/download.png";
import WebDesing from "../../assets/website-design.png";
import AppDesing from "../../assets/app-design.png";

const Skills = () =>{
    return(
        <section id="skills">
            <span className="skillTitel">What I do</span> 
            <span className="skillDesc">I am a skilled and passioanted web designer with creating visually appeling and user-frendly <br/>websitrs. i have a storng understanding of design and akeen eye for detail. I am proficient in HTML CSS <br/>JAVASCRIPT and React JS .</span>
            <div className="skillBars">
                <div className="skillBar">
                <img src={FullStack} alt="UDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>FullStack</h2>
                    <p>I have a good knowledge in FullStack design </p>
                    </div> 
                    </div>
                    <div className="skillBar">
                    <img src={WebDesing} alt="webDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>I have a good knowledge in Web design</p>
                    </div> 
                    </div>
                    <div className="skillBar">
                    <img src={AppDesing} alt="appDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>App Design</h2>
                <p>I have a good knowledge in App design</p>
                    </div> 
                    </div>
            </div>
        </section>
    )
}
export default Skills;