import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
   box-sizing: border-box;
   font-size: 62.5%;
}

body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
}

img {
    width: 100%;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;

export const theme = {
           white: '#fff',
           lightGrey: '#D8D8D8',
           mediumGrey: '#98a3ae',
           darkGrey: '#828282',
           black: '#222',
           geryBlue: '#5E9FB9',
           fontFamily: 'Roboto, sans-serif',
           headerImg: '/src/img/home/home-mobile-jumbotron.png',
       };

// ### GENERAL STYLES
//   - Background: #FFFFFF
//     - Color: #222222
//       - Font Family: Roboto, Arial, sans - serif

// ## Page Specific

// ### Home Page
//   - Recent Projects Gray Square: #D8D8D8
//     - Button borders: #222222

// ### Services Page
//   - Tab selected background: #5E9FB9
//     - Tab Hover background: #222222
//       - Tab Hover color: #FFF;

// ## Footer
// Background: #828282

// ### General Text
//   - Font Weight: Regular
//     - Font Size: 16px
//       - Line Height: 24px

// ### Jumbotron Headers
//   - Font Weight: Bold
//     - Font Size: 64px
//       - Line Height: 75px
//         - Color: #FFFFFF

// ### Sub Headers
//   - Font Weight: Bold
//     - Font Size: 28px
//       - Color: #222222

// ### Footer Headings
//   - Font Weight: Regular
//     - Font Size: 20px
//       - Line Height: 24px
//         - Color: #FFFFFF

// ### Footer Text
//   - Font Weight: Regular
//     - Font Size: 14px
//       - Line Height: 26px
//         - Color: #FFFFFF

// ### Navigation Logo
//   - Font Weight: Bold
//     - Font Size: 24px
//       - Color: #FFFFFF

// ### Navigation Text(Expanded)
//   - Font Weight: Bold
//     - Font Size: 48px
//       - Line Height: 85px
//         - Color: #FFFFFF
//           - Hover Color: #222222

export const Container = styled.div`
    width: 95%;
    margin: auto;
`;
