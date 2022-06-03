import { useState } from "react";

// https://codesandbox.io/s/highcharts-react-demo-forked-jwgojn?file=/demo.jsx
const [selectedValues, setSelectedValues] = useState([]);

let apiData = [];

function formatData(data) {
  let ohlc = [];
  let volume = [];
  let apiData = {};
  data.values.reverse();

  for (let inData of data.values) {
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
  apiData.
  return apiData{[ohlc],[volume]};
}

const series = (selectedValues) => {
  let series = [];
  let tickers = [];

  tickers = JSON.parse(localStorage.getItem("Tickers")).tickers;
  for (let ticker of tickers) {
    let apiData = [];

    apiData.push(JSON.parse(localStorage.getItem(ticker.toString())));

    apiData = formatData(apiData).;

    series.push({
      type: "line",
      name: selectedValues[i].label,
      data: apiData.ohlc,
    });
    series.push({
      type: "line",
      name: selectedValues[i].label,
      data: i,
    });
  }

  return series;
};

const [options, setOptions] = useState({
  chart: {
    height: selectedValues.length * 100 + 100,
  },
  credits: {
    enabled: false,
  },

  legend: {
    enabled: true,
  },
  title: {
    text: "Series",
  },
  rangeSelector: {
    selected: 0,
    buttons: [],
    inputEnabled: false,
  },
  tooltip: {
    split: true,
  },
  series: series(selectedValues),
  yAxis: yAxis(selectedValues),
});

const addNewSeries = () => {
  let newSelectedValues = selectedValues;
  let id = newSelectedValues.length;

  newSelectedValues.push({ value: id, label: `Series ${id}` });

  setSelectedValues(newSelectedValues);
  console.log(selectedValues);

  setOptions({
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
        dataGrouping: [
          [
            "week", // unit name
            [1], // allowed multiples
          ],
          ["month", [1, 2, 3, 4, 6]],
        ],
      },
      {
        type: "column",
        linkedTo: ":previous",
        data: volume,
        yAxis: 1,
        dataGrouping: [
          [
            "week", // unit name
            [1], // allowed multiples
          ],
          ["month", [1, 2, 3, 4, 6]],
        ],
      },
    ],
  });
};

export default options;
