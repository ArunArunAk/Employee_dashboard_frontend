const EmployeeTable = ({
  employees,
  onEdit,
  onDelete,
}) => {

  return (
    <table className="table table-bordered table-striped">

      <thead>

        <tr>

          <th>Name</th>

          <th>Email</th>

          <th>Department</th>

          <th>Designation</th>

          <th>Status</th>

          <th>Joining Date</th>

          <th>Actions</th>

        </tr>

      </thead>

      <tbody>

        {employees.length >
        0 ? (

          employees.map(
            (emp) => (
              <tr
                key={emp._id}
              >

                <td>
                  {emp.name}
                </td>

                <td>
                  {emp.email}
                </td>

                <td>
                  {
                    emp.department
                  }
                </td>

                <td>
                  {
                    emp.designation
                  }
                </td>

                <td>
                  {emp.status}
                </td>

                <td>
                  {new Date(
                    emp.joiningDate
                  ).toLocaleDateString()}
                </td>

                <td>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() =>
                      onEdit(
                        emp
                      )
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {

                      const ok =
                        window.confirm(
                          "Delete employee?"
                        );

                      if (
                        ok
                      ) {
                        onDelete(
                          emp._id
                        );
                      }
                    }}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            )
          )

        ) : (

          <tr>

            <td
              colSpan="7"
              className="text-center"
            >
              No Employees Found
            </td>

          </tr>
        )}

      </tbody>

    </table>
  );
};

export default EmployeeTable;