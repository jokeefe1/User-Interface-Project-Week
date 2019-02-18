import React from 'react';
import { Link } from 'react-router-dom';
import { StyledDiv, StyledButton } from './PageNotFound.styles';

const PageNotFound = props => (
    <StyledDiv>
        <div>
            <h1>Something good just happened...</h1>
            <h2>
                Seeing this page means the app is correcly routing and handling
                error pages.
            </h2>
            <p>
                ** please marvel at how the pages do not refresh.<br />This means the
                app is a fully functonal single page app (SPA)
            </p>
            <StyledButton>
                <Link to="/">Return Home</Link>
            </StyledButton>
        </div>
    </StyledDiv>
);

export default PageNotFound;
