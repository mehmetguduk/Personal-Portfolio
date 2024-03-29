import Project from "./Project"
import data from "../Database"

export default function Projects() {
    const projects = data.map(project => {
        return (
            <Project
                project={project}
            />
        )
    })
    return (
        <section id="projects">
            <h2 class="section-title">PROJECT<span>S</span></h2>
            <div class="projects-container">
                {projects}
            </div>
        </section>
    )
}