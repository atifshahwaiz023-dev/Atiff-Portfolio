import htmlIcon from '../assets/Html.png';
import cssIcon from '../assets/css.png';
import javascriptIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import nodeIcon from '../assets/node.png';
import exIcon from '../assets/exp.png';
import mongoIcon from '../assets/mongodb.png';
import gitIcon from '../assets/270798.png';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap skills-grid">
        <div className="skill-tiles">
          <div className="skill-tile">
            <div className="glyph">
              <img src={htmlIcon} alt="" />
            </div>
            <span>HTML5</span>
          </div>
          <div className="skill-tile">
            <div className="glyph">
              <img src={cssIcon} alt="" />
            </div>
            <span>CSS3</span>
          </div>
          <div className="skill-tile">
            <div className="glyph">
              <img src={javascriptIcon} alt="" />
            </div>
            <span>JavaScript</span>
          </div>
          <div className="skill-tile">
            <div className="glyph">
              <img src={reactIcon} alt="" />
            </div>
            <span>React JS</span>
          </div>
          <div className="skill-tile">
            <div className="glyph">
              <img src={nodeIcon} alt="" />
            </div>
            <span>Node JS</span>
          </div>
          <div className="skill-tile">
            <div className="glyph">
              <img src={exIcon} alt="" />
            </div>
            <span>Express</span>
          </div>
          <div className="skill-tile">
            <div className="glyph">
              <img src={mongoIcon} alt="" />
            </div>
            <span>MongoDB</span>
          </div>
          <div className="skill-tile">
            <div className="glyph">
              <img src={gitIcon} alt="" />
            </div>
            <span>Git &amp; GitHub</span>
          </div>
        </div>
        <div className="skills-copy">
          <span className="eyebrow">My Skills</span>
          <h2>Practical, Full-Stack Tools I Work With</h2>
          <p>Focused on the MERN stack end to end: building interfaces in React, wiring up APIs with Node and Express, and modeling data in MongoDB — with clean, dependency-light code as the standard.</p>
          <p>Also comfortable with version control workflows, responsive layout, and turning rough ideas into complete, working single builds.</p>
        </div>
      </div>
    </section>
  );
}