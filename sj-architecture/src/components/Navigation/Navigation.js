import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Container } from '../../Global.styles';
import { Nav } from './Navigation.Styles';

export default function Navigation() {
    return (
        <Nav>
            <Container>
                <div>S&J</div>
                <div>
                    <FaBars size={32} />
                </div>
            </Container>
        </Nav>
    );
}
