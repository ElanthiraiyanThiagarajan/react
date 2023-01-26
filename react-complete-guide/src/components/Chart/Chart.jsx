import ChartBar from "./ChartBar";
import "./Chart.css";
import Card from "../UI/Card";

const Chart = (props) => {
  const dataPointValues = props.dataPointsList.map(
    (dataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <Card className="chart">
      {props.dataPointsList.length > 0 &&
        props.dataPointsList.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            maxValue={totalMaximum}
            value={dataPoint.value}
            label={dataPoint.label}
          ></ChartBar>
        ))}
    </Card>
  );
};

export default Chart;
