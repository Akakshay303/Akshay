import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechkStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2" id='about'>
        <img src={vg} alt='Graphics' />

        <div>
            <p>
                we are your one and onlr solution to teach problem
                you face
                every day, we are leading teach compony whose aim is to
                increase the 
                problem solving ability in children.
            </p>
        </div>

    </div>

    <div className="home3">
        <div>
            <h1>Who we are?</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, non unde! Quidem voluptas eaque fuga reiciendis. Quod voluptatum quas consequatur harum cumque consectetur corporis iure! Id nesciunt laboriosam minus odio harum vero fuga assumenda nam? Officia, repudiandae dolorem placeat totam aperiam consequuntur eveniet deleniti aut quaerat adipisci? Odit, hic.
            </p>
        </div>
    </div>

    <div className='home4' id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s",
                    }}>
                      <AiFillGoogleCircle /> 
                      <p>Google</p> 
                </div>
                <div style={{
                    animationDelay: "0.5s",
                    }}>
                      <AiFillAmazonCircle /> 
                      <p>Amazon</p> 
                </div>
                <div style={{
                    animationDelay: "0.7s",
                    }}>
                      <AiFillYoutube /> 
                      <p>Youtube</p> 
                </div>
                <div style={{
                    animationDelay: "0.1s",
                    }}>
                      <AiFillInstagram /> 
                      <p>Inatagram</p> 
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home