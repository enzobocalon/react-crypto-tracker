import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  background-color: #262629;

  h1{
    cursor: pointer;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  font-size: 18px;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  padding: 10px;
  border-radius: 8px;

  &:hover{
    background: #17171a;
  }

  @media (max-width: 768px){
    span {
      display: none;
    }
  }
`