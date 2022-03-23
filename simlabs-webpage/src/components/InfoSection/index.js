import React, { useState } from 'react';
import { ButtonA } from '../ButtonElements';
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper,
    InfoH1,
    Heading, 
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    ImgLogo
} from './infoElements';

const InfoSection = ({
    lightBg,
    id, 
    imgStart, 
    lightText, 
    darkText, 
    description, 
    buttonlabel, 
    img, 
    alt
}) => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoH1>Portfolio</InfoH1>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>
                                    <ImgLogo src={require("../../images/logo.png")}/>
                                </Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <ButtonA href='//cryptopresis.simlabs.io/' target="_blank"
                                    onMouseEnter={onHover} 
                                    onMouseLeave={onHover}
                                    primary='true'
                                    dark='true'
                                    >
                                        {buttonlabel}
                                    </ButtonA>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
