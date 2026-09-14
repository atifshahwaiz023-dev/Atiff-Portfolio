import laptopIcon from '../assets/laptop.png';
import montageIcon from '../assets/montage.png';
import learingIcon from '../assets/online-learning.png';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap panel">
        <div className="exp-head">
          <span className="eyebrow">Experience</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.1rem)' }}>My Journey So Far</h2>
        </div>
        <div className="timeline">
          <div className="exp-row">
            <div className="rail"><div className="node"></div><div className="line"></div></div>
            <div>
              <div className="exp-date"><h2>Frontend Development Intern</h2></div>
              <div className="exp-card">
                <div className="ico">
                  <img src={laptopIcon} alt="" />
                </div>
                <div>
                  <h3>Codira House (PVT) Limited</h3>
                  <p>Successfully completed a 2-month internship focusing on frontend and web development tasks.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="exp-row">
            <div className="rail"><div className="node"></div><div className="line"></div></div>
            <div>
              <div className="exp-date"><h2>MERN Stack Developer / Trainee</h2></div>
              <div className="exp-card">
                <div className="ico">
                  <img src={learingIcon} alt="" />
                </div>
                <div>
                  <h3>Birdview Logic Academy</h3>
                  <p>Completed comprehensive training in MERN stack development, building full-stack web applications, REST APIs, and database integration using modern JavaScript.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="exp-row">
            <div className="rail"><div className="node"></div></div>
            <div>
              <div className="exp-date"><h2>Digital Animator &amp; Video Editor</h2></div>
              <div className="exp-card">
                <div className="ico">
                  <img src={montageIcon} alt="" />
                </div>
                <div>
                  <h3>Freelance</h3>
                  <p>Produced explainer and promotional videos using PowToon, Vyond, and VideoScribe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}