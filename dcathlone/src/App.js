import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/home";
import ProductDetailPage from "./components/singleproductpage/productdetailpage";
import CartPage from "./components/cartpage/cartpage";
import MenPage from "./components/menpage/menpage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/cartpage" element={<CartPage />}></Route>
          <Route
            path="/productdetailpage"
            element={<ProductDetailPage />}
          ></Route>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/menpage" exact element={<MenPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
