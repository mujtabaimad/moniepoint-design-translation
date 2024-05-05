import { FC } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./overview-chart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const labels = [
  "Jan 17",
  "Jan 20",
  "Jan 22",
  "Jan 25",
  "Feb 28",
  "Feb 1",
  "Feb 3",
  "Feb 7",
  "Feb 10",
  "Feb 15",
];

const data: ChartData<"line", number[], string> = {
  labels,
  datasets: [
    {
      fill: true,
      data: [1300, 1450, 1324.99, 1200, 1500, 1300, 1450, 1324.99, 1200, 1500],
      borderColor: "#6149a3",

      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#dad4f7");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        return gradient;
      },
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      spanGaps: 5,
    },
  ],
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const OverviewChart: FC<{onDeactivate:()=>void}> = ({onDeactivate}) => {
  return (
    <div className="overview-chart">
      <Line
      height={200}
      width={300}
        options={{
            maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
                // bodyAlign: "center",
                yAlign:"bottom",
                backgroundColor:"white",
                cornerRadius:0,
                titleColor: "black",
                bodyColor: "black",
                caretSize:0,
                position: "average"
            }
          },
          scales: {
            x: {
              border: {
                display: false,
              },
              grid: {
                display: false,
              },
            },
            y: {
              border: {
                display: false,
              },
              grid: {
                display: false,
              },
              display: false,
              beginAtZero: true,
            },
          },
        }}
        data={data}
      />
      <button className="deactivate-button" onClick={onDeactivate}><FontAwesomeIcon icon={faChevronLeft}/></button>
    </div>
  );
};

export default OverviewChart;
