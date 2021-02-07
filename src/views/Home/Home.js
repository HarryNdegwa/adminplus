import React from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import SideBar from "../../components/SideBar/SideBar";
import TopHeader from "../../components/Main/TopHeader";
import SummaryCards from "../../components/Main/SummaryCards";
import Graphs from "../../components/Main/Graphs";
import Charts from "../../components/Main/Charts";

const HomeWrapper = styled.div`
  min-height: 100vh;
  background-color: #38424b;
`;

const MainWrapper = styled.main`
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
    <HomeWrapper>
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
    </HomeWrapper>
  );
}

export default Home;
