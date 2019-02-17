import React from 'react';
import { StyledDiv, StyledSection, StyledWrapper } from './TabCard.styles';

export default function TabCard(props) {
    console.log(props.isActive)
    return (
        <StyledSection>
            <div>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
            <StyledDiv img1={props.img1} img2={props.img2} isActive={props.isActive}/>
        </StyledSection>
    );
}
