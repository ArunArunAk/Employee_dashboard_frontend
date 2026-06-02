import {
  useState,
  useEffect,
} from "react";

const EmployeeForm = ({
  onSubmit,
  employee,
}) => {

  const [formData,
    setFormData] =
    useState({
      name: "",
      email: "",
      department: "",
      designation: "",
      status: "Active",
      joiningDate: "",
    });

  useEffect(() => {

    if (employee) {
      setFormData(employee);
    }

  }, [employee]);

  const handleChange = (
    e
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (
    e
  ) => {

    e.preventDefault();

    onSubmit(formData);

    setFormData({
      name: "",
      email: "",
      department: "",
      designation: "",
      status: "Active",
      joiningDate: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-3 mb-4"
    >

      <div className="row">

        <div className="col-md-4">

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            value={
              formData.name
            }
            onChange={
              handleChange
            }
            required
          />

        </div>

        <div className="col-md-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            required
          />

        </div>

        <div className="col-md-4">

          <input
            type="text"
            name="department"
            placeholder="Department"
            className="form-control"
            value={
              formData.department
            }
            onChange={
              handleChange
            }
            required
          />

        </div>

      </div>

      <div className="row mt-3">

        <div className="col-md-4">

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            className="form-control"
            value={
              formData.designation
            }
            onChange={
              handleChange
            }
            required
          />

        </div>

        <div className="col-md-4">

          <select
            name="status"
            className="form-select"
            value={
              formData.status
            }
            onChange={
              handleChange
            }
          >

            <option>
              Active
            </option>

            <option>
              Inactive
            </option>

          </select>

        </div>

        <div className="col-md-4">

          <input
            type="date"
            name="joiningDate"
            className="form-control"
            value={
              formData.joiningDate
            }
            onChange={
              handleChange
            }
            required
          />

        </div>

      </div>

      <button
        className="btn btn-primary mt-3"
      >
        {employee
          ? "Update Employee"
          : "Add Employee"}
      </button>

    </form>
  );
};

export default EmployeeForm;