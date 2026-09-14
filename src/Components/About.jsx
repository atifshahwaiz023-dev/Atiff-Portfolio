import anIcon from "../assets/an.jpg"; 
import userIcon from "../assets/use.png"; 
import mapIcon from "../assets/map-pin.png"; 
import EdIcon from "../assets/education.png"; 

export default function About() {
  return (
    <section id="about">
      <div className="wrap panel about-grid">
        <div>
          <span className="eyebrow">About Me</span>
          <h2>Building Digital Solutions That Drive Results</h2>
          <p>I'm a MERN Stack Developer based in Faisalabad, Pakistan, currently sharpening my frontend and full-stack skills through a structured development curriculum. Before code, I worked hands-on in utility billing systems, and digital animation — so I care about things that actually work.</p>
          <div className="info-list">
            <div>
              <span className="k">
                <img src={userIcon} alt="" />
              </span>
              <b>Name:</b> Atiff Shahwaiz
            </div>
            <div>
              <span className="k">
                <img src={mapIcon} alt="" />
              </span>
              <b>From:</b> Faisalabad, Pakistan
            </div>
            <div>
              <span className="k">
                <img src={EdIcon} alt="" />
              </span>
              <b>Education:</b> B.A. — Allama Iqbal Open University
   </div>
          </div>
        </div>
        <div className="about-illustration">
          <img src={anIcon} alt="" />
        </div>
      </div>
    </section>
  );
}