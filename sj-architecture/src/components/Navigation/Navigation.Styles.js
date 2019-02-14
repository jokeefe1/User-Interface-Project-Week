import styled from 'styled-components';
import { Container } from '../../Global.styles';

export const Nav = styled.div`
           height: 5rem;
           padding: 1rem;
           background-color: ${({ theme }) => theme.mediumGrey};
           color: ${({ theme }) => theme.white};
           ${Container} {
               display: flex;
               justify-content: space-between;
               align-items: center;
           }

           div {
               font-size: 3rem;
           }

           ${({ theme }) => theme.tablet`
     ${Container} {
            max-width: 900px;
            margin: auto;
        }
    `}
       `;
