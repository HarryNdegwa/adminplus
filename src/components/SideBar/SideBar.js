import React from "react";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  background-color: #343d46;
  position: -webkit-sticky;
  position: sticky;
  height: calc(100vh - var(--header-height));
  top: var(--header-height);
  width: 21%;
`;

function SideBar(props) {
  return (
    <SideBarWrapper className="d-none d-lg-block float-start">
      <h3>Helloo</h3>
    </SideBarWrapper>
  );
}

export default SideBar;
