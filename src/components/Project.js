export default function Project(props) {
    return (
        <div class="project-tile">
            <div class="project-content">
                <img class="project-image" src={props.project.image} alt="Project Image" />
                <div class="project-details">
                    <h3 class="project-title">{props.project.title}</h3>
                    <div class="project-links">
                        <a class="project-link button-github" href={props.project.githublink} target="_blank" rel="noreferrer"><i class="fa fa-github" aria-hidden="true"></i> Github</a>
                        {props.project.visitlink && <a class="project-link button-visit" href={props.project.visitlink} target="_blank" rel="noreferrer"><i class="fa fa-mouse-pointer" aria-hidden="true"></i> Visit</a>}
                    </div>
                    <p class="project-text">{props.project.description}</p>
                </div>
            </div>
        </div>
    )
}