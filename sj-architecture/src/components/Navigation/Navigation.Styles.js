import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../Global.styles';

export const StyledLink = styled(Link)`
    padding: 3rem;
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => theme.greyBlue};
    }
`;

export const Nav = styled.div`
    position: sticky;
    top: 0;
    height: 5rem;
    z-index: 99;
    background-color: ${({ theme }) => theme.mediumGrey};
    color: ${({ theme }) => theme.white};
    ${Container} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div {
        font-size: 2.5rem;
    }

    div > div {
        padding: 0;
        cursor: pointer;

        & > a {
            padding: 0;
        }
    }

    ${({ theme }) => theme.tablet`
     ${Container} {
            max-width: 900px;
            margin: auto;
        }
    `}
`;

export const StyledMenu = styled.div`
    display: none;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.lightGrey};
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        ${StyledLink} {
            padding: 3rem;
        }
    }
`;
