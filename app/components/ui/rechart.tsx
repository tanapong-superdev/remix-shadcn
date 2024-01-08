import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  LabelList,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./rechart.css";
export default function Rechart() {
  const data = [
    {
      name: "Jan",
      total: 4000,
    },
    {
      name: "Feb",
      total: 3000,
    },
    {
      name: "Mar",
      total: 2000,
    },
    {
      name: "Apr",
      total: 2780,
    },
    {
      name: "May",
      total: 1890,
    },
    {
      name: "Jun",
      total: 2390,
    },
    {
      name: "Jul",
      total: 3490,
    },
    {
      name: "Aug",
      total: 4000,
    },
    {
      name: "Sep",
      total: 3000,
    },
    {
      name: "Oct",
      total: 2000,
    },
    {
      name: "Nov",
      total: 2780,
    },
    {
      name: "Dec",
      total: 1890,
    },
  ];

  return (
    <div className="rechart">
      <div className="rechart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={150}
            height={40}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="total" tickFormatter={(value) => `$${value}`} />
            <Bar radius={[10, 10, 0, 0]} dataKey="total" fill="#000000"></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
