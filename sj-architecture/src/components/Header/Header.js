import React from 'react';
import { Container } from '../../Global.styles';
import { StyledDiv } from './Header.styles';

export default function Header(props) {
    console.log(props);
    return (
        <StyledDiv img1={props.img1} img2={props.img2}>
            <Container>
                <div>
                    <h2>Integrity,</h2>
                    <h2>Excellence,</h2>
                    <h2>Progress.</h2>
                </div>
            </Container>
        </StyledDiv>
    );
}
