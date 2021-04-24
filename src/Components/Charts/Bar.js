// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.umber";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 3 - Creating the JSON object to store the chart configurations

function ExapleChart({ data }) {
  const chartConfigs = {
    type: "bar3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
            caption: "Most Forks",
            yAxisName:"Forks",
            xAxisName: "Repos",
            xAxisNameFontSize: "16px",
            yAxisNameFontSize:"16px",
        //Set the chart subcaption
        //subCaption: "In MMbbl = One Million barrels",
        //Set the x-axis name
        //xAxisName: "Country",
        //Set the y-axis name
        //yAxisName: "Reserves (MMbbl)",
        //numberSuffix: "K",
        //Set the theme for your chart
        theme: "umber"
      },
      // Chart Data
      data,
    }
  };
    return (<ReactFC {...chartConfigs} />);
}

export default ExapleChart
