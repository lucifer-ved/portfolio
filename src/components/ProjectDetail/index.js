import React, {useState, useEffect} from 'react';
import {ProjectDetailContainer, 
    ProjectName, 
    ProjectImage, 
    Hr, 
    ProjectDescription,
    SectionHeading,
    TheWhy,
    TheChallenges,
    Tech,
    WhatsNext,
    ProjectLink,
    ProjectLinkContainer,
    ProjectUrl} from './ProjectDetailElement';
import { ProjectData } from '../../ProjectData';

const ProjectDetail = () => {

    const[data,setData] = useState({});


    useEffect(() => {
        const data = localStorage.getItem("projectData")
        setData(JSON.parse(data));
    }, [])

    function saveToLocalStorage(data){
        localStorage.setItem("projectData",JSON.stringify(data));
        setData(JSON.parse(JSON.stringify(data)));
    }

    return (
        <ProjectDetailContainer>
            <ProjectName>
               {(data || {}).name}
            </ProjectName>
            <ProjectDescription>
                {(data || {}).description}
            </ProjectDescription>
            <ProjectImage src={(data || {}).image} alt={(data || {}).fullName} />
            <ProjectUrl href={(data || {}).website}>{(data || {}).website}</ProjectUrl>
            <Hr />
            <SectionHeading>Why</SectionHeading>
            <TheWhy dangerouslySetInnerHTML={{ __html: ((data || {}).details || {}).why}} />
            <Hr />
            { 
                (data || {}).showChallenges  && 
                <div>
                    <SectionHeading>Challenges</SectionHeading>
                    <TheChallenges dangerouslySetInnerHTML={{ __html: ((data || {}).details || {}).challenges }} />
                    <Hr /> 
                </div>
            }
            <SectionHeading>Technologies & Tools Used</SectionHeading>
            <Tech dangerouslySetInnerHTML={{ __html: ((data || {}).details || {}).tech }} />
            <Hr />
            { 
                (data || {}).showWhatsNext  && 
                <div>
                <SectionHeading>What's next ?</SectionHeading>
                <WhatsNext dangerouslySetInnerHTML={{ __html: ((data || {}).details || {}).whatsnext }} /> 
                <Hr /> 
                </div>
            }
            <ProjectLinkContainer>
                <ProjectLink to="/">All</ProjectLink>
                {
                    ProjectData.map((projectData)=>(
                        <ProjectLink to={{pathname: `/project/${projectData.id}`}}
                        className={projectData.shortName === (data || {}).shortName ? "isActive" : ""}
                        onClick={()=>saveToLocalStorage(projectData)}
                        key={projectData.shortName}
                        >{projectData.shortName}</ProjectLink>
                    ))
                }
            </ProjectLinkContainer>
        </ProjectDetailContainer>
    )
}

export default ProjectDetail;




