import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

export const highCharts = ({ options, className }) => {
  return (
    <HighchartsReact
      containerProps={{ className: className }}
      highcharts={Highcharts}
      options={options}
      constructorType={"stockChart"}
    />
  );
};
