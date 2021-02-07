import React from "react";
import styled from "styled-components";

const GraphsWrapper = styled.div`
  > div .graph {
    height: 500px;
    background-color: #434f5b;
    border-radius: 15px;
  }
`;

function Graphs(props) {
  return (
    <GraphsWrapper className="row my-3 gy-4">
      <div className="col-lg-6">
        <div className="graph p-3">
          <h3>Helloo</h3>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="graph p-3">
          <h3>Helloo</h3>
        </div>
      </div>
    </GraphsWrapper>
  );
}

export default Graphs;
