import React from 'react';
import { Container } from '../../Global.styles';
import { StyledDiv } from './Header.styles';

export default function Header() {
    return (
        <StyledDiv>
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
