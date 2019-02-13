import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
    line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* Custom Styles */
html {
   box-sizing: border-box;
   font-size: 62.5%;
}

body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
    font-weight: regular;
    font-size: 1rem;
    line-height: 2;
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

// Global Container
export const Container = styled.div`
    width: 95%;
    margin: auto;
`;

// Media Queries
const sizes = {
    desktop: 2000,
    tabletLarge: 998,
    tablet: 700,
    phone: 500
};
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label]}px) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});


// Theme Object
export const theme = {
           white: '#fff',
           lightGrey: '#D8D8D8',
           mediumGrey: '#98a3ae',
           darkGrey: '#828282',
           black: '#222',
           geryBlue: '#5E9FB9',
           fontFamily: 'Roboto, sans-serif',
           ...media
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


