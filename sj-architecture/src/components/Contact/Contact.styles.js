import styled from 'styled-components';

export const BackgroundDiv = styled.div`
           display: flex;
           justify-content: center;
           align-items: center;
           background-image: url(${props => props.img1});
           background-repeat: no-repeat;
           background-size: cover;
           background-position: center;
           height: 100vh;
       `;

export const StyledForm = styled.div`
           display: flex;
           flex-direction: column;
           background-color: ${({ theme }) => theme.white};
           border-radius: 0.5rem;
           width: 50%;
           margin: auto;
           & > h2 {
               font-size: 3rem;
               padding: 1rem;
               text-align: center;
           }
           & > input {
               border-radius: 0.5rem;
               padding: 1rem;
               margin: 1rem;
               border: 2px solid ${({ theme }) => theme.lightGrey};
           }
           & > button {
               border-radius: 0.5rem;
               padding: 1rem;
               margin: 1rem;
               border: 1px solid ${({ theme }) => theme.lightGrey};
               background-color: ${({ theme }) => theme.lightGrey};
               color: ${({ theme }) => theme.black};
               &:hover {
                   border: 1px solid ${({ theme }) => theme.greyBlue};
                   background-color: ${({ theme }) => theme.greyBlue};
                   color: ${({ theme }) => theme.white};
               }
           }
       `;
