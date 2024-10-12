import React from 'react';
import { ProjectContainer, ProjectImage, ProjectVideo, ProjectDetails, ProjectTitle, ProjectDescription, SeeMoreButton } from './ProjectElements';

const Project = ({ projectDetails }) => {

    function saveToLocalStorage(data) {
        localStorage.setItem("projectData", JSON.stringify(data));
    }

    return (
        <div>
            {
                projectDetails.map((project) => (
                    <ProjectContainer key={project.id}>
                        {
                            project.video ? (
                                <ProjectVideo
                                    src={project.video}
                                    autoPlay
                                    muted
                                    loop
                                    controls={false}
                                />
                            ) : (
                                <ProjectImage src={project.image} alt={project.title} />
                            )
                        }
                        <ProjectDetails>
                            <ProjectTitle>
                                {project.name}
                            </ProjectTitle>
                            <ProjectDescription>
                                {project.description}
                            </ProjectDescription>
                            <SeeMoreButton
                                to={{ pathname: `/project/${project.id}` }}
                                onClick={() => saveToLocalStorage(project)}>
                                Learn More
                            </SeeMoreButton>
                        </ProjectDetails>
                    </ProjectContainer>
                ))
            }
        </div>
    )
}

export default Project;
