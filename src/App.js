import "./assets/css/style.css";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NewsCategoriesPage from "./pages/NewsCategoriesPage";
import NewsDetailPage from "./pages/NewsDetailPage";


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<NewsDetailPage />} />
          <Route path="/categories" element={<NewsCategoriesPage />} />
          
        </Routes>
      </main>
      
    </>
  );
}

export default App;
