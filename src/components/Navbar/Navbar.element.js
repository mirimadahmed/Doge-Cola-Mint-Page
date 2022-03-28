import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: black;
  height: 10vh;
  
`;

export const NavContainer = styled.div`
  height: 10vh;
  z-index: 1;
  width: 100vw;
  display: flex;
  flex-wrap: no-wrap;
  ovwerflow: auto;
  flex-direction: row; 
  align-items: center;
  justify-content: start;
`;


export const NavLogo = styled.img`
  height: 5vh;
  cursor: pointer;
  `;

export const NavItem1 = styled.div`
  height: 15vh;
  display: flex;
  width: 50vw; 
  justify-content: start;
  align-items: center;
  padding-left: 2vw;
  `;


export const MobileIcon = styled.div`
display:none;
  @media (max-width: 960px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,100%);
    font-size:1.5rem;
    cursor: pointer;
    color: #fff;
    z-index:1;
  }
`;

export const NavMenu = styled.ul`
  height: 15vh;
  display: flex;
  width: 70vw; 
  list-style: none;
  justify-content: start;
  align-items: center;
 
  @media screen and (max-width: 960px) {
    display:flex;
    flex-direction:column;
    content: '';
    width:100%;
    max-width: 100%;
    height:100vh;
    position:absolute;
    top:0px;
    left: ${({ click }) => (click ? '0%' : '-140%')};
    opacity:1;
    transition: all 0.5s ease;
    background-color: #101522;
    
  }`;



export const NavItems = styled.li`
    height:80px;
    list-style: none;


    @media screen and (max-width: 960px) {
      height:0%;
      &:hover{
        border:none;
      }
    }
    `;

export const NavLink = styled(LinkS)`
    text-decoration:none;
    color:#fff;
    align-items:center;
    height:100%;
    padding:0 1rem 0 0;
    display:flex;
    cursor:pointer;
    font-family: 'Open Sans', sans-serif;
    font-size:1.5rem;
    &:hover{
      color:#ffffff;
    }
    &:active{
      border-bottom: 3px solid #01bf71;
    }
    
    @media screen and (max-width: 960px) {
      text-align:center;
      width:100%;
      display:table;
    
      &:hover{
        color:#4b59f7;
        transition: all 0.5s ease;
        }
    }
    `;



export const StyledButton = styled.button`
    padding: 8px 22px;
    border-radius: 10px;
    white-space: nowrap;
    height:40px;
    outline: none;
    border: none;
    color: var(--primary-text);
    margin-top:1.1vw;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    transition: 0.5s all ease-in-out;
    font-size:1.2rem;
    background:transparent;
    color: #ffffff;
    border: 1px solid #ffffff;
    :active {
      box-shadow: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
    }

    @media screen and (max-width: 960px) {
      display:none;
    }

  `;

export const StyledButtonMobile = styled.button`
   background-color: var(--primary);
    padding: 10px 22px;
    border-radius: 10px;
    white-space: nowrap;
    outline: none;
    border: none;
    font-weight: bolder;
    color: var(--primary-text);
    margin-top:1.1vw;
 
    cursor: pointer;
    display:none;
    transition: 0.5s all ease-in-out;
    :active {
      box-shadow: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
    }

    @media screen and (max-width: 960px) {
      text-align:center;
      display:flex;
      justify-content:center;
    }

  `;

export const NavIcon = styled.img`
    display:flex;
    align-items:center;
    justify-content:center;
    vertical-align:middle;
    margin:10px auto;
    width: ${({ wid }) => wid ? wid + "%" : '38px'};

    @media screen and (max-width: 960px) {
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
    }
  `;


