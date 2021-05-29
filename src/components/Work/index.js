import React from 'react';
import { WorkContainer, WorkGrid , WorkGridItem, WorkLogo,WorkName,WorkFullName,WorkTimeSpan,WorkGistContainer} from './WorkElements';

const Work = () => {

    return (
        <WorkContainer>
            <WorkGrid>
                <WorkGridItem id="girdItem1" to={{ pathname : "/va", aboutProps:{name:'VA'} }} >
                    <WorkLogo/>
                    <WorkName id="girdItemName1">VA</WorkName>
                    <WorkGistContainer id="gridItemContainer1">
                        <WorkFullName>Visible Alpha</WorkFullName>
                        <WorkTimeSpan>(2017 - 2021)</WorkTimeSpan>
                    </WorkGistContainer>
                </WorkGridItem>
                <WorkGridItem id="girdItem2" to="/gc">
                    <WorkLogo/>
                    <WorkName id="girdItemName2">GC</WorkName>
                    <WorkGistContainer id="gridItemContainer2">
                        <WorkFullName>Godcast</WorkFullName>
                        <WorkTimeSpan>(2016 - 2017)</WorkTimeSpan>
                    </WorkGistContainer>
                </WorkGridItem>
                <WorkGridItem id="girdItem3" to="/vt">
                    <WorkLogo/>
                    <WorkName id="girdItemName3">VT</WorkName>
                    <WorkGistContainer id="gridItemContainer3">
                        <WorkFullName>Vistaar</WorkFullName>
                        <WorkTimeSpan>(2015 - 2016)</WorkTimeSpan>
                    </WorkGistContainer>
                </WorkGridItem>
            </WorkGrid>
        </WorkContainer>
    )
}

export default Work;
