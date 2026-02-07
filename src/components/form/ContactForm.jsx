import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import "./form.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  
  const [toast, setToast] = useState("");

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove error when typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  
  const isValidPhone = (phone) => {
    return /^[0-9]{10,15}$/.test(phone);
  };

  
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Phone must be 10–15 digits only.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  
  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_5nap4wq",
        "template_eg8dgg4",
        formData,
        "_nxtubgwW6rYn6htn"
      );


      showToast("✅ Message sent successfully! We'll contact you soon.");

      // Reset Form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div id="contact-form" className="contactForm">
      {/* ✅ Toast Popup */}
      {toast && <div className="toast">{toast}</div>}

      <form className="contact-form-wrapper" onSubmit={handleSubmit}>
        {/* Name + Email */}
        <div className="form-grid">
          <div className="form-group">
            <label>Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
        </div>

        {/* Phone + Subject */}
        <div className="form-grid">
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label>Subject *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
            />
            {errors.subject && <p className="error-text">{errors.subject}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Message *</label>
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
          ></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        {/* Submit */}
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Sending..." : "Send Message"} <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;