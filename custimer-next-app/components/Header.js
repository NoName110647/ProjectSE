"use client";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #222;
  padding: 20px 0;
  
`;
const Logo = styled(Link)`
    color:#fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 30px;

`

const NavLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`

export default function Header() {
  return (
    <StyledHeader>
        <center>
          <Wrapper>
            <Logo href={'/'}>Ecommerce</Logo>
            <nav>
              <StyledNav>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/product">All product</NavLink>
              <NavLink href="/categories">Categories</NavLink>
              <NavLink href="/account">Account</NavLink>
              <NavLink href="/cart">Cart(0)</NavLink>
              </StyledNav>
            </nav>
          </Wrapper>
        </center>
    </StyledHeader>
  );
}
