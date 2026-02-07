import {
  Globe,
  Smartphone,
  Layout,
  Zap,
  Shield,
} from "lucide-react";

import "./services.css";

// images (from src/assets)
import webImg from "../../assets/web1.avif";
import mobileImg from "../../assets/app.avif";
import uiuxImg from "../../assets/uiux.avif";
import performanceImg from "../../assets/seo.avif";
import supportImg from "../../assets/maintenance.avif";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    image: webImg,
    description:
      "Custom websites built with modern technologies. Responsive, fast, and SEO-optimized to help your business stand out online.",
    features: ["Responsive Design", "SEO Optimization", "Fast Performance"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    image: mobileImg,
    description:
      "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    features: ["iOS & Android", "Cross-platform", "User-friendly UI"],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    image: uiuxImg,
    description:
      "Beautiful and intuitive designs that provide seamless user experiences and drive engagement.",
    features: ["Modern Design", "User Research", "Prototyping"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    image: performanceImg,
    description:
      "Speed up your existing applications and websites for better user experience and search rankings.",
    features: ["Speed Enhancement", "Code Optimization", "Caching Strategies"],
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    image: supportImg,
    description:
      "Reliable ongoing maintenance and support to keep your digital products running smoothly.",
    features: ["24/7 Support", "Regular Updates", "Bug Fixes"],
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            We offer comprehensive development services to transform your ideas
            into reality
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <Icon size={28} />
                </div>

                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />

                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
