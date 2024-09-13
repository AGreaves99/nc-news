import Articles from "./components/Articles";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNavigation from "./components/PageNavigation";
import { useState } from "react";
import ItemsPerPage from "./components/ItemsPerPage";
import { Routes, Route, Navigate } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";
import SortArticles from "./components/SortArticles";
import ArticleSortingWrapper from "./components/ArticleSortingWrapper";

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
          {["/", "/topic/:topic"].map((path) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <ArticleSortingWrapper>
                    <ItemsPerPage
                      itemsPerPage={itemsPerPage}
                      setItemsPerPage={setItemsPerPage}
                    />
                    <SortArticles />
                  </ArticleSortingWrapper>
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
          ))}
          <Route path="/article/:article_id" element={<SingleArticle />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
