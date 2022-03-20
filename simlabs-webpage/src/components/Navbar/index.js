import React, {useState, useEffect} from 'react';
import {FaBars, FaTwitter} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavSocialIcon,
    SocialIconLink, 
    ImgLogo
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            <ImgLogo src={require("../../images/logo.svg")} alt="logo"/>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                    What We Do
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="pricing" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                    Pricing
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                    Portfolio
                                </NavLinks>
                            </NavItem>
                            <NavSocialIcon>
                                <SocialIconLink href="//twitter.com/simlabsio" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                {/* <SocialIconLink href="//https://instagram.com/cryptopresisnft" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="//https://discord.com/cryptopresis" target="_blank" aria-label="Discord">
                                    <FaDiscord />
                                </SocialIconLink> */}
                            </NavSocialIcon>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
