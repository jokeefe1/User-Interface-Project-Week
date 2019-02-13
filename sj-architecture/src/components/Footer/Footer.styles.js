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

    span {
        padding-top: 2rem;
    }
`;
