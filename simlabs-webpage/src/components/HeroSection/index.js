import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { ButtonR } from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to Sim Labs</HeroH1>
                <HeroP>
                    The Frontier of Innovation
                </HeroP>
                <HeroBtnWrapper>
                    <ButtonR 
                        to='/onboarding' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonR>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
