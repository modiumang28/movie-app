import React, { Component } from "react";
import styled from "styled-components";
import navStyle from "./navbar.module.css";

const Title = styled.div`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 600;
  font-family: Times New Roman, Times, serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover {
    color: black;
  }
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartCount = styled.span`
  background: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  color: black;
  top: -5px;
  font-size: 12px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const CartImg = styled.img`
  height: 44px;
  margin-right: 20px;
`;

function Navbar(props) {
  const { cartCount } = props;
  return (
    <nav className={navStyle.nav}>
      <Title>Movie-App</Title>
      <CartContainer>
        <CartImg
          alt="cart-icon"
          src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
        />
        <CartCount color="yellow" show={true}>
          {cartCount}
        </CartCount>
      </CartContainer>
    </nav>
  );
}

export default Navbar;
