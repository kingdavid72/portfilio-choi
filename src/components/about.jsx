import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
                      Welcome to my personal website. My name is Jae-Mun Choi, born in 
                      South Korea currently working at a Biotech startup in Texas, USA. I
                      moved here as a Research Technician.  I got my Ph.D. degree at 
                      Baylor College of Medicine studying Norovirus protein structure. My
                      major is Biochemistry, not Computer Science so folks do not ask me to
                      build your website. Simply I do not have time for that because running
                      a startup is not an easy task. As a startup, especially before funding or 
                      investment everything is DIY, Do It Yourself, even if we have extra
                      money, we got to purchase reagents, absolutely no intension to hire
                      talent and spend money on a simple 'git clone' command. 
                    </p>
                    <p>
                      Someone might say Squarespace or Wix.com would be good
                      enough for a startup home page. They are right if they do not need 
                      source code or Dynamic webpage. In my case, we are building a 
                      web application for Drug Discovery where extensive DOM 
                      manipulation is needed. I was also challenged by some people saying that 
                      it is very difficult for non-IT personnel to develop such applications. 
                      The latest development of many frameworks made it easy for non-IT 
                      personal to build it.
                    </p>
                    <p>
                      Well, there are some difficult tasks for a non-IT person such as building 
                      Linux kernel or concurrent multi-threading software. In comparison,
                      coding some front-end using a high-level language is relatively easy.
                      Any graduate student who knows Python, JavaScript can build, of 
                      course, not the level of professional developers. 
                    </p>
                    <p>
                      Don’t take my word for it, Here is the webpage, actually it is WebApp
                      built with ReactJS, BootStrap for Front-end and NodeJS for Back-end. 
                      In biology terminology RNA extraction using Pury viral RNA mini kit and
                      RT-PCR using QuntaStudio3, it is that simple. I start to like ReactJS ^^,
                      bye-bye PHP, and Drupal I don’t want to see you again. Thank you for 
                      ReactJS and VS Code developer team who made wonderful tools 
                      and sharing with us.  
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-starburst" />
                </span>
                <div className="desc">
                    <h3>RNA Virus Research</h3>
                    <p>
                        15 years of RNA virus research about viral entry, replication, and anti-viral 
                        development
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Protein Structure, Drug Design</h3>
                    <p>
                        Expert on viral protein structural analysis using X-ray crystallography 
                        and Structure-Based Drug Design
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>
                        A novice developer of building websites using JavaScript, React, HTML, 
                        CSS, express, NodeJS, Django, SQL, MongoDB
                    </p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
