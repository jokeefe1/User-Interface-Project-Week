import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Container } from '../../Global.styles';
import { Nav, StyledLink } from './Navigation.Styles';
import { StyledMenu } from './Navigation.Styles'
import { IoIosClose } from 'react-icons/io'

export default function Navigation() {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(prevIsOpen => !prevIsOpen);
    };

    const toggleHome = () => {
        setOpen(false)
    }

    return (
        <Nav>
            <Container>
                <div>
                    <StyledLink to='/' onClick={toggleHome}>S&J</StyledLink>
                </div>
                <div>
                    {isOpen ? (
                        <IoIosClose size={35} onClick={toggleMenu} />
                    ) : (
                        <FaBars size={35} onClick={toggleMenu} />
                    )}
                </div>
            </Container>
            <StyledMenu
                style={isOpen ? { display: 'block' } : { display: 'none' }}
            >
                <div>
                    <StyledLink to="/" onClick={toggleMenu}>
                        Home
                    </StyledLink>
                    <StyledLink to="/services" onClick={toggleMenu}>
                        Services
                    </StyledLink>
                    <StyledLink to="/contact" onClick={toggleMenu}>
                        Contact
                    </StyledLink>
                </div>
            </StyledMenu>
        </Nav>
    );
}
