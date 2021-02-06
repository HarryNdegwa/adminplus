import React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  background-color: #343d46;
  height: calc(100vh - 70px);
  position: -webkit-sticky;
  position: sticky;
  top: 70px;
  left: 0;
`;

function SideBar(props) {
  return (
    <SideBarWrapper className="col-md-2 d-none d-lg-block"></SideBarWrapper>
  );
}

export default SideBar;
