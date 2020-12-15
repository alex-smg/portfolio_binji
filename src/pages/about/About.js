/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './About.scss';

import profilePicture from '../../img/home/profilepicture.png';
import image1 from '../../img/home/image1.svg';
import image2 from '../../img/home/image2.svg';
import image3 from '../../img/home/image3.svg';

export default function About() {
    return (
      
      <div id="About">
        <div id="AboutDesktop">
          <section>
            <div>
              <img src={profilePicture} alt="profile picture"/>
            </div>
            <div>
              <h2 className="title">Solve your business issues through design</h2>
              <p className="basic_text">Meaningful and sustainable solutions meeting real challenges.</p>
            </div>
          </section>
          <section>
            <div>
              <h2 className="title">Continuous user research</h2>
              <p className="basic_text">Achieve persistent business impact <br/> through actionnable insights.</p>
            </div>
            <div>
              <img src={image1} alt="Continuous user research image"/>
            </div>
          </section>
          <section>
            <div>
              <img src={image2} alt="Design Sprints image"/>
            </div>
            <div>
              <h2 className="title">Design Sprints</h2>
              <p className="basic_text">Discover opportunities, experiment innovation and<br/> test products.</p>
            </div>
          </section>
          <section>
            <div>
              <h2 className="title">Design System</h2>
              <p className="basic_text">Create a visual language in order to <br/> align your teams and strengthen your brand.</p>
            </div>
            <div>
              <img src={image3} alt="Design System image"/>
            </div>
          </section>
        </div>

        {/* MOBILE  */}

        <div id="AboutMobile">
          <section>
            <div>
              <img src={profilePicture} alt="profile picture"/>
            </div>
            <div className="container_text">
              <h2 className="title">Solve your business issues through design</h2>
              <p className="basic_text">Meaningful and sustainable solutions meeting real challenges.</p>
            </div>
          </section>
          <section>
            <div className="container_img">
              <img src={image1} alt="Continuous user research image"/>
            </div>
            <div className="container_text">
              <h2 className="title">Continuous user research</h2>
              <p className="basic_text">Achieve persistent business impact through actionnable insights.</p>
            </div>
          </section>
          <section>
            <div className="container_img">
              <img src={image2} alt="Design Sprints image"/>
            </div>
            <div className="container_text">
              <h2 className="title">Design Sprints</h2>
              <p className="basic_text">Discover opportunities, experiment innovation and test products.</p>
            </div>
          </section>
          <section>
            <div className="container_img">
              <img src={image3} alt="Design System image"/>
            </div>
            <div className="container_text">
              <h2 className="title">Design System</h2>
              <p className="basic_text">Create a visual language in order to align your teams and strengthen your brand.</p>
            </div>
          </section>
        </div>
      </div>
      
    );
  }