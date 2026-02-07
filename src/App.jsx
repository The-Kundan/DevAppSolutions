import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ContactForm from "./components/form/ContactForm";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
};

export default App;
