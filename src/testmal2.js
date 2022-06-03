// import { useState } from "react";

// // https://codesandbox.io/s/highcharts-react-demo-forked-jwgojn?file=/demo.jsx

// const testmal2 = () => {
//   const [selectedValues, setSelectedValues] = useState([]);

//   let apiData = [];

//   function formatData(data) {
//     let ohlc = [];
//     let volume = [];

//     data.values.reverse();

//     for (let inData of data.values) {
//       ohlc.push([
//         new Date(inData.datetime).getTime(), // the date
//         parseFloat(inData.open), // open
//         parseFloat(inData.high), // high
//         parseFloat(inData.low), // low
//         parseFloat(inData.close), // close
//       ]);

//       volume.push([
//         new Date(inData.datetime).getTime(), // the date
//         parseFloat(inData.volume), // the volume
//       ]);
//     }
//     apiData.return[(ohlc, volume)];
//   }

//   const series = () => {
//     let series = [];
//     let tickers = [];

//     tickers = JSON.parse(localStorage.getItem("Tickers")).tickers;
//     for (let ticker of tickers) {
//       let apiData = [];
//       let apiValue = [];

//       apiData.push(JSON.parse(localStorage.getItem(ticker.toString())));

//       apiValue = formatData(apiData);

//       series.push({
//         type: "ohlc",
//         name: apiData.meta.name,
//         data: apiValue[0],
//         dataGrouping: [
//           [
//             "week", // unit name
//             [1], // allowed multiples
//           ],
//           ["month", [1, 2, 3, 4, 6]],
//         ],
//       });

//       series.push({
//         type: "column",
//         linkedTo: ":previous",
//         data: apiValue[1],
//         yAxis: 1,
//         dataGrouping: [
//           [
//             "week", // unit name
//             [1], // allowed multiples
//           ],
//           ["month", [1, 2, 3, 4, 6]],
//         ],
//       });
//     }

//     return series;
//   };

//   const [options, setOptions] = useState();

//   const addNewSeries = () => {
//     let newSelectedValues = selectedValues;
//     let id = newSelectedValues.length;

//     newSelectedValues.push({ value: id, label: `Series ${id}` });

//     setSelectedValues(newSelectedValues);
//     console.log(selectedValues);

//     setOptions({
//       rangeSelector: {
//         labelStyle: {
//           display: "none",
//         },
//         selected: 0,
//         buttons: [
//           {
//             type: "year",
//             count: 1,
//             text: "1Y",
//             title: "View 1 year",
//           },
//           {
//             type: "year",
//             count: 5,
//             text: "5Y",
//             title: "View 5 year",
//           },
//           {
//             type: "max",
//             text: "MAX",
//             title: "View all",
//           },
//         ],
//       },

//       title: {
//         text: "Stocks",
//       },
//       legend: {
//         enabled: true,
//       },
//       credits: {
//         enabled: false,
//       },
//       yAxis: [
//         {
//           type: "datetime",
//           labels: {
//             align: "right",
//             x: -3,
//           },
//           title: {
//             text: "OHLC",
//           },
//           height: "60%",
//           lineWidth: 2,
//           resize: {
//             enabled: true,
//           },
//         },
//         {
//           labels: {
//             align: "right",
//             x: -3,
//           },
//           title: {
//             text: "Volume",
//           },
//           top: "65%",
//           height: "35%",
//           offset: 0,
//           lineWidth: 2,
//         },
//       ],
//       tooltip: {
//         split: true,
//       },
//       series: [],
//     });
//   };
// };
// export default testmal2;
