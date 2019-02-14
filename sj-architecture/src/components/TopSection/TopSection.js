import React from 'react';
import { Container } from '../../Global.styles';
import MobileImg1 from '../../img/home/home-mobile-img-1.png';
import MobileImg2 from '../../img/home/home-mobile-img-2.png';
import Button from '../Button/Button';
import { StyledSection, Img1 } from './TopSection.styles';

export default function TopSection() {
    // const topCardData = [
    //     {
    //         id: 1,
    //         imgSm: `${MobileImg1}`,
    //         imgLg: `${DesktopImg1}`,
    //         title: 'Smith & Jones Architects',
    //         desc:
    //             'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
    //         btnText: 'Learn More'
    //     },
    //     {
    //         id: 2,
    //         imgSm: `${MobileImg2}`,
    //         imgLg: `${DesktopImg2}`,
    //         title: 'Futuristic Designs',
    //         desc:
    //             'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
    //         btnText: 'View Designs'
    //     }
    // ];

    return (
        <StyledSection>
            <Container>
                <section>
                    <div>
                        <Img1/>
                    </div>
                    <div>
                        <h2>Smith & Jones Architects</h2>
                        <p>
                            Et sed autem causae appareat, tempor abhorreant te
                            mei, facer facilisis sit ea. Eu timeam vidisse
                            consectetuer sed. Duo etiam laboramus dissentiet in,
                            nec no errem
                        </p>
                        <Button btnText="Learn More" />
                    </div>
                </section>
                <section>
                    <div>
                        <img src={MobileImg2} alt="architecture" />
                    </div>
                    <div>
                        <h2>Futuristic Designs</h2>
                        <p>
                            Et sed autem causae appareat, tempor abhorreant te
                            mei, facer facilisis sit ea. Eu timeam vidisse
                            consectetuer sed. Duo etiam laboramus dissentiet in,
                            nec no errem
                        </p>
                        <Button btnText="View Designs" />
                    </div>
                </section>
            </Container>
        </StyledSection>
    );
}
