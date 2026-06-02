const Pagination = ({
  page,
  pages,
  setPage,
}) => {

  const numbers =
    [...Array(pages).keys()];

  return (
    <nav>

      <ul className="pagination">

        {numbers.map(
          (num) => (
            <li
              key={num + 1}
              className={`page-item ${
                page === num + 1
                  ? "active"
                  : ""
              }`}
            >

              <button
                className="page-link"
                onClick={() =>
                  setPage(
                    num + 1
                  )
                }
              >
                {num + 1}
              </button>

            </li>
          )
        )}

      </ul>

    </nav>
  );
};

export default Pagination;