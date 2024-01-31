import React from "react";
import './work.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';


const Works = () => {
    return (
        <section id="works">
            <h2 className="workTitel">My Portfolio</h2>
            <span className="workDec">Versatile and results-driven Full Stack Developer with designing, implementing, testing, and maintaining full-stack applications. Proficient in both front-end and back-end technologies, with a passion for creating robust, scalable, and user-friendly web applications. Adept at collaborating with cross-functional teams to drive project success. Seeking to contribute technical expertise and innovative solutions in a challenging Full Stack Developer role. </span>
            <div className="workImgs">
                <img src={Portfolio1} alt="Portfolio1" className="workImg"/>
                <img src={Portfolio2} alt="Portfolio2" className="workImg"/>
                <img src={Portfolio3} alt="Portfolio3" className="workImg"/>
                <img src={Portfolio4} alt="Portfolio4" className="workImg"/>
                <img src={Portfolio5} alt="Portfolio5" className="workImg"/>
                <img src={Portfolio6} alt="Portfolio6" className="workImg"/>
            </div>
            <button className="workBtn">See More</button>
        </section>
    )
}
export default Works;