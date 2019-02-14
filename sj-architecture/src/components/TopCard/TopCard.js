import React from 'react';
import { Container } from '../../Global.styles';
import Button from '../Button/Button';
import { StyledSection } from './TopCard.styles';

export default function TopCard(props) {
    return (
        <Container>
            <StyledSection>
                <section>
                    <div>
                        <img src={props.imgLg} alt="architecture" />
                    </div>
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.desc}</p>
                        <Button btnText={props.btnText} />
                    </div>
                </section>
            </StyledSection>
        </Container>
    );
}
