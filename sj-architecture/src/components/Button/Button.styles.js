import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 100%;
    text-align: center;
    padding: 1rem;
    background-color: ${({ theme }) => theme.white};
    font-size: 1.5rem;
    border: 1px solid ${({ theme }) => theme.black};
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.black};
`;
