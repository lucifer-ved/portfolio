import React from 'react';
import Project from './Project';

import {ProjectsContainer, ProjectTitle } from './ProjectsElements';

const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectTitle>Selected Work</ProjectTitle>
            <Project />
        </ProjectsContainer>
    )
}

export default Projects;
