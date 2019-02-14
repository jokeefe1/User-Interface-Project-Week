import styled from 'styled-components';

export const StyledSection = styled.div`
    margin: 2rem 0;
    padding-bottom: 1rem;

    section {
        div > img {
            padding-bottom: 1rem;
        }

        div {
            h2 {
                font-weight: bold;
                font-size: 2.2rem;
                color: #222222;
                padding-bottom: 1rem;
            }
            p {
                font-size: 1.5rem;
                padding-bottom: 1rem;
                line-height: 1.4;
            }
        }
    }

    ${({ theme }) => theme.tablet`
      
    `}
`;
