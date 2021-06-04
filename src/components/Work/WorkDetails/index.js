import React, { useState, useEffect} from 'react';
import { WorkData } from '../../../WorkData';
import {WorkDetailContainer, WorkName, WorkImage, WorkBasicDetails,CompanyName,TimePeriod,Role, Website, ThingsWorkedOn, Challenges,SectionHeading, Hr, DetailsValue, DetailsHeading,WebsiteValue,WorkLinkContainer, WorkLink} from './WorkDetailElements';

const WorkDetails = () => {
    const [data,setData] = useState({});

    useEffect(() => {
        const storedData = localStorage.getItem("workData");
        setData(JSON.parse(storedData));
    }, [])

    function saveToLocalStorage(data){
        localStorage.setItem("workData",JSON.stringify(data));
        setData(JSON.parse(JSON.stringify(data)));
    }

    return (
        <WorkDetailContainer>
            <WorkName>
                {data.fullName}
            </WorkName>
            <WorkImage src={data.image} alt={data.fullName} />
            <Hr />
            <SectionHeading>The Basics</SectionHeading>
            <WorkBasicDetails>
                <CompanyName>
                    <DetailsHeading>Company</DetailsHeading>
                    <DetailsValue>{(((data || {}).companyDetails || {}).basics || {}).name}</DetailsValue>
                </CompanyName>
                <TimePeriod>
                    <DetailsHeading>Time</DetailsHeading>
                    <DetailsValue>{(((data || {}).companyDetails || {}).basics || {}).timePeriod}</DetailsValue>
                </TimePeriod>
                <Role>
                    <DetailsHeading>My Role</DetailsHeading>
                    <DetailsValue>{(((data || {}).companyDetails || {}).basics || {}).role}</DetailsValue>
                </Role>
                <Website>
                    <DetailsHeading>Website</DetailsHeading>
                    <WebsiteValue href={(((data || {}).companyDetails || {}).basics || {}).website} target='_blank' rel='noopener noreferrer'>{(((data || {}).companyDetails || {}).basics || {}).website}</WebsiteValue>
                </Website>
            </WorkBasicDetails>
            <Hr />
            <SectionHeading>What i did ?</SectionHeading>
            <ThingsWorkedOn dangerouslySetInnerHTML={{ __html: ((data || {}).companyDetails || {}).thingsWorkedOn }} />
            <Hr />
            { 
                (data || {}).showChallenges  && 
                <div>
                    <SectionHeading>Challenges</SectionHeading>
                    <Challenges dangerouslySetInnerHTML={{ __html: ((data || {}).companyDetails || {}).challenges }} />
                    <Hr /> 
                </div>
            }
            <WorkLinkContainer>
                <WorkLink to="/">All</WorkLink>
                {
                    WorkData.map((workData)=>(
                        <WorkLink to={{pathname: `/Work${workData.to}`}}
                        className={workData.shortname === data.shortname ? "isActive" : ""}
                        onClick={()=>saveToLocalStorage(workData)}
                        key={workData.fullName}
                        >{workData.fullName}</WorkLink>
                    ))
                }
            </WorkLinkContainer>
        </WorkDetailContainer>
    )
}

export default WorkDetails;
