import React from 'react';
import { Container } from '../../Global.styles';
import { StyledSection } from './BottomCard.styles';

export default function BottomCard(props) {
    return (
        <StyledSection>
            <img src={props.img} alt="architectual" />
            <Container>
                <div>
                    <h2>{props.title}</h2>
                </div>
                <p>{props.desc1}</p>
                <p>{props.desc2}</p>
            </Container>
        </StyledSection>
    );
}
