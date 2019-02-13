import styled from 'styled-components';

export const StyledFooter = styled.div`
    background-color: ${({ theme }) => theme.darkGrey};
    color: ${({ theme }) => theme.white};
    padding: 2rem;
    line-height: 2;

    h2 {
        font-size: 2rem;
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

    div:last-child {
        padding: 2rem 0 0.5rem;
    }
`;
