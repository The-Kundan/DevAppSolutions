import { ArrowRight, Code2, Smartphone } from "lucide-react";
import "./hero.css";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        {/* LEFT CONTENT */}
        <div className="hero-text">
          <h1>
            Building Digital Solutions <br /> for Your Business
          </h1>

          <p>
            We create stunning websites and powerful mobile apps that help your
            business grow and succeed in the digital world.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={scrollToContact}>
              Start Your Project
              <ArrowRight size={16} />
            </button>

            <button className="outline-btn" onClick={scrollToServices}>
              View Services
            </button>
          </div>

          <div className="hero-features">
            <div className="feature">
              <div className="icon blue">
                <Code2 size={22} />
              </div>
              <div>
                <div className="feature-title">Web Development</div>
                <div className="feature-sub">Modern & Responsive</div>
              </div>
            </div>

            <div className="feature">
              <div className="icon purple">
                <Smartphone size={22} />
              </div>
              <div>
                <div className="feature-title">App Development</div>
                <div className="feature-sub">iOS & Android</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1627599936744-51d288f89af4"
            alt="Development Workspace"
          />

          <div className="experience-badge">
            <div className="years">100%</div>
            <div className="label">Client Focus</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
