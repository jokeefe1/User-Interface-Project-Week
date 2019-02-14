import React from 'react';
import { Container } from '../../Global.styles';
import {
    H2,
    StyledImg1,
    StyledImg2,
    StyledImg3,
    StyledSection
} from './BottomSection.styles';

export default function BottomSection() {
    return (
        <div>
            <Container>
                <H2>Recent Projects</H2>
            </Container>
            <StyledSection>
                <Container>
                    <StyledImg1 />
                </Container>
                <Container>
                    <div>
                        <h2>THE VILLAS</h2>
                    </div>
                    <section>
                        <p>
                            The Villas bring to the table win-win survival
                            strategies to ensure proactive domination. At the
                            end of the day, going forward, a new normal that has
                            evolved from generation X is on the runway heading
                            towards a streamlined cloud solution.
                        </p>
                        <p>
                            Capitalize on low hanging fruit to identify a
                            ballpark value added activity to beta test. Override
                            the digital divide with additional clickthroughs
                            from DevOps. Nanotechnology immersion along the
                            information highway will close the loop on focusing
                            solely on the bottom line.
                        </p>
                    </section>
                </Container>
            </StyledSection>
            <StyledSection>
                <StyledImg2 />
                <Container>
                    <div>
                        <h2>OUTSKIRTS</h2>
                    </div>
                    <section>
                        <p>
                            The Outskirts are amazing to the table win-win
                            survival strategies to ensure proactive domination.
                            At the end of the day, going forward, a new normal
                            that has evolved from generation X is on the runway
                            heading towards a streamlined cloud solution.
                        </p>
                        <p>
                            Capitalize on low hanging fruit to identify a
                            ballpark value added activity to beta test. Override
                            the digital divide with additional clickthroughs
                            from DevOps. Nanotechnology immersion along the
                            information highway will close the loop on focusing
                            solely on the bottom line.
                        </p>
                    </section>
                </Container>
            </StyledSection>
            <StyledSection>
                <StyledImg3 />
                <Container>
                    <div>
                        <h2>THE BLOCKS</h2>
                    </div>
                    <section>
                        <p>
                            The Blocks are amazing to the table win-win survival
                            strategies to ensure proactive domination. At the
                            end of the day, going forward, a new normal that has
                            evolved from generation X is on the runway heading
                            towards a streamlined cloud solution.
                        </p>
                        <p>
                            Capitalize on low hanging fruit to identify a
                            ballpark value added activity to beta test. Override
                            the digital divide with additional clickthroughs
                            from DevOps. Nanotechnology immersion along the
                            information highway will close the loop on focusing
                            solely on the bottom line.
                        </p>
                    </section>
                </Container>
            </StyledSection>
        </div>
    );
}
