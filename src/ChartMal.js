const options = {
  rangeSelector: {
    selected: 1,
    buttons: [
      {
        type: "year",
        count: 1,
        text: "1Y",
        title: "View 1 year",
      },
      {
        type: "year",
        count: 5,
        text: "5Y",
        title: "View 5 year",
      },
      {
        type: "max",
        text: "MAX",
        title: "View all",
      },
    ],
  },
  title: {
    text: "AAPL Stock Price",
  },

  xAxis: {
    type: "datetime",
  },
  series: [
    {
      type: "ohlc",
      name: "AAPL Stock Price",
      keys: [1027468800000, 0.25589, 0.27179, 0.25446, 0.27144],
      data: [1027468800000, 0.25589, 0.27179, 0.25446, 0.27143],
    },
  ],
};

export default options;
