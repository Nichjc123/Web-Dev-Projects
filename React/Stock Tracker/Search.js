import React from "react";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ setSearch, searchStocks }) => {
  const setVal = (e) => {
    setSearch(e.target.value);
  };

  const setValues = async () => {
    await searchStocks;
    searchStocks.map((stock, index) => {
      document.getElementById(`display_price_${index + 1}`).innerHTML =
        stock.Close;
      if (stock.Change[0] === "-") {
        document.getElementById(`display_change_${index + 1}`).style.color =
          "red";
        document.getElementById(
          `display_change_${index + 1}`
        ).innerHTML = `${stock.Change}(${stock.ChangePCT}%)`;
      } else {
        document.getElementById(`display_change_${index + 1}`).style.color =
          "green";
        document.getElementById(
          `display_change_${index + 1}`
        ).innerHTML = `${stock.Change}(${stock.ChangePCT}%)`;
      }
    });
  };
  setValues();

  return (
    <div className="flex-container">
      <div className="search">
        <BsSearch className="icon icon__search" />
        <input type="text" id="search" onChange={setVal} />
      </div>
      <div className="display">
        <div className="display_share display_1">
          <p id="display_name_1" className="display_stock_name">
            S&P 500
          </p>
          <p id="display_price_1" className="display_stock_price">
            {/* {searchStocks[0].Close} */}
          </p>
          <p id="display_change_1" className="display_stock_change"></p>
        </div>
        <div className="display_share display_2">
          <p id="display_name_2" className="display_stock_name">
            NASDAQ
          </p>
          <p id="display_price_2" className="display_stock_price">
            {/* {searchStocks[1].Close} */}
          </p>
          <p id="display_change_2" className="display_stock_change">
            +18.45 (+0.47%)
          </p>
        </div>
        <div className="display_share display_3">
          <p id="display_name_3" className="display_stock_name">
            DOW
          </p>
          <p id="display_price_3" className="display_stock_price">
            {/* {searchStocks[2].Close} */}
          </p>
          <p id="display_change_3" className="display_stock_change">
            -0.009(+0.1144%)
          </p>
        </div>
        <div className="display_share display_4">
          <p id="display_name_4" className="display_stock_name">
            GOLD
          </p>
          <p id="display_price_4" className="display_stock_price">
            {/* {searchStocks[3].Close} */}
          </p>
          <p id="display_change_4" className="display_stock_change">
            +27.70(+0.09%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
