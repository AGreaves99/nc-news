import Pagination from "react-bootstrap/Pagination";
import "../../styling/PageNavigation.css"

function PageNavigation({ pageNumber, setPageNumber, totalPage }) {
  function handleClick(event) {
    setPageNumber(Number(event.currentTarget.attributes.value.value));
  }
  return (
    <Pagination className="pagination">
      <Pagination.First
        value={1}
        onClick={handleClick}
        disabled={pageNumber === 1}
      />
      <Pagination.Prev
        value={pageNumber - 1}
        onClick={handleClick}
        disabled={pageNumber === 1}
      />
      <Pagination.Item disabled>{pageNumber}</Pagination.Item>
      <Pagination.Next
        value={pageNumber + 1}
        onClick={handleClick}
        disabled={pageNumber === totalPage}
      />
      <Pagination.Last
        value={totalPage}
        onClick={handleClick}
        disabled={pageNumber === totalPage}
      />
    </Pagination>
  );
}

export default PageNavigation;
