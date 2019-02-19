import styled from 'styled-components';
import { Container } from '../../Global.styles';
import DesktopImg1 from '../../img/home/home-img-1.png';

export const StyledSection = styled.div`
    padding: 5rem;

    section {
        padding: 3rem;
        div {
            h2 {
                font-weight: bold;
                font-size: 2.2rem;
                color: #222222;
                padding-bottom: 1rem;
            }
            p {
                font-size: 2rem;
                padding-bottom: 3rem;
                line-height: 1.4;
            }
        }
    }

    ${({ theme }) => theme.tablet`
        ${Container} {
            max-width: 900px;
            margin: auto;
        }
        section {
            display: flex;
            align-items: center;
            &:first-child {
                flex-direction: row-reverse;
                & > div:first-child {
                    margin-left: 2rem;
                }
            }
            &:last-child {
                & > div:first-child {
                    margin-right: 2rem;
                }
            }
            & > div {
                width: 50%;
                padding: 2rem 0;

                & > img {
                    height: 25rem;
                }
            }
        }
    `}
`;

export const Img1 = styled.img.attrs({
    src: `${DesktopImg1}`
})``;
