import React from 'react';
import {ProjectContainer,ProjectImage,ProjectDetails,ProjectTitle,ProjectDescription,SeeMoreButton} from './ProjectElements';

const Project = ({projectDetails}) => {
    return (
        <div>
        {
            projectDetails.map((projectDetails)=>(
                <ProjectContainer key={projectDetails.key}>
                <ProjectImage src={projectDetails.image} alt={projectDetails.title}/>
                <ProjectDetails>
                    <ProjectTitle>
                        {projectDetails.title}
                    </ProjectTitle>
                    <ProjectDescription>
                        {projectDetails.description}
                        {/* <ProjectTechnologies>
                            <Tech>React</Tech>
                            <Tech>Netlify</Tech>                                                
                        </ProjectTechnologies> */}
                    </ProjectDescription>
                    <SeeMoreButton>
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