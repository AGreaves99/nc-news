import { useSearchParams } from "react-router-dom";
import "../../styling/SortSelect.css";

function SortArticles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sorts = {
    author: "Author",
    title: "Title",
    topic: "Topic",
    created_at: "Date",
    votes: "Votes",
    comment_count: "Comments",
  };

  function handleSortChange(event) {
    const sortValue = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (sortValue) {
      newParams.set("sort_by", sortValue);
    } else {
      newParams.delete("sort_by");
    }
    setSearchParams(newParams);
  }

  function handleOrderChange(event) {
    const order = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", order);
    setSearchParams(newParams);
  }

  return (
    <div>
      <select
        name="sort"
        id="sort-select"
        className="sort-select"
        onChange={handleSortChange}
        value={searchParams.get("sort_by") || ""}
      >
        <option value="">--Sort By--</option>
        {Object.keys(sorts).map((key) => (
          <option key={key} value={key}>
            {sorts[key][0].toUpperCase() + sorts[key].slice(1)}
          </option>
        ))}
      </select>
      <select
        name="order"
        id="order-select"
        onChange={handleOrderChange}
        value={searchParams.get("order") || "desc"}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
}

export default SortArticles;
