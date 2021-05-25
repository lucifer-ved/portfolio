import React from 'react';
import { WorkData } from '../../../WorkData';
import {WorkDetailContainer, WorkName, WorkImage, WorkBasicDetails,CompanyName,TimePeriod,Role, Website, ThingsWorkedOn, Challenges,SectionHeading, Hr, DetailsValue, DetailsHeading,WebsiteValue,WorkLinkContainer, WorkLink} from './WorkDetailElements';

const WorkDetails = ({props}) => {
    const data = WorkData[0];
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
                    <DetailsValue>{data.companyDetails.basics.name}</DetailsValue>
                </CompanyName>
                <TimePeriod>
                    <DetailsHeading>Time</DetailsHeading>
                    <DetailsValue>{data.companyDetails.basics.timePeriod}</DetailsValue>
                </TimePeriod>
                <Role>
                    <DetailsHeading>My Role</DetailsHeading>
                    <DetailsValue>{data.companyDetails.basics.role}</DetailsValue>
                </Role>
                <Website>
                    <DetailsHeading>Website</DetailsHeading>
                    <WebsiteValue>{data.companyDetails.basics.website}</WebsiteValue>
                </Website>
            </WorkBasicDetails>
            <Hr />
            <SectionHeading>Things I Worked On</SectionHeading>
            <ThingsWorkedOn>
                {data.companyDetails.thingsWorkedOn.workedon}
            </ThingsWorkedOn>
            <Hr />
            <SectionHeading>Challenges</SectionHeading>
            <Challenges>
                {data.companyDetails.challenges.challenges}
            </Challenges> 
            <Hr />
            <WorkLinkContainer>
                <WorkLink to="/intro">All</WorkLink>
                {
                    WorkData.map((work)=>(
                        <WorkLink to={work.to}>{work.shortname}</WorkLink>
                    ))
                }
            </WorkLinkContainer>
        </WorkDetailContainer>
    )
}

export default WorkDetails;
