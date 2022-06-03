import { useState, useEffect, useCallback } from "react";

const FetchApi = () => {
  const [Tickers, TickersSet] = useState();
  const [StockArray, StockArraySet] = useState();

  const fetchAllTickerApi = useCallback(async () => {
    let res = await fetch(`https://stockdata.test.quantfolio.dev/ticker`);
    res = await res.json();
    console.log(res.tickers);
    TickersSet(res.tickers);
    localStorage.setItem("Tickers", JSON.stringify(res));
    fetchValueByTickerApi(res.tickers);
  });

  const fetchValueByTickerApi = useCallback(async (tickers) => {
    let newArray = [];

    for (const ticker of tickers) {
      let res = await fetch(
        `https://stockdata.test.quantfolio.dev/ticker/` + (await ticker)
      );
      res = await res.json();
      newArray.push(res);
      localStorage.setItem(ticker, JSON.stringify(res));
    }
    StockArraySet(await newArray);
  });

  useEffect(() => {
    fetchAllTickerApi();
  }, []);
};
export default FetchApi;
