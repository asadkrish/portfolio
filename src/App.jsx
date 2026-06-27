import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Krishnaprasad K</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Krishnaprasad K</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>

      <section id="profile">
        <div className="section__pic-container">
          <img src="/Assets/output-onlinepngtools.png" alt="Krishnaprasad Profile" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm </p>
          <h1 className="title">Krishnaprasad K</h1>
          <p className="section__text__p2">Data Analyst</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open('/Assets/KrishnaprasadK Resume asad.pdf')}>Download CV</button>
            <button className="btn btn-color-1" onClick={() => { window.location.href = '#contact' }}>Contact Info</button>
          </div>
          <div id="socials-container">
            <img src="/Assets/linkedin.png" alt="My LinkedIn Profile" className="icon" onClick={() => { window.location.href = 'https://www.linkedin.com/in/krishnaprasadkr/' }} />
            <img src="/Assets/github.png" alt="My GitHub Profile" className="icon" onClick={() => { window.location.href = 'https://github.com/asadkrish' }} />
            <img src="/Assets/Whatsapp 3.png" alt="My WhatsApp Profile" className="icon" onClick={() => { window.location.href = 'https://wa.me/+919747901072' }} />
            <img src="/Assets/gmail_icon.png" alt="My GMail Profile" className="icon" onClick={() => { window.location.href = 'mailto:asadkrish@gmail.com' }} />
          </div>
        </div>
      </section>

      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src="/Assets/About Me Pic 1.jpg" alt="Profile picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src="/Assets/education.png" alt="education icon" className="icon" /> 
                <h3>Education</h3>
                <p>MBA (Marketing & Analytics) 2022-24 <br /> Indian Institute of Management Sirmaur</p>
                <p>B.Tech (Mechanical Engg.) 2015-19 <br /> Govt. Engineering College Palakkad</p>
              </div>
              <div className="details-container">
                <img src="/Assets/experience.png" alt="experience icon" className="icon" />
                <h3>Experience</h3>
                <p>Management Trainee 06/24 - 08/24 <br /> Leap India (Hyderabad)</p>
                <p>Systems Engineer 11/21 - 08/22 <br /> Infosys (Mysore)</p>
                <p>Site Engineer 08/19 - 06/21 <br /> Viyona Marine (Cochin)</p>
              </div>
            </div>
            <div className="text-container">
              <p>I'm Krishna, an engineer turned management professional shaped by curiosity and driven by change. From factory floors to digital dashboards, I’ve wandered through systems, stories, and strategies- always seeking the logic behind the chaos. I find rhythm in data, structure in words, and purpose in learning. When not building or analyzing, I lose myself in books, music, and quiet games of chess.</p>
            </div>
          </div>
        </div>
        <img src="/Assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => { window.location.href = '#experience' }} />
      </section>

      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Technical Skills</h2>
              <div className="article-container">
                <article>
                  <img src="/Assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Data Science</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src="/Assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>M S Excel</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src="/Assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>SQL</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src="/Assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Machine Learning</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src="/Assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Python</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src="/Assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Java</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src="/Assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Digital Marketing</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src="/Assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>R</h3>
                    <p>Experienced</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Certifications</h2>
              <div className="article-container">
                <article>
                  <img src="/Assets/Certification icon.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Machine Learning Professional Certification (2025)</h3>
                    <p>Advanced</p>
                  </div>
                </article>
                <article>
                  <img src="/Assets/Certification icon.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Data Analytics Professional Certification (2023)</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img src="/Assets/Certification icon.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Excel Skills for Business Specialization (2023)</h3>
                    <p>Professional</p>
                  </div>
                </article>
                <article>
                  <img src="/Assets/Certification icon.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Fundamentals of Amazon Web Services (2023)</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src="/Assets/Certification icon.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>Business Communication Skills Specialization (2021)</h3>
                    <p>Advanced</p>
                  </div>
                </article>
                <article>
                  <img src="/Assets/Certification icon.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>The Fundamentals of Digital Marketing (2019)</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img src="/Assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => { window.location.href = '#projects' }} />
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src="/Assets/spotify 1.jpg" alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Advanced Algorithm for Spotify Song Recommrendations</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://github.com/asadkrish' }}>GitHub</button>
                <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://googledrive' }}>Presentation</button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src="/Assets/project-2.png" alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Safety App Leveraging Real-time Data from San Francisco Jails</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://github.com/asadkrish' }}>GitHub</button>
                <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://googledrive' }}>Presentation</button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src="/Assets/AutoMobile Industry.jpg" alt="Project 3" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Analysis of the Automobile Industry</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://github.com/asadkrish' }}>GitHub</button>
                <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://googledrive' }}>Presentation</button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src="/Assets/project-3.png" alt="Project 4" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Successful Implementation of ERP at Nestlé</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://github.com/asadkrish' }}>GitHub</button>
                <button className="btn btn-color-2 project-btn" onClick={() => { window.location.href = 'https://googledrive' }}>Presentation</button>
              </div>
            </div>
          </div>
        </div>
        <img src="/Assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => { window.location.href = '#projects' }} />
      </section>

      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src="/Assets/email.png" alt="Email icon" className="icon contact-icon" />
            <p><a href="mailto:asadkrish@gmail.com">GMail</a></p>
          </div>
          <div className="contact-info-container">
            <img src="/Assets/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
            <p><a href="https://www.linkedin.com/in/krishnaprasadkr/">LinkedIn</a></p>
          </div>
          <div className="contact-info-container">
            <img src="/Assets/twitter-x-seeklogo.png" alt="X icon" className="icon contact-icon" />
            <p><a href="https://x.com/krishasadram">X</a></p>
          </div>
          <div className="contact-info-container">
            <img src="/Assets/pngegg.png" alt="Facebook icon" className="icon contact-icon" />
            <p><a href="https://www.facebook.com/krishnaprasad.kaniyali/">Facebook</a></p>
          </div>
        </div>
      </section>

      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright © 2025 Krishnaprasad Kaniyali. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
