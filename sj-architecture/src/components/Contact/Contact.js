import React from 'react';
import { Container } from '../../Global.styles';
import img1 from '../../img/home/home-img-2.png';
import { BackgroundDiv, StyledForm } from './Contact.styles';

export default function Contact() {
    return (
        <BackgroundDiv img1={img1}>
            <Container>
                <StyledForm>
                    <h2>Contact Us</h2>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                    />
                    <input
                        type="phone"
                        name="phone"
                        placeholder="Phone Number"
                    />
                    <button>Submit</button>
                </StyledForm>
            </Container>
        </BackgroundDiv>
    );
}
