import styled from 'styled-components';
import { Container } from '../../Global.styles';

export const StyledFooter = styled.div`
    background-color: ${({ theme }) => theme.darkGrey};
    color: ${({ theme }) => theme.white};
    padding-top: 3rem;
    line-height: 2;

    div {
        padding-bottom: 3rem;
    }

    h2 {
        font-size: 1.6rem;
        font-weight: 900;
    }

    input {
        width: 100%;
        height: 4rem;
        border-radius: 0.5rem;
        border: none;
        padding: 1rem;
        outline: none;
    }

    p {
        font-size: 1.3rem;
    }

    ${Container} > div:last-child {
        padding-bottom: 0;
    }

    ${Container} > div {
        ${({ theme }) => theme.tablet`
        display: flex;
        justify-content: space-around;

        span {
            text-align: center;
        }
    `}
    }
`;
