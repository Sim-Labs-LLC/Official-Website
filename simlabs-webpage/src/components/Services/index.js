import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import Icon4 from '../../images/svg-4.svg';
import Icon5 from '../../images/svg-5.svg';
import Icon6 from '../../images/svg-6.svg';
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>What We do</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Industry Standard Smart Contracts</ServicesH2>
                <ServicesP>
                    We design and implement the most up-to-date standards for smart contracts.
                    as the NFT space evolves, so do our standards.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Website Design and Development</ServicesH2>
                <ServicesP>
                    Our developers possess the expertise to design and develop high quality
                    website to help your project maintain a standard within a digitally 
                    transforming market.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Web3 Implementation</ServicesH2>
                <ServicesP>
                    We build and design platforms for your project that give one-of-a-kind
                    experiences to your holders that goes beyond just a minting DApp.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Art Generation Engine</ServicesH2>
                <ServicesP>
                    We assist with art assembly and metadata structuring for your NFT project.
                    Our art engine automated a process that can take weeks and months to complete.
                    This leaves room for creators/artist to focus on creation of attributes/traits.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5}/>
                <ServicesH2>Discord Server Management</ServicesH2>
                <ServicesP>
                    We help design, manage and secure your discord server for your project,
                    along with hiring of moderators and server troubleshooting.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6}/>
                <ServicesH2>Project and Art Advising and Planning</ServicesH2>
                <ServicesP>
                    Our team of NFT experts with a proven tract record of expertise in the 
                    NFT space can provide the necessary tools to ensure the success of your
                    project.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services