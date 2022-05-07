import welcomeimage from "../images/4.jpg"

export default function WelcomeSection() {
    return (
        <section id="welcome-section">
            <img class="welcome-image" src={welcomeimage} alt="A black white photo by Mehmet Güdük in Berlin Germany" />
            <header class="welcome-header">
                <h3 id="greeting">Hello, I'm</h3>
                <h1 id="name">Mehmet Güdük</h1>
                <h4 id="job"></h4>
            </header>
        </section>
    )
}