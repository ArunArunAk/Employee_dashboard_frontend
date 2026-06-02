import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StatusPieChart = ({
  active,
  inactive,
}) => {

  const data = [
    {
      name: "Active",
      value: active,
    },
    {
      name: "Inactive",
      value: inactive,
    },
  ];

  return (
    <div className="card shadow">

      <div className="card-body">

        <h5 className="mb-3">
          Employee Status
        </h5>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            />

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default StatusPieChart;