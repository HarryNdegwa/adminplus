import React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  background-color: red;
  height: calc(100vh - 70px);
  position: -webkit-sticky;
  position: sticky;
  top: 70px;
  left: 0;
`;

function SideBar(props) {
  return <SideBarWrapper className="col-md-2"></SideBarWrapper>;
}

export default SideBar;
