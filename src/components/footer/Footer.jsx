import {
  Facebook,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
import logo from "../../assets/logo2.png";
import "./footer.css";

const Footer = () => {
  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div 
            onClick={() => scrollToSection("home")}
             style={{ cursor: "pointer" }}>
            <img src={logo} alt="DevAppSolutions Logo" height={"55px"} width={"250px"} />
            </div>
            <p className="footer-text">
              Building digital solutions that drive business growth and success.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollToSection("home")}>Home</button></li>
              <li><button onClick={() => scrollToSection("services")}>Services</button></li>
              <li><button onClick={() => scrollToSection("about")}>About</button></li>
              <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4>Services</h4>
            <ul>
              <li><button onClick={() => scrollToSection("services")}>Web Development</button></li>
              <li><button onClick={() => scrollToSection("services")}>App Development</button></li>
              <li><button onClick={() => scrollToSection("services")}>UI/UX Design</button></li>
              <li><button onClick={() => scrollToSection("services")}>Performance Optimization</button></li>
              <li><button onClick={() => scrollToSection("services")}>Maintenance & Support</button></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Github size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 DevAppSolutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
