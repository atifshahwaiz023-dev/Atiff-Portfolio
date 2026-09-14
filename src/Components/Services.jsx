import webIcon from '../assets/web.png';
import frontIcon from '../assets/front.png';
import backIcon from '../assets/back.png';
import dataIcon from '../assets/data.png';
import apiIcon from '../assets/api.png';
import depIcon from '../assets/dep.png';

export default function Services() {
  return (
    <section id="services">
      <div className="wrap services-panel">
        <div className="services-head">
          <span className="eyebrow">Services</span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.1rem)' }}>What I Can Do For You</h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="ico">
              <img src={webIcon} alt="" />
            </div>
            <h3>Web Development</h3>
            <p>Responsive, dependency-light websites built to load fast and stay maintainable.</p>
          </div>
          <div className="service-card">
            <div className="ico">
              <img src={frontIcon} alt="" />
            </div>
            <h3>Frontend Development</h3>
            <p>Pixel-focused UI with React and clean, semantic HTML/CSS.</p>
          </div>
          <div className="service-card">
            <div className="ico">
              <img src={backIcon} alt="" />
            </div>
            <h3>Backend Development</h3>
            <p>REST APIs and server logic with Node.js and Express.</p>
          </div>
          <div className="service-card">
            <div className="ico">
              <img src={dataIcon} alt="" />
            </div>
            <h3>Database Design</h3>
            <p>Schema design and data modeling with MongoDB.</p>
          </div>
          <div className="service-card">
            <div className="ico">
              <img src={apiIcon} alt="" />
            </div>
            <h3>API Integration</h3>
            <p>Connecting third-party services and building custom endpoints.</p>
          </div>
          <div className="service-card">
            <div className="ico">
              <img src={depIcon} alt="" />
            </div>
            <h3>Deployment</h3>
            <p>Getting full-stack apps live and accessible, end to end.</p>
          </div>
        </div>
      </div>
    </section>
  );
}