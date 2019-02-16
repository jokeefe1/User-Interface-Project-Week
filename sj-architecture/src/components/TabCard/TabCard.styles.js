import styled from 'styled-components';

export const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    div > h2 {
        font-weight: 900;
        font-size: 1.6rem;
    }
    ${({theme}) => theme.tablet`
        flex-direction: row;
        justify-content: center;
        align-items: center;
        div {
            width: 50%;
            padding-right: 2rem;
        }
    `}
`;

export const StyledDiv = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${props => props.img1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    ${({ theme }) => theme.tablet`
            background-image: url(${props => props.img2});
    `}
`;
