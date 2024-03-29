import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    opacity: 100%;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding 12px 0 12px 0;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display; flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    padding-bottom: 48px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #ffd700;
    }

    &:hover {
        color: #ffd700;
        transition: 0.3s ease-out;
    }
`;

export const NavSocialIconLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #ffd700;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #ffd700;
    }
`

export const NavSocialIcon = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    padding-left: 48px;
    padding-top: 6px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        color: #ffd700;
        transition: 0.3s ease-out;
    }
`

export const ImgLogo = styled.img`
    width: 60px;
    align-items: center;
    transition: width 0.5s;
    transition: height 0.5s;

    @media screen and (max-width: 768px) {
        width: 48px;
    }
`