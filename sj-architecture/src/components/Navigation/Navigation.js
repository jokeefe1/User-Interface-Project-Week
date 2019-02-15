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
    return (
        <Nav>
            <Container>
                <div>S&J</div>
                <div>
                    {isOpen ? (
                        <IoIosClose size={25} onClick={toggleMenu} />
                    ) : (
                        <FaBars size={25} onClick={toggleMenu} />
                    )}
                </div>
            </Container>
            <StyledMenu style={isOpen ? {display: 'block'} : {display: 'none'}}>
                <div>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/service'>Services</StyledLink>
                    <StyledLink to='/contact'>Contact</StyledLink>
                </div>
            </StyledMenu>
        </Nav>
    );
}
