import styled from 'styled-components';
import { Container } from '../../Global.styles';

export const StyledDiv = styled.div`
    background-image: url(${props => props.img1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: ${({ theme }) => theme.white};
    font-size: 2.5rem;
    padding: 8rem 0 3rem;

    div > h2 {
        visibility: ${props => (props.primary ? 'block' : 'hidden')};
        font-weight: 900;
        font-size: 3rem;
        line-height: 1.2;
    }

    ${({ theme }) => theme.tablet`
     ${Container} {
            max-width: 900px;
            margin: auto;
        }
            background-image: url(${props => props.img2});
    `}
`;
