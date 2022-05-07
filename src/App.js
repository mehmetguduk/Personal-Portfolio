import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <WelcomeSection />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
            <span class="back-to-top"><i class="fa fa-chevron-up" aria-hidden="true"></i></span>
        </div>
    );
}