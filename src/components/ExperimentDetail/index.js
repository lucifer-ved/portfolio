import React, { useState, useEffect} from 'react';
import {ExperimentDetailContainer,Title,Description,ImageContainer } from './ExperimentDetailElements';

const ExperimentDetail = () => {

    const [expData,setExpData] = useState({});

    useEffect(() => {
        const storedData = localStorage.getItem("experimentData");
        setExpData(JSON.parse(storedData));
    }, [])

    return (
        <ExperimentDetailContainer>
            <Title>
                {((expData || {}).details || {}).title}
            </Title>
            <Description>
                {((expData || {}).details || {}).description}
            </Description>
            <ImageContainer>
                {/* {
                    expData.details.images.map((val)=>{
                        <Image>
                            { val }
                        </Image>
                    })
                } */}
            </ImageContainer>
            
        </ExperimentDetailContainer>
    )
}

export default ExperimentDetail;
