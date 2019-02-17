import styled from 'styled-components';
import { Container } from '../../Global.styles';
import { StyledButton } from '../Button/Button.styles';

export const StyledDiv = styled.div`
    section:first-child > div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 2rem;
        ${StyledButton} {
            &:hover {
                background-color: cadetblue;
            }
        }
    }
    p {
        padding: 4rem 0;
        font-size: 1.2rem;
    }
    ${({ theme }) => theme.tablet`
           section:first-child > div:last-child {
             flex-direction: row;
         }
        ${Container} {
        max-width: 900px;
        margin: auto;
        }
    `}
`;



