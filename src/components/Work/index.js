import React from 'react';
import { WorkContainer, WorkGrid , WorkGridItem, WorkLogo,WorkName} from './WorkElements';

const Work = () => {
    return (
        <WorkContainer>
            <WorkGrid>
                <WorkGridItem id="girdItem1">
                    <WorkLogo/>
                    <WorkName>VA</WorkName>
                </WorkGridItem>
                <WorkGridItem id="girdItem2">
                    <WorkLogo/>
                    <WorkName>GC</WorkName>
                </WorkGridItem>

                <WorkGridItem id="girdItem3">
                    <WorkLogo/>
                    <WorkName>VT</WorkName>
                </WorkGridItem>
            </WorkGrid>
        </WorkContainer>
    )
}

export default Work;
