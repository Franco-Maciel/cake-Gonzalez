import styled from "styled-components";

export const Container = styled.div`
@media screen and (max-width: 960px){
  width: 100%;
  height: 70px;
  background-color: rgb(50, 189, 103); 
}
`;

export const Wrapper = styled.div`
 @media screen and (max-width: 960px){
  width: 100%;
  max-width: 960px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
 }
   
  
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  
`;

export const CartContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  
`;

export const Menu = styled.ul`
  @media screen and (max-width: 960px) {
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    background-color: rgb(85, 85, 85);
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    z-index: 300;
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li` 
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 85px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  }
`;



export const MenuItemLink = styled.div`
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    padding: 0.5rem 2.5rem;
    width: 100%;
    height: ${({ opent }) => (opent ? "70px" : "140px")};
    flex-direction: column;
    
    &:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;
    div {
      svg {
        fill: #23394d;
      }
    }
  }
    div {
      width: 30%;
      justify-content: left;
      row-gap: 0.1rem;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    flex-direction: column;
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
    
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;



export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: rgb(85, 85, 85);
      margin-right: 1rem;
    }
  }
`;