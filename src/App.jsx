import Articles from "./components/Articles";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavigation from "./components/PageNavigation";
import { useState } from "react";
import ItemsPerPage from "./components/ItemsPerPage";
import { Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";
import Comments from "./components/Comments";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  pageNumber > totalPage && setPageNumber(totalPage);

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
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
            }
          />
          <Route
            path="/:article_id"
            element={
              <>
                <div className="articles-comments-container">
                  <SingleArticle />
                  <Comments />
                </div>
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
