import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartReduxActions } from "./components/reduxstore/reduxstore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/home";
import ProductDetailPage from "./components/singleproductpage/productdetailpage";
import CartPage from "./components/cartpage/cartpage";
import MenPage from "./components/menpage/menpage";
import WomenPage from "./components/womenpage/womenpage";
import WishList from "./components/wishlist/wishlist";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      axios
        .get(
          `https://dcathelone-default-rtdb.firebaseio.com/dcatheloneCart.json`
        )
        .then((res) => {
          if (res.data !== null) {
            const dataArray = Object.values(res.data);
            dispatch(cartReduxActions.fetchFromDatabaseFunction(dataArray));
          } else {
            dispatch(cartReduxActions.fetchFromDatabaseFunction([]));
          }
        });
    } catch (error) {
      console.log("error menpage data not fetched");
    }
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/cartpage" element={<CartPage />}></Route>
          <Route
            path="/productdetailpage"
            element={<ProductDetailPage />}
          ></Route>
          <Route path="/wishlist" exact element={<WishList />}></Route>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/menpage" element={<MenPage />}></Route>
          <Route path="/store" exact element={<WomenPage />}></Route>
          <Route path="/womenpage" exact element={<WomenPage />}></Route>
          <Route path="/shoes" exact element={<MenPage />}></Route>
          <Route path="/kids" exact element={<MenPage />}></Route>
          <Route path="/sportsaccessories" exact element={<MenPage />}></Route>
          <Route path="/summercollection" exact element={<WomenPage />}></Route>
          <Route path="/sportsequipment" exact element={<MenPage />}></Route>
          <Route path="/sale" exact element={<MenPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
