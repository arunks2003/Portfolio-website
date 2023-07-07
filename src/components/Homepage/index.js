import React, { useEffect, useState } from "react";
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from "react-router-dom";
import './index.scss';
import AnimatedLetters from "../Animatedletters";


const Home = () => {
    const [letterClass, setletterClass] = useState('text-animate');
    const nameArray = ['l', 'o', 'b', 'o', 'd', 'o', 'n'];
    const jobArray = ['w', 'e', 'b', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}></AnimatedLetters>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15}></AnimatedLetters>
                </h1>
                <h2>Frontend Developer / JavaScript / SDE</h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>

            </div>
        </div>
    )
}

export default Home;