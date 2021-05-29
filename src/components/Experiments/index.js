import React, { useState, useEffect} from 'react';
import { ExperimentQuotes } from '../../ExperimentQuotes';
import {ExperimentContainer, QuotesContainer, Quote ,  Author,ExperimentsContainer, DiffExperiments } from './ExperimentElements';

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

    return (
        <ExperimentContainer>
            <QuotesContainer>
                <Quote> {selectedQuote.quote} <br/>
                <Author> ~{selectedQuote.author} </Author></Quote>
            </QuotesContainer>
            <ExperimentsContainer>
                <DiffExperiments>{selectedQuote.quote}</DiffExperiments>
                <DiffExperiments>{selectedQuote.quote}</DiffExperiments>
                <DiffExperiments>{selectedQuote.quote}</DiffExperiments>
            </ExperimentsContainer>
        </ExperimentContainer>
    )
}

export default Experiments;
