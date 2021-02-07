import React from "react";
import styled from "styled-components";
import { FaCartArrowDown } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";

const SummaryCardsWrapper = styled.div`
  .summary-card {
    border-radius: 10px;
  }

  > div .card1 {
    background: linear-gradient(135deg, #22c1b5, #3be897);
  }

  > div .card2 {
    background: linear-gradient(135deg, #a358fd, #e06ada);
  }
  > div .card3 {
    background: linear-gradient(135deg, #f58762, #ff9f3f);
  }
  > div .card4 {
    background-color: #319ff4;
    background: linear-gradient(135deg, #319ff4, #7dbfef);
  }
`;

function SummaryCards(props) {
  return (
    <SummaryCardsWrapper className="row gy-3">
      <div className="col-md-6 col-lg-3">
        <div className="p-4 p-lg-3 card1 summary-card">
          <h5>Orders Received</h5>
          <div className="d-flex justify-content-between my-4">
            <span>
              <FaCartArrowDown style={{ fontSize: "40px" }} />
            </span>
            <h5 style={{ fontSize: "35px", fontWeight: "bold" }}>358</h5>
          </div>
          <h6 className="my-2">18% higher than last month</h6>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="p-4 p-lg-3 card2 summary-card">
          <h5 className="fs-lg-6">Completed Orders</h5>
          <div className="d-flex justify-content-between my-4">
            <span>
              <GiShoppingBag style={{ fontSize: "40px" }} />
            </span>
            <h5 style={{ fontSize: "35px", fontWeight: "bold" }}>865</h5>
          </div>
          <h6 className="my-2">21% higher than last month</h6>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="p-4 p-lg-3 card3 summary-card">
          <h5>New Orders</h5>
          <div className="d-flex justify-content-between my-4">
            <span>
              <BsGraphUp style={{ fontSize: "40px" }} />
            </span>
            <h5 style={{ fontSize: "35px", fontWeight: "bold" }}>128</h5>
          </div>
          <h6 className="my-2">37% higher than last month</h6>
        </div>
      </div>

      <div className="col-md-6 col-lg-3">
        <div className="p-4 p-lg-3 card4 summary-card">
          <h5>Total Earnings</h5>
          <div className="d-flex justify-content-between my-4">
            <span>
              <BiDollar style={{ fontSize: "40px" }} />
            </span>
            <h5 style={{ fontSize: "35px", fontWeight: "bold" }}>$25698</h5>
          </div>
          <h6 className="my-2">10% higher than last month</h6>
        </div>
      </div>
    </SummaryCardsWrapper>
  );
}

export default SummaryCards;
