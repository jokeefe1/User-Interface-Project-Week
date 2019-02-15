import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 100%;
    text-align: center;
    padding: 1rem;
    margin-bottom: 2rem;
    background-color: ${({ theme }) => theme.white};
    font-size: 1.5rem;
    border: 1px solid ${({ theme }) => theme.black};
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.black};

    &:hover {
        background-color: ${({theme}) => theme.lightGrey};
        color: ${({theme}) => theme.white};
        border: 1px solid ${({theme}) => theme.lightGrey};
    }

    ${({theme}) => theme.tablet`
        max-width: 15rem;
    `}
`;
