import React from "react";
import styled from "styled-components";

const TopHeaderWrapper = styled.nav`
  height: 70px;
  width: 100%;
  --bs-breadcrumb-divider: '>';"
`;

const BreadCrumbLinkWrapper = styled.a`
  color: #f0d361;
  text-decoration: none;

  &:hover {
    color: #f0d361;
    text-decoration: none;
  }
`;

function TopHeader(props) {
  return (
    <TopHeaderWrapper
      className="d-flex justify-content-end align-items-center"
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb m-0 p-0">
        <li className="breadcrumb-item">
          <BreadCrumbLinkWrapper href="#">Home</BreadCrumbLinkWrapper>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Dashboard
        </li>
      </ol>
    </TopHeaderWrapper>
  );
}

export default TopHeader;
