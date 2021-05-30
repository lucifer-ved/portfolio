import React, { useState, useEffect} from 'react';
import { ExperimentQuotes } from '../../ExperimentQuotes';
import {ExperimentContainer, QuotesContainer, Quote ,  Author,ExperimentsContainer, DiffExperiments, Title } from './ExperimentElements';
import {ExperimentData} from '../../ExperimentData';

const Experiments = () => {
    const [selectedQuote, setQuote] = useState(ExperimentQuotes[Math.floor(Math.random()*ExperimentQuotes.length)]);

    useEffect(() => {
        const interval = setInterval(()=>{
            setQuote(ExperimentQuotes[Math.floor(Math.random()*ExperimentQuotes.length)]);
        },7000);
        return () => {
            clearInterval(interval);
        }
    }, [])


    function saveToLocalStorage(data){
        localStorage.setItem("experimentData",JSON.stringify(data));
    }

    return (
        <ExperimentContainer>
            <QuotesContainer>
                <Quote> {selectedQuote.quote} <br/>
                <Author> ~{selectedQuote.author} </Author></Quote>
            </QuotesContainer>
            <ExperimentsContainer>
                {
                    ExperimentData.map((data)=>(
                        <DiffExperiments onClick={()=>saveToLocalStorage(data)} to={{pathname: `/Experiments/${data.id}`}}
                        >
                            <Title>
                                {data.title}
                            </Title>
                        </DiffExperiments>
                    ))
                }
            </ExperimentsContainer>
        </ExperimentContainer>
    )
}

export default Experiments;
