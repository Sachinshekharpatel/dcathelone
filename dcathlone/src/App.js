import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/home";
import ProductDetailPage from "./components/singleproductpage/productdetailpage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/productdetailpage" element={<ProductDetailPage />}></Route>
          <Route path="/" exact element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
