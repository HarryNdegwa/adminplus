import React from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import SideBar from "../../components/SideBar/SideBar";
import TopHeader from "../../components/Main/TopHeader";

const MainWrapper = styled.main`
  background-color: #38424b;
  color: #fff;
  height: 100%;
`;

const MainRightSideBar = styled.div`
  width: 79%;
  //   padding: 20px 0;  Replace this with the breadcrumb header
`;

function Home(props) {
  return (
    <div style={{ height: "2000px" }}>
      <Header />
      <MainWrapper>
        <SideBar />
        <MainRightSideBar className="float-end">
          <div className="container">
            <TopHeader />
          </div>
        </MainRightSideBar>
      </MainWrapper>
    </div>
  );
}

export default Home;
