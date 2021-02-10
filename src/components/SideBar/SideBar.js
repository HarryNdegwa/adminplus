import React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  background-color: #343d46;
  position: fixed;
  height: calc(100vh - var(--header-height));
  top: var(--header-height);
  width: 18.5%;
`;

function SideBar(props) {
  return (
    <SideBarWrapper className="d-none d-xl-block float-start">
      <h3>Helloo World Dudes</h3>
    </SideBarWrapper>
  );
}

export default SideBar;
