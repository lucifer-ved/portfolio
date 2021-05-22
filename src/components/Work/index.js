import React from 'react';
import { WorkContainer, WorkGrid , WorkGridItem, WorkLogo,WorkName} from './WorkElements';

const Work = () => {
    return (
        <WorkContainer>
            {/* <WorkGridItem id="girdItem1">
                <WorkLogo/>
                <WorkName>Visible Alpha</WorkName>
            </WorkGridItem> */}
            <WorkGrid>
            <WorkGridItem id="girdItem4">
                <WorkLogo/>
                <WorkName>Visible Alpha</WorkName>
            </WorkGridItem>
                <WorkGridItem id="girdItem2">
                    <WorkLogo/>
                    <WorkName>Godcast</WorkName>
                </WorkGridItem>

                <WorkGridItem id="girdItem3">
                    <WorkLogo/>
                    <WorkName>Vistaar</WorkName>
                </WorkGridItem>
            </WorkGrid>
        </WorkContainer>
    )
}

export default Work;
