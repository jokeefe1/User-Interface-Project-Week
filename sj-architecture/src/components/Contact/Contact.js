import React, { useState } from 'react';
import { Container } from '../../Global.styles';
import img1 from '../../img/home/home-img-2.png';
import Navigation from '../Navigation/Navigation';
import { BackgroundDiv, StyledDiv } from './Contact.styles';

export default function Contact() {

    const initialFormState = {
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
    };

    const [form, setForm] = useState(initialFormState);

    const [user, setUser] = useState(null);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setUser(form);
        console.log(form);
        setForm(initialFormState)
    };

    return (
        <>
            <Navigation />
            <BackgroundDiv img1={img1}>
                <Container>
                    <form onSubmit={handleSubmit}>
                        <StyledDiv>
                            <h2>Contact Us</h2>
                            <input
                                type="text"
                                name="firstname"
                                placeholder="First Name"
                                onChange={handleChange}
                                value={form.firstname}
                            />
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                onChange={handleChange}
                                value={form.lastname}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                onChange={handleChange}
                                value={form.email}
                            />
                            <input
                                type="phone"
                                name="phone"
                                placeholder="Phone Number"
                                onChange={handleChange}
                                value={form.phone}
                            />
                            <button type="submit">Submit</button>
                        </StyledDiv>
                    </form>
                </Container>
            </BackgroundDiv>
        </>
    );
}
