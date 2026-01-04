import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { getNews } from "./api";
import "./App.css";

import Navbar from "./components/navbar";
import Content from "./components/content";
import Newscard from "./components/Newscard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNews().then((res) => setNews(res.articles));
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Content />
              {news ? (
                news.map((e, index) => (
                  <Newscard
                    key={index}
                    title={e.title}
                    date={e.publishedAt}
                    url={e.url}
                    author={e.author}
                    description={e.description}
                    image={e.urlToImage}
                  />
                ))
              ) : (
                <p>No News Data</p>
              )}
              <Sidebar />
            </>
          }
        />

        {/* AUTH PAGES */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
