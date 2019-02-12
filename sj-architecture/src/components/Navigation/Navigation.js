import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav } from './Navigation.Styles';

export default function Navigation() {
    return (
        <Nav>
            <div>S&J</div>
            <div>
                <FaBars size={32}/>
            </div>
        </Nav>
    );
}
