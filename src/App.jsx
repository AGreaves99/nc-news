import Articles from "./components/Articles";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavigation from "./components/PageNavigation";
import { useState } from "react";
import ItemsPerPage from "./components/ItemsPerPage";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  pageNumber > totalPage && setPageNumber(totalPage);

  return (
    <>
      <Header />
      <Navbar />
      <ItemsPerPage
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
      <Articles
        pageNumber={pageNumber}
        itemsPerPage={itemsPerPage}
        setTotalPage={setTotalPage}
      >
        <PageNavigation
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalPage={totalPage}
        />
      </Articles>
    </>
  );
}

export default App;
