import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: #343d46;
  height: 70px;
  width: 100%;
  position: webkit-sticky;
  position: sticky;
  top: 0px;
`;

function Header(props) {
  return <HeaderWrapper></HeaderWrapper>;
}

export default Header;
