import React from "react";
import styled from "styled-components";

const SummaryCardsWrapper = styled.div`
  .summary-card {
    border-radius: 10px;
  }

  > div .card1 {
    background: linear-gradient(135deg, #22c1b5, #3be897);
    height: 200px;
  }

  > div .card2 {
    background: linear-gradient(135deg, #a358fd, #e06ada);
    height: 200px;
  }
  > div .card3 {
    background: linear-gradient(135deg, #f58762, #ff9f3f);
    height: 200px;
  }
  > div .card4 {
    background-color: #319ff4;
    background: linear-gradient(135deg, #319ff4, #7dbfef);
    height: 200px;
  }
`;

function SummaryCards(props) {
  return (
    <SummaryCardsWrapper className="row gy-3">
      <div className="col-md-6 col-lg-3">
        <div className="card1 summary-card">Heloo</div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="card2 summary-card">Heloo</div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="card3 summary-card">Heloo</div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="card4 summary-card">Heloo</div>
      </div>
    </SummaryCardsWrapper>
  );
}

export default SummaryCards;
