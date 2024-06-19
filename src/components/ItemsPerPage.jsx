import "../../styling/ItemsPerPage.css"

function ItemsPerPage({setItemsPerPage, itemsPerPage}) {
    function handleChange(event) {
        setItemsPerPage(event.target.value)
    }
    return <form className="items-per-page-container">
        <label htmlFor="items-per-page">Items per Page: </label>
        <select id="items-per-page" value={itemsPerPage} onChange={handleChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={40}>40</option>
        </select>

    </form>
}

export default ItemsPerPage