import { React } from "react";
import FetchApi from "./FetchApi";
import { StyledHighCharts } from "./styledComponents";
// import options from "./testmal";
import options from "./testmal2";

function App() {
  FetchApi();

  return (
    <div>
      <StyledHighCharts options={options}></StyledHighCharts>
    </div>
  );
}

export default App;
