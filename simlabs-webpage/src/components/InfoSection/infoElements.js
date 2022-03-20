import styled from 'styled-components';

export const InfoContainer = styled.div `
    color: #fff;
    background: ${({LightBg}) => (LightBg ? '#fff' : '#000')};
    padding: 48px 24px;

    @media screen and (max-width: 768px) {
        padding: 48px 24px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    // padding: 0 24px;
    justify-content: center; 
`;

export const InfoRow = styled.div`
    display: grid;
    max-width: 1100px;
    width: 100%;
    grid-auto-columns: minmax(2fr, auto);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`;

export const TopLine = styled.p`
    color: #ffd700;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const InfoH1 = styled.h1`
    font-size: 2rem;
    text-align: center;
    color: #fff;
    margin-bottom: 64px;

    @media screen (max-width: 480px) {
        font-size: 2rem;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-wdith: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

`;

export const ImgWrap = styled.div`
    max-width: 555px;
    margin: auto;
    height: 100%;
`;

export const Img = styled.img`
    width: 300px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const ImgLogo = styled.img`
    width: 300px;
    align-items: center;
    transition: width 0.5s;
    transition: height 0.5s;

    @media screen and (max-width: 768px) {
        width: 250px;
    }
`;