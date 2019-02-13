import React from 'react';
import { Container } from '../../Global.styles';
import BottomImg2 from '../../img/home/home-mobile-outskirts-img.png';
import BottomImg3 from '../../img/home/home-mobile-the-blocks-img.png';
import BottomImg1 from '../../img/home/home-mobile-villas-img.png';
import BottomCard from '../BottomCard/BottomCard';
import { H2 } from './BottomSection.styles';

export default function BottomSection() {
    const bottomCardData = [
        {
            id: 1,
            img: `${BottomImg1}`,
            title: 'THE VILLAS',
            desc1:
                'The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.',
            desc2:
                'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
            btnText: 'View Designs'
        },
        {
            id: 2,
            img: `${BottomImg2}`,
            title: 'OUTSKIRTS',
            desc1:
                'The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.',
            desc2:
                'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
            btnText: 'View Designs'
        },
        {
            id: 3,
            img: `${BottomImg3}`,
            title: 'THE BLOCKS',
            desc1:
                'The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.',
            desc2:
                'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
            btnText: 'View Designs'
        }
    ];

    const data = bottomCardData.map(item => {
        return (
            <BottomCard
                key={item.id}
                img={item.img}
                title={item.title}
                desc1={item.desc1}
                desc2={item.desc2}
                btnText={item.btnText}
            />
        );
    });

    return (
        <div>
            <Container>
                <H2>Recent Projects</H2>
            </Container>
            {data}
        </div>
    );
}
