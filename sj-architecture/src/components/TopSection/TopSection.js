import React from 'react';
import TopImg1 from '../../img/home/home-img-1.png';
import TopImg2 from '../../img/home/home-img-2.png';
import TopCard from '../TopCard/TopCard';

export default function TopSection() {
    const topCardData = [
        {
            id: 1,
            img: `${TopImg1}`,
            title: 'Smith & Jones Architects',
            desc:
                'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
            btnText: 'Learn More'
        },
        {
            id: 2,
            img: `${TopImg2}`,
            title: 'Futuristic Designs',
            desc:
                'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
            btnText: 'View Designs'
        }
    ];

    const data = topCardData.map(item => {
        return (
            <TopCard
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                btnText={item.btnText}
            />
        );
    });

    return <div>{data}</div>;
}
