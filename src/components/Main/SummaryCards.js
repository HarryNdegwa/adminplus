import React from "react";
import styled from "styled-components";

const SummaryCardsWrapper = styled.div`
  height: 300px;
`;

function SummaryCards(props) {
  return (
    <SummaryCardsWrapper className="row">
      <div className="col-xs-6 col-lg-3">Helloo</div>

      <div className="col-xs-6 col-lg-3">Helloo</div>

      <div className="col-xs-6 col-lg-3">Helloo</div>

      <div className="col-xs-6 col-lg-3">Helloo</div>
    </SummaryCardsWrapper>
  );
}

export default SummaryCards;
