import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router';
import { WorkData } from '../../../WorkData';
import {WorkDetailContainer, WorkName, WorkImage, WorkBasicDetails,CompanyName,TimePeriod,Role, Website, ThingsWorkedOn, Challenges,SectionHeading, Hr, DetailsValue, DetailsHeading,WebsiteValue,WorkLinkContainer, WorkLink} from './WorkDetailElements';

const WorkDetails = () => {
    const location = useLocation();
    
    let { data }  = location.work;
    let { workData }  = location.work;


    data = data || workData;

    let [data1,setData1] = useState({});

    useEffect(() => {
        const storedData = localStorage.getItem("data1");
        setData1(JSON.parse(storedData));
    }, [])

    useEffect(() => {
        if(data !== undefined){
            localStorage.setItem("data1",JSON.stringify(data));
        }
    }, [data])
    

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
                    WorkData.map((workData)=>(
                        <WorkLink to={{ pathname : workData.to, work:{workData} }}
                        className={workData.shortname === data.shortname ? "isActive" : ""}
                        >{workData.shortname}</WorkLink>
                    ))
                }
            </WorkLinkContainer>
        </WorkDetailContainer>
    )
}

export default WorkDetails;
