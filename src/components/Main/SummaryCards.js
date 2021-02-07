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
        <div className="p-4 p-lg-3 card1 summary-card">
          <h5>Orders Received</h5>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="p-4 p-lg-3 card2 summary-card">
          <h5 className="fs-lg-6">Completed Orders</h5>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="p-4 p-lg-3 card3 summary-card">
          <h5>New Orders</h5>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="p-4 p-lg-3 card4 summary-card">
          <h5>Total Earnings</h5>
        </div>
      </div>
    </SummaryCardsWrapper>
  );
}

export default SummaryCards;
