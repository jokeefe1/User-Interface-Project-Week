import styled from 'styled-components'

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    padding: 1rem;
    background-color: ${({theme}) => theme.mediumGrey};
    color: ${({theme}) => theme.white};

    div {
        font-size: 3rem;
    }
`