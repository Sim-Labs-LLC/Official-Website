import React from 'react';
import {FaTwitter, FaInstagram, FaDiscord} from 'react-icons/fa'
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
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Projects </FooterLinkTitle>
                                <FooterLink to="/projects">CryptoPresis</FooterLink>
                                <FooterLink to="/"></FooterLink>
                                <FooterLink to="/"></FooterLink>
                                <FooterLink to="/"></FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/">The Team</FooterLink>
                                <FooterLink to="/">Partnerships</FooterLink>
                                <FooterLink to="/">Featured</FooterLink>
                                <FooterLink to="/"></FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Charity</FooterLinkTitle>
                                <FooterLink to="/">Bitcoin Beach</FooterLink>
                                <FooterLink to="/">Crypto Education</FooterLink>
                                <FooterLink to="/">Local Artists</FooterLink>
                                <FooterLink to="/">Community</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Get in Touch</FooterLinkTitle>
                                <FooterLink to="/">Contact Us</FooterLink>
                                <FooterLink to="/"></FooterLink>
                                <FooterLink to="/"></FooterLink>
                                <FooterLink to="/"></FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Simlabs</SocialLogo>
                        <WebsiteRights>Made with <span role="img" aria-label="Heart">💖</span>  and a whole lot of
                        <span role="img" aria-label="Heart"> 🍷</span>. Simlabs © {new Date().getUTCFullYear()} All Right Reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//https://twitter.com/CryptoPresis" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//https://instagra.com/cryptopresisnft" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//https://discord.com/cryptopresis" target="_blank" aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
