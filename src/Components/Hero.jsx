import delvIcon from '../assets/delv.png';
import cleanIcon from '../assets/cl.png';
import uiIcon from '../assets/ui.png';
import buldIcon from '../assets/buld.png';
import contIcon from '../assets/cont.png';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div>
          <span className="tag" style={{ borderColor: 'var(--violet)', color: 'var(--violet-2)', marginBottom: '16px', display: 'inline-block' }}>
            MERN STACK DEVELOPER
          </span>
          <h1>I Build Web Apps That Are <span className="accent">Fast</span>, <span className="accent2">Clean</span> &amp; Scalable.</h1>
          <p className="lead">Turning ideas into real, working products — from React interfaces to Node/Express APIs backed by MongoDB.</p>
          <div className="stack-line">React JS &bull; Node JS &bull; MongoDB &mdash; idea to deployed product.</div>
          <div className="tags">
            <span className="tag">React JS</span>
            <span className="tag">Node JS</span>
            <span className="tag">Express</span>
            <span className="tag">MongoDB</span>
            <span className="tag">JavaScript</span>
          </div>
          <div className="features">
            <div className="feature">
              <div className="ico">
                <img src={delvIcon} alt="" />
              </div>
              <span>Fast Delivery</span>
            </div>
            <div className="feature">
              <div className="ico">
                <img src={cleanIcon} alt="" />
              </div>
              <span>Clean Code</span>
            </div>
            <div className="feature">
              <div className="ico">
                <img src={uiIcon} alt="" />
              </div>
              <span>Practical UI</span>
            </div>
            <div className="feature">
              <div className="ico">
                <img src={buldIcon} alt="" />
              </div>
              <span>Scalable Builds</span>
            </div>
            <div className="feature">
              <div className="ico">
                <img src={contIcon} alt="" />
              </div>
              <span>Direct Support</span>
            </div>
          </div>
          <a href="#contact" className="btn">Message Me — Let's Build!</a>
        </div>

        <div className="hero-visual">
          <div className="avatar-card">
            <div className="code-chip">
              function build() {'{'}<br />
              &nbsp;&nbsp;learn();<br />
              &nbsp;&nbsp;ship();<br />
              &nbsp;&nbsp;repeat();<br />
              {'}'}
            </div>
            <div className="stat-pill"><b>100%</b><span>Task Focused</span></div>
            <div className="avatar-ring"><div className="avatar-inner">AS</div></div>
            <h3 style={{ fontSize: '1.05rem' }}>Atif Shahwaiz</h3>
            <p style={{ color: 'var(--text-dimmer)', fontSize: '0.82rem' }}>MERN Stack Developer</p>

            <div className="profile-strip">
              <div className="who">
                <div className="dot">AS</div>
                <div>
                  <strong>Atif Shahwaiz</strong>
                  <small>Faisalabad, Pakistan</small>
                </div>
              </div>
              <div className="metrics">
                <div><b>Codiora</b><span>Curriculum</span></div>
                <div><b>Full-Stack</b><span>Focus</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}