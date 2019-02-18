import React, { useState } from 'react';
import { Container } from '../../Global.styles';
import img2 from '../../img/services/services-jumbotron.png';
import img1 from '../../img/services/services-mobile-jumbotron.png';
import imgConst2 from '../../img/services/services-tab-construction-img.png';
import imgDesign2 from '../../img/services/services-tab-design-build-img.png';
import imgConst1 from '../../img/services/services-tab-mobile-construction-img.png';
import imgDesign1 from '../../img/services/services-tab-mobile-design-build-img.png';
import imgPreConst1 from '../../img/services/services-tab-mobile-pre-construction-img.png';
import imgSust1 from '../../img/services/services-tab-mobile-sustainability-img.png';
import imgPreConst2 from '../../img/services/services-tab-pre-construction-img.png';
import imgSust2 from '../../img/services/services-tab-sustainability-img.png';
import Button from '../Button/Button';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import TabCard from '../TabCard/TabCard';
import { StyledDiv } from './Services.styles';

export default function Services() {
    const tabData = [
        {
            id: 1,
            title: 'Pre-Construction',
            desc:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In fugiat voluptatem modi voluptatibus laudantium, rem dolores, debitis corporis maiores et earum quas nostrum provident autem fuga deserunt rerum itaque maxime neque? Eveniet aliquid accusantium dolorem, laudantium natus adipisci placeat eius praesentium doloribus ipsam alias minus sunt accusamus deleniti iure dolorum nobis. Officiis qui, quasi placeat quos nulla facere blanditiis maxime repellat soluta quidem eaque error similique et consectetur unde nihil repudiandae magni ipsa sint laudantium reiciendis ab id voluptatem? Exercitationem.',
            img1: imgPreConst1,
            img2: imgPreConst2
        },
        {
            id: 2,
            title: 'Construction',
            desc:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In fugiat voluptatem modi voluptatibus laudantium, rem dolores, debitis corporis maiores et earum quas nostrum provident autem fuga deserunt rerum itaque maxime neque? Eveniet aliquid accusantium dolorem, laudantium natus adipisci placeat eius praesentium doloribus ipsam alias minus sunt accusamus deleniti iure dolorum nobis. Officiis qui, quasi placeat quos nulla facere blanditiis maxime repellat soluta quidem eaque error similique et consectetur unde nihil repudiandae magni ipsa sint laudantium reiciendis ab id voluptatem? Exercitationem.',
            img1: imgConst1,
            img2: imgConst2
        },
        {
            id: 3,
            title: 'Design Build',
            desc:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In fugiat voluptatem modi voluptatibus laudantium, rem dolores, debitis corporis maiores et earum quas nostrum provident autem fuga deserunt rerum itaque maxime neque? Eveniet aliquid accusantium dolorem, laudantium natus adipisci placeat eius praesentium doloribus ipsam alias minus sunt accusamus deleniti iure dolorum nobis. Officiis qui, quasi placeat quos nulla facere blanditiis maxime repellat soluta quidem eaque error similique et consectetur unde nihil repudiandae magni ipsa sint laudantium reiciendis ab id voluptatem? Exercitationem.',
            img1: imgDesign1,
            img2: imgDesign2
        },
        {
            id: 4,
            title: 'Sustainability',
            desc:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In fugiat voluptatem modi voluptatibus laudantium, rem dolores, debitis corporis maiores et earum quas nostrum provident autem fuga deserunt rerum itaque maxime neque? Eveniet aliquid accusantium dolorem, laudantium natus adipisci placeat eius praesentium doloribus ipsam alias minus sunt accusamus deleniti iure dolorum nobis. Officiis qui, quasi placeat quos nulla facere blanditiis maxime repellat soluta quidem eaque error similique et consectetur unde nihil repudiandae magni ipsa sint laudantium reiciendis ab id voluptatem? Exercitationem.',
            img1: imgSust1,
            img2: imgSust2
        }
    ];

    const tabCard = tabData.map(item => {
        const { id, title, desc, img1, img2 } = item;
        return (
            <TabCard
                key={id}
                title={title}
                desc={desc}
                img1={img1}
                img2={img2}
            />
        );
    });

    const [active, setActive] = useState(0);

    const toggleCard = e => {
        e.persist();
        const { textContent } = e.target;
        textContent === 'Pre-Construction' && setActive(0);
        textContent === 'Construction' && setActive(1);
        textContent === 'Design Build' && setActive(2);
        textContent === 'Sustainability' && setActive(3);
    };

    return (
        <div>
            <Navigation />
            <Header img1={img1} img2={img2} />
            <StyledDiv>
                <Container>
                    <section>
                        <div>
                            <p>
                                Services include: completely synergize resource
                                taxing relationships via premier niche markets.
                                Professionally cultivate one-to-one customer
                                service with robust ideas. Dynamically innovate
                                resource-leveling customer service for state of
                                the art customer service.
                            </p>
                        </div>
                        <div>
                            <Button
                                btnText="Pre-Construction"
                                onClick={toggleCard}
                            />
                            <Button
                                btnText="Construction"
                                onClick={toggleCard}
                            />
                            <Button
                                btnText="Design Build"
                                onClick={toggleCard}
                            />
                            <Button
                                btnText="Sustainability"
                                onClick={toggleCard}
                            />
                        </div>
                    </section>
                    <section>{tabCard[`${active}`] || tabCard[0]}</section>
                </Container>
            </StyledDiv>
            <Footer />
        </div>
    );
}
