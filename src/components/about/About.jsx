import { CheckCircle2 } from "lucide-react";
import "./about.css";

const highlights = [
  "Expert team of developers and designers",
  "Proven track record of successful projects",
  "Agile development methodology",
  "Transparent communication throughout",
  "Post-launch support and maintenance",
  "Competitive pricing with quality delivery",
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* Top Section */}
        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Our Team"
            />
          </div>

          <div className="about-text">
            <h2>Why Choose Us?</h2>

            <p>
              We are passionate about creating digital solutions that make a
              difference. With years of experience in web and mobile
              development, we bring your vision to life with cutting-edge
              technology and creative design.
            </p>

            <p>
              Our commitment is to deliver high-quality products that exceed
              expectations and drive business growth.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div className="highlight-item" key={index}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          <div className="stat">
            <h3>10+</h3>
            <p>Technologies Used</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Custom Solutions</p>
          </div>
          <div className="stat">
            <h3>Modern</h3>
            <p>Developments</p>
          </div>
          <div className="stat">
            <h3>Agile</h3>
            <p>Development Process</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
