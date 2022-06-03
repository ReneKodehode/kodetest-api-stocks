//https://codesandbox.io/s/moxp4310l8?file=/src/index.js

let apiData = [];
let tickers = [];
let apiData2 = [];

if (localStorage.getItem("Tickers") !== null) {
  tickers = JSON.parse(localStorage.getItem("Tickers")).tickers;

  for (let ticker of tickers) {
    apiData2.push(JSON.parse(localStorage.getItem(ticker.toString())));
  }

  apiData = JSON.parse(localStorage.getItem("AAPL:NASDAQ"));
  apiData.values.reverse();
}

let ohlc = [];
let volume = [];
let groupingUnits = [
  [
    "week", // unit name
    [1], // allowed multiples
  ],
  ["month", [1, 2, 3, 4, 6]],
];

for (let inData of apiData.values) {
  ohlc.push([
    new Date(inData.datetime).getTime(), // the date
    parseFloat(inData.open), // open
    parseFloat(inData.high), // high
    parseFloat(inData.low), // low
    parseFloat(inData.close), // close
  ]);

  volume.push([
    new Date(inData.datetime).getTime(), // the date
    parseFloat(inData.volume), // the volume
  ]);
}
console.log(ohlc[0]);
console.log(volume);

const options = {
  rangeSelector: {
    labelStyle: {
      display: "none",
    },
    selected: 0,
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
    text: "Stocks",
  },
  legend: {
    enabled: true,
  },
  credits: {
    enabled: false,
  },
  yAxis: [
    {
      type: "datetime",
      labels: {
        align: "right",
        x: -3,
      },
      title: {
        text: "OHLC",
      },
      height: "60%",
      lineWidth: 2,
      resize: {
        enabled: true,
      },
    },
    {
      labels: {
        align: "right",
        x: -3,
      },
      title: {
        text: "Volume",
      },
      top: "65%",
      height: "35%",
      offset: 0,
      lineWidth: 2,
    },
  ],
  tooltip: {
    split: true,
  },
  series: [
    {
      type: "ohlc",
      name: "AAPL",
      data: ohlc,
      dataGrouping: {
        units: groupingUnits,
      },
      legendItemClick: {},
    },
    {
      type: "column",
      linkedTo: ":previous",
      data: volume,
      yAxis: 1,
      dataGrouping: {
        units: groupingUnits,
      },
    },
  ],
};

export default options;
