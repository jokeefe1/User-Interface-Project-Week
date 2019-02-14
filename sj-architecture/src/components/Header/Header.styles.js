import styled from 'styled-components';
import { Container } from '../../Global.styles';
import HeaderImg2 from '../../img/home/home-jumbotron.png';
import HeaderImg1 from '../../img/home/home-mobile-jumbotron.png';

export const StyledDiv = styled.div`
    background-image: url(${HeaderImg1});
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

    ${({ theme }) => theme.tablet`
     ${Container} {
            max-width: 900px;
            margin: auto;
        }
            background-image: url(${HeaderImg2});
    `}
`;
