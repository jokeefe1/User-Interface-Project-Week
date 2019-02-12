import styled from 'styled-components'

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    padding: 1rem;
    background-color: ${({theme}) => theme.mediumGrey};
    color: ${({theme}) => theme.white};

    div {
        font-size: 2.1rem;
    }
`