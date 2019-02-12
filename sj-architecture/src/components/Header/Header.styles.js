import styled from 'styled-components';
import HeaderImg from '../../img/home/home-mobile-jumbotron.png';

export const StyledDiv = styled.div`
    background-image: url(${HeaderImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: ${({ theme }) => theme.white};
    font-size: 2.5rem;
    padding: 8rem 0 3rem;

    div > h2 {
        font-weight: 900;
        font-size: 3rem;
        line-height: 1.2;
    }
`;
