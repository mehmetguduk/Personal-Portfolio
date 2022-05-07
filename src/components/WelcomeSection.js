import welcomeimage from "../images/4.jpg"

export default function WelcomeSection() {
    return (
        <section id="welcome-section">
            <img class="welcome-image" src={welcomeimage} alt="Mehmet Güdük with hoodie in Berlin Germany" />
            <header class="welcome-header">
                <h3 id="greeting">Hello, I'm</h3>
                <h1 id="name">Mehmet Güdük</h1>
                <h4 id="job">Web Developer & Designer</h4>
            </header>
        </section>
    )
}

// ***** WHILE STARTING *****

const JOB = document.querySelector("#job");
JOB.innerHTML = "< Web Developer & Designer />"