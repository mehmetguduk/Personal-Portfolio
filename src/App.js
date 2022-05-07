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

// ***** BACK_TO_TOP DISPLAY AND EVENT *****

const BACK_TO_TOP = document.querySelector(".back-to-top")

window.addEventListener("scroll", function (event) {
    if (this.scrollY > 100) {
        BACK_TO_TOP.style.display = "block";
    }
    else {
        BACK_TO_TOP.style.display = "none";
    }
});

BACK_TO_TOP.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
});