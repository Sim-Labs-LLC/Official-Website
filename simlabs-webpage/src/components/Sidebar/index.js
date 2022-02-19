import React from 'react'
import {FaTwitter, FaInstagram, FaDiscord} from 'react-icons/fa'
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
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SidebarMenu>
                    <SidebarLink to="projects" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to="charity" onClick={toggle}>
                        Charity
                    </SidebarLink>
                </SidebarMenu>
                <SideSocialIconWrap>
                    <SocialIconLink href="//https://twitter.com/CryptoPresis" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="//https://instagra.com/cryptopresisnft" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="//https://discord.com/cryptopresis" target="_blank" aria-label="Discord">
                        <FaDiscord />
                    </SocialIconLink>
                </SideSocialIconWrap>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
