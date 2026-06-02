import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const EmployeeChart = ({
  data,
}) => {

  return (
    <div className="card shadow">

      <div className="card-body">

        <h5 className="mb-3">
          Department Wise Count
        </h5>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="_id"
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default EmployeeChart;