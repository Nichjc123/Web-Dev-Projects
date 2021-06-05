import React from "react";

const StockCard = ({
  FullName,
  SYMBOL,
  Close,
  Change,
  ChangePCT,
  Volume,
  Beta,
  MarketCap,
  EPS,
  isPinned,
}) => {
  isPinned = !isPinned;
  const pinHandler = () => {
    isPinned = !isPinned;
  };
  return (
    <>
      <div className="card__container">
        <div className="card__name">
          <p id="full-text" className="norm_text">
            {FullName}
          </p>
          <p className="big-text">
            {SYMBOL}{" "}
            <strong>
              {Close.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </strong>
          </p>
        </div>
        <div className="card__change">
          <p
            style={Change[0] === "-" ? { color: "red" } : { color: "green" }}
            className="big-text"
          >
            {Change} ({ChangePCT}%)
          </p>
        </div>
        <div className="card__info">
          <div id="first-info" className="info-group">
            <p className="norm_text">
              Volume{" "}
              <strong>
                {Volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </strong>
            </p>
            <p className="norm_text">
              Beta(5Y) <strong>{Beta}</strong>
            </p>
          </div>
          <div id="second-info" className="info-group">
            <p className="norm_text">
              Market Cap{" "}
              <strong>
                {MarketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </strong>
            </p>
            <p className="norm_text">
              EPS <strong>{EPS}</strong>
            </p>
          </div>
        </div>
        <div className="card__button">
          <button className="news">
            <a href={`https://ca.finance.yahoo.com/quote/${SYMBOL}/news?p=`}>
              More Info
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default StockCard;
