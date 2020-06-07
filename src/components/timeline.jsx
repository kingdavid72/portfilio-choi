import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Founder, CEO at Calici Therapeutics <span>2018-present</span></h2>
                        <p>
                          I and my friend Dr. Park launched Calici Therapeutics to develop anti-
                          viral drugs using Artificial Intelligence and Structure-Based Drug Design.
                          The company is on the seed stage getting helps from a lot of peoples. 
                          I really appreciate it. We are currently developing a Platform 
                          technology to assist users to develop a drug using AI and testing on 
                          the Norovirus platform. We are also testing on Coronavirus as well.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research Associates at Baylor College of Medicine <span>2012-2018</span></h2>
                        <p>
                          I developed an Anti-viral drug against Norovirus Protease using 
                          Structure-based Drug Design. I also solved many viral protein 
                          structures including Norovirus Protease, NTPase, and Influenza virus 
                          H5N1 protein. I also studied Rotavirus NSP1 for Ubiquitination.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Doctoral Study at Baylor College of Medicine <span>2005-2012</span></h2>
                        <p>
                          I discovered the Norovirus Capsid and carbohydrate receptor
                          interaction using X-ray crystallography. It was the first research report 
                          that described molecular interaction of the Norovirus attachment and
                          entry to the target cell. To handle complicate carbohydrate structure
                          files, I wrote a simple Python code to solve that problem. 
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Master Degree and Startup at Korea University <span>1999-2004</span></h2>
                        <p>
                          I studied Molecular biology at Koran University. It was a master's 
                          degree program where I and my PI started a company. The startup 
                          developed Envirobox which helps the fish farming industry to fight 
                          against marine viruses and pathogens. The product recorded 3M 
                          dollars in sales however CEO got cancer and passed away. I came to 
                          Texas as a research technician in 2002.  
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
