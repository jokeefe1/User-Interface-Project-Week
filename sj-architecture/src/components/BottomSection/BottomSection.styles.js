import styled from 'styled-components';
import { Container } from '../../Global.styles';
import Img2 from '../../img/home/home-outskirts-img.png';
import Img3 from '../../img/home/home-the-blocks-img.png';
import Img1 from '../../img/home/home-villas-img.png';

export const H2 = styled.h2`
    font-weight: bold;
    font-size: 2.2rem;
    color: #222222;
    padding-bottom: 1rem;
`;

export const StyledImg1 = styled.div`
    /* width: 100%; */
    height: 20rem;
    background-image: url(${Img1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const StyledImg2 = styled.div`
    width: 100%;
    height: 20rem;
    background-image: url(${Img2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const StyledImg3 = styled.div`
    width: 100%;
    height: 20rem;
    background-image: url(${Img3});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const StyledSection = styled.div`
    padding-bottom: 1rem;
    ${({ theme }) => theme.tablet`
        &:nth-child(even) > div:nth-child(2) > div {
            margin-left: 71%;
        }
    `}

    ${Container}:first-child {
        width: 100%;
        ${({ theme }) => theme.tablet`
            width: 95%;
        `}
    }

    ${Container}:last-child > div {
        text-align: center;
        padding: 2rem;
        background-color: ${({ theme }) => theme.lightGrey};
        margin-top: -20px;
        ${({ theme }) => theme.tablet`
            max-width: 25rem;
            margin-left: 10px;
        `}
    }
    h2 {
        font-weight: regular;
        font-size: 2.2rem;
        color: #222222;
        padding-bottom: 1rem;
        letter-spacing: 5px;
    }

    section {
        margin: 4rem;
        p {
            font-size: 2rem;
            padding-bottom: 1rem;
            line-height: 1.4;
            margin: 1rem;

            ${({ theme }) => theme.tablet`
            width: 70%;
            margin: auto;
        `}
        }
    }
    ${Container} {
        max-width: 900px;
        margin: auto;
    }
`;
