import React from 'react';
import { WorkContainer, WorkGrid , WorkGridItem, WorkLogo,WorkName} from './WorkElements';

const Work = () => {

    return (
        <WorkContainer>
            <WorkGrid>
                <WorkGridItem id="girdItem1" to={{ pathname : "/va", aboutProps:{name:'VA'} }} >
                    <WorkLogo/>
                    <WorkName>VA</WorkName>
                </WorkGridItem>
                <WorkGridItem id="girdItem2" to="/gc">
                    <WorkLogo/>
                    <WorkName>GC</WorkName>
                </WorkGridItem>

                <WorkGridItem id="girdItem3" to="/vt">
                    <WorkLogo/>
                    <WorkName>VT</WorkName>
                </WorkGridItem>
            </WorkGrid>
        </WorkContainer>
    )
}

export default Work;
