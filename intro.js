import React from "react";
import './intro.css';
import bg from '../../assets/Kamal.png';
import btn from '../../assets/hireme.png';
import { Link } from "react-scroll";

const Intro = () =>{
    return(
        <section id="intro">
            <div className="introcontent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <spam className="introName">Kamalraj </spam><br/>Website Designer</span>
                <p className="introPara">I am a Skilled web designer with experinces in createing <br/>visually appealing and user friendly website.</p>
                <Link><button className="btn"><img src={btn} alt="hire_me "className="hireImg"/>Hire me</button></Link>
            </div>

                <img src={bg} alt="profile" className="bg"/>
        </section>
    )
}
export default Intro