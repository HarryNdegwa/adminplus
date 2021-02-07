import React from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import SideBar from "../../components/SideBar/SideBar";
import TopHeader from "../../components/Main/TopHeader";
import SummaryCards from "../../components/Main/SummaryCards";
import Graphs from "../../components/Main/Graphs";
import Charts from "../../components/Main/Charts";

const MainWrapper = styled.main`
  background-color: #38424b;
  color: #fff;
  height: 100%;
`;

const MainRightSideBar = styled.div`
  width: 82%;
  background-color: #38424b;
  @media (max-width: 1199px) {
    width: 100%;
  }
`;

function Home(props) {
  return (
    <div style={{ height: "2500px" }}>
      <Header />
      <MainWrapper>
        <SideBar />
        <MainRightSideBar className="float-end">
          <div className="container">
            <TopHeader />
            <SummaryCards />
            <Graphs />
            <Charts />
          </div>
        </MainRightSideBar>
      </MainWrapper>
    </div>
  );
}

export default Home;
