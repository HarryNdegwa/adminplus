import React from "react";
import styled from "styled-components";

const ChartsWrapper = styled.div`
  > div .chart {
    height: 300px;
    background-color: #434f5b;
    border-radius: 10px;
  }
`;

function Charts(props) {
  return (
    <ChartsWrapper className="row my-3 gy-4">
      <div className="col-md-6 col-lg-4">
        <div className="chart p-2">
          <h3>Helloo</h3>
        </div>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="chart p-2">
          <h3>Helloo</h3>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="chart p-2">
          <h3>Helloo</h3>
        </div>
      </div>
    </ChartsWrapper>
  );
}

export default Charts;
