import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import logoMobile from "../../assets/logo1.png";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-row">
          <div className="logo" 
            onClick={() => scrollToSection("home")}
             style={{ cursor: "pointer" }}>
                <picture>
    {/* Mobile Logo */}
                <source srcSet={logoMobile} media="(max-width: 480px)" height={"45px"} width={"100%"}/>
                <img src={logo} alt="DevAppSolutions Logo" height={"55px"} width={"100%"} />
  </picture>

          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <button onClick={() => scrollToSection("services")}>Services</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
            <button
              className="primary-btn"
              onClick={() => scrollToSection("contact-form")}
            >
              Get Free Consultation
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="nav-mobile">
            <button onClick={() => scrollToSection("services")}>Services</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
            <button
              className="primary-btn"
              onClick={() => scrollToSection("contact-form")}
            >
              Get Free Consultation
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
