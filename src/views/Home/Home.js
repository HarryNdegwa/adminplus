import React from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import SideBar from "../../components/SideBar/SideBar";

const MainWrapper = styled.main`
  background-color: #38424b;
  height: 100%;
`;

function Home(props) {
  return (
    <div style={{ height: "2000px" }}>
      <Header />
      <MainWrapper className="container-fluid">
        <div className="row">
          <SideBar />
        </div>
      </MainWrapper>
    </div>
  );
}

export default Home;
