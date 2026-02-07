import { Mail, Phone, Zap } from "lucide-react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Heading */}
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>
            Ready to start your project? Contact us today and let's bring your
            ideas to life.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-info">
          <div className="info-card">
            <div className="icon">
              <Mail size={24} />
            </div>
            <h3>Email Us</h3>
            <p>devappsolutions6@gmail.com</p>
          </div>

          <div className="info-card">
            <div className="icon">
              <Phone size={24} />
            </div>
            <h3>Call Us</h3>
            <p>+91 8002522175</p>
          </div>

          <div className="info-card">
            <div className="icon">
              <Zap size={24} />
            </div>
            <h3>Remote Collaboration</h3>
            <p>We work with clients worldwide, fully online.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
