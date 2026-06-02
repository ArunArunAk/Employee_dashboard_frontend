const SearchFilter = ({
  search,
  setSearch,
  department,
  setDepartment,
  status,
  setStatus,
}) => {

  return (
    <div className="row mb-3">

      <div className="col-md-4">

        <input
          type="text"
          className="form-control"
          placeholder="Search Name / Email"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

      </div>

      <div className="col-md-4">

        <select
          className="form-select"
          value={department}
          onChange={(e) =>
            setDepartment(
              e.target.value
            )
          }
        >

          <option value="">
            All Departments
          </option>

          <option value="HR">
            HR
          </option>

          <option value="IT">
            IT
          </option>

          <option value="Finance">
            Finance
          </option>

          <option value="Marketing">
            Marketing
          </option>

        </select>

      </div>

      <div className="col-md-4">

        <select
          className="form-select"
          value={status}
          onChange={(e) =>
            setStatus(
              e.target.value
            )
          }
        >

          <option value="">
            All Status
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Inactive">
            Inactive
          </option>

        </select>

      </div>

    </div>
  );
};

export default SearchFilter;