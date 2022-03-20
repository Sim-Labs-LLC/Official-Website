import React from 'react';
import {FaTwitter} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    ImgLogo
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>HOME</FooterLinkTitle>
                                <FooterLink to="/about">About</FooterLink>
                                <FooterLink to="/services">What We Do</FooterLink>
                                <FooterLink to="/pricing">Pricing</FooterLink>
                                <FooterLink to="/projects">Portfolio</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>GET IN TOUCH</FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/"></FooterLink>
                                <FooterLink to="/"></FooterLink>
                                <FooterLink to="/"></FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>LEGAL</FooterLinkTitle>
                                <FooterLink to="/">Disclaimer</FooterLink>
                                <FooterLink to="/">Privacy</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                                <FooterLink to="/"></FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>SOCIALS</FooterLinkTitle>
                            <SocialIcons>
                                <SocialIconLink href="//twitter.com/simlabsio" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                            </SocialIcons>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <ImgLogo src={require("../../images/logo.svg")} />Simlabs
                        </SocialLogo>
                        <WebsiteRights>
                            © Copyright {new Date().getUTCFullYear()} • Sim Labs SEZC All Right Reserved.
                        </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
