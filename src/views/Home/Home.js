import React from "react";
import Header from "../../components/Header/Header";
import styled from "styled-components";

const MainWrapper = styled.main`
  background-color: #38424b;
  height: 100%;
`;

function Home(props) {
  return (
    <div style={{ height: "2000px" }}>
      <Header />
      <MainWrapper className="row"></MainWrapper>
    </div>
  );
}

export default Home;
