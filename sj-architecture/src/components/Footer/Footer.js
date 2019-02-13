import React from 'react';
import { StyledFooter } from './Footer.styles';

export default function Footer() {
    return (
        <StyledFooter>
            <div>
                <h2>Interested in starting a project?</h2>
                <h2>Let’s talk:</h2>
                <input type="text" name="email" placeholder="Enter email" />
                <p>We'll never share your email with anyone else.</p>
            </div>
            <div>
                <h2>New York</h2>
                <p>123 Lane</p>
                <p>Suite</p>
                <p>Albany, NY 12345</p>
                <phone>202 555 0144</phone>
            </div>
            <div>
                <h2>Florida</h2>
                <p>Ocean Drive</p>
                <p>Suite 201</p>
                <p>Orlando, FL 22345</p>
                <phone>502 555 0144</phone>
            </div>
            <div>
                <h2>California</h2>
                <address>
                    <p>Mountain Street</p>
                    <p>Suite 105 </p>
                    <p>San Diego, CA 22345</p>
                </address>
                <phone>702 555 0144</phone>
            </div>
            <span>Copyright © 2018 Smith and Jones</span>
        </StyledFooter>
    );
}
