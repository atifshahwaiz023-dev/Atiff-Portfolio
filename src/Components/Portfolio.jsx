import gymIcon from "../assets/gym.png";
import userIcon from "../assets/use.jpg";
import loginIcon from "../assets/login.png";
import codioraIcon from "../assets/Codiora.png";


export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrap">
        <div className="port-head">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2>Some Of My Recent Work</h2>
          </div>
          <a href="#contact" className="btn btn-ghost">
            View All Projects
          </a>
        </div>
        <div className="port-grid">
          <div className="port-card">
            <a
              href="https://user-management-system-six-ruddy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="port-thumb">
                <img src={userIcon} alt="" />
              </div>
              <div className="port-body">
                <div>
                  <h3>User Management System</h3>
                  <p>
                    A full-stack dashboard interface built to manage system
                    users. It includes a form for adding new user details (Name,
                    Email, Address) and an interactive table that lists
                    registered users, complete with dynamic 'Edit' and 'Delete'
                    functionality for managing records.
                  </p>
                </div>
                <div className="arrow-btn">↗</div>
              </div>
            </a>
          </div>

          <div className="port-card">
            <a
              href="https://blogs-upload.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="port-thumb">
                <img src={loginIcon} alt="" />
              </div>
              <div className="port-body">
                <div>
                  <h3>Blogs Upload form</h3>
                  <p>
                    An intuitive content management dashboard component equipped
                    with form validation and media handling for blog creation
                  </p>
                </div>
                <div className="arrow-btn">↗</div>
              </div>
            </a>
          </div>

          <div className="port-card">
            <a
              href="https://gym-project-six-delta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="port-thumb">
                <img src={gymIcon} alt="" />
              </div>
              <div className="port-body">
                <div>
                  <h3>Gym Landing Page</h3>
                  <p>
                    A responsive fitness website template featuring modern UI,
                    interactive navigation, and smooth layout design built with
                    vanilla JavaScript
                  </p>
                </div>
                <div className="arrow-btn">↗</div>
              </div>
            </a>
          </div>

          <div className="port-card">
            <a
              href="https://codiora-project.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="port-thumb">
                <img src={codioraIcon} alt="" />
              </div>
              <div className="port-body">
                <div>
                  <h3>CODIORA Portfolio</h3>
                  <p>
                    A fully responsive personal portfolio website engineered
                    with React.js components, modular CSS architecture, and a
                    custom blueprint theme. Features dynamic project filtering,
                    live search capabilities, and a seamless light/dark mode
                    toggle
                  </p>
                </div>
                <div className="arrow-btn">↗</div>
              </div>
            </a>
          </div>

          <div className="port-card">
            <div className="port-thumb">🎨</div>
            <div className="port-body">
              <div>
                <h3>Portfolio Variants</h3>
                <p>Design Exploration</p>
              </div>
              <div className="arrow-btn">↗</div>
            </div>
          </div>

          <div className="port-card">
            <div className="port-thumb">🧾</div>
            <div className="port-body">
              <div>
                <h3>Service Ticket Portfolio</h3>
                <p>Concept Build</p>
              </div>
              <div className="arrow-btn">↗</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
