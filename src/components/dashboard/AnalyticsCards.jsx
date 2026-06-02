const AnalyticsCards = ({
  analytics,
}) => {

  return (
    <div className="row mt-4">

      <div className="col-md-4">

        <div className="card shadow">

          <div className="card-body text-center">

            <h5>
              Total Employees
            </h5>

            <h2>
              {
                analytics.totalEmployees
              }
            </h2>

          </div>

        </div>

      </div>

      <div className="col-md-4">

        <div className="card shadow">

          <div className="card-body text-center">

            <h5>
              Active Employees
            </h5>

            <h2>
              {
                analytics.activeEmployees
              }
            </h2>

          </div>

        </div>

      </div>

      <div className="col-md-4">

        <div className="card shadow">

          <div className="card-body text-center">

            <h5>
              Inactive Employees
            </h5>

            <h2>
              {
                analytics.inactiveEmployees
              }
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AnalyticsCards;