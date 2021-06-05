import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import StockCard from "./StockCard";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//TODO: ADD Link to news in navbar and react bootstrap for number and email and pin to top
function App() {
  //State values
  const [search, setSearch] = useState("");
  const [stocks, setStocks] = useState([]);
  const [morestocks, setMoreStocks] = useState([]);

  //Set Search stocks
  const searchStocks = stocks.filter((stock) => stock.Value === "SEARCH");
  const allStocks = morestocks.concat(stocks);
  const filteredStocks = allStocks.filter((stock) =>
    stock.FullName.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("https://sheetsu.com/apis/v1.0su/d97895f7dc61")
      .then((res) => res.data)
      .then((data) => setStocks(data.filter((stock) => stock.Value != "")))
      .catch((error) => console.log(error));

    axios
      .get("https://sheetsu.com/apis/v1.0bu/65ec756eadea")
      .then((res) => res.data)
      .then((data) =>
        setMoreStocks(data.filter((stock) => stock.Value === "ALL"))
      )
      .catch((error) => console.log(error));
  }, []);
  //1. Establish a list with the names of all the shares i wanna call
  //2. Loop over that list and for each one make a fetch reequest where i get the object for that share and put it in the state value like setStocks(...stocks, data) kind of thing
  return (
    <>
      <Navbar />
      <Search searchStocks={searchStocks} setSearch={setSearch} />
      {filteredStocks.map((stocks) => (
        <StockCard
          key={stocks.ID}
          FullName={stocks.FullName}
          SYMBOL={stocks.SYMBOL}
          Close={stocks.Close}
          Change={stocks.Change}
          ChangePCT={stocks.ChangePCT}
          Volume={stocks.Volume}
          Beta={stocks.Beta}
          MarketCap={stocks.MarketCap}
          EPS={stocks.EPS}
        />
      ))}
    </>
  );
}

export default App;
