import React from 'react';
import {ProjectContainer,ProjectImage,ProjectDetails,ProjectTitle,ProjectDescription,SeeMoreButton} from './ProjectElements';

const Project = ({projectDetails}) => {

    function saveToLocalStorage(data){
        localStorage.setItem("projectData",JSON.stringify(data));
    }

    return (
        <div>
        {
            projectDetails.map((projectDetails)=>(
                <ProjectContainer key={projectDetails.id}>
                    <ProjectImage src={projectDetails.image} alt={projectDetails.title}/>
                    <ProjectDetails>
                        <ProjectTitle>
                            {projectDetails.name}
                        </ProjectTitle>
                        <ProjectDescription>
                            {projectDetails.description}
                        </ProjectDescription>
                        <SeeMoreButton 
                        to={{pathname:`/Project/${projectDetails.id}`}}
                        onClick={()=>saveToLocalStorage(projectDetails)}>
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