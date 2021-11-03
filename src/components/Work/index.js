import React from 'react';
import { WorkContainer, WorkGrid, WorkGridItem, WorkName, WorkFullName, WorkTimeSpan, WorkGistContainer } from './WorkElements';
import { WorkData } from '../../WorkData';

const Work = () => {

    function saveToLocalStorage(data) {
        localStorage.setItem("workData", JSON.stringify(data));
    }

    return (
        <WorkContainer>
            <WorkGrid>
                {
                    WorkData.map((data, index) => (
                        <WorkGridItem id={`girdItem${index + 1}`} to={{ pathname: `/work${data.to}` }} onClick={() => saveToLocalStorage(data)} key={index}>
                            <WorkName id={`girdItemName${index + 1}`}>{data.shortname}</WorkName>
                            <WorkGistContainer id={`gridItemContainer${index + 1}`}>
                                <WorkFullName>{data.fullName}</WorkFullName>
                                <WorkTimeSpan>{data.workingyear}</WorkTimeSpan>
                            </WorkGistContainer>
                        </WorkGridItem>
                    ))
                }
            </WorkGrid>
        </WorkContainer>
    )
}

export default Work;
