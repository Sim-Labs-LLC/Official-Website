import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SidebarMenu,
    SidebarLink,
    SideSocialIconWrap,
    SocialIconLink
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        What We Do
                    </SidebarLink>
                    <SidebarLink to="Pricing" onClick={toggle}>
                        Pricing
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>
                        Portfolio
                    </SidebarLink>
                </SidebarMenu>
                <SideSocialIconWrap>
                    <SocialIconLink href="//twitter.com/simlabsio" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    {/* <SocialIconLink href="//https://instagra.com/cryptopresisnft" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="//https://discord.com/cryptopresis" target="_blank" aria-label="Discord">
                        <FaDiscord />
                    </SocialIconLink> */}
                </SideSocialIconWrap>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
