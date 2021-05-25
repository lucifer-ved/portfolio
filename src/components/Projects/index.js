import React from 'react';
import Project from './Project';
import { ProjectData } from '../../ProjectData';

import {ProjectsContainer, ProjectTitle } from './ProjectsElements';

const Projects = () => {
    return (
        <ProjectsContainer>
            <ProjectTitle>Recent Projects</ProjectTitle>
            <Project projectDetails={ProjectData}/>
        </ProjectsContainer>
    )
}

export default Projects;
