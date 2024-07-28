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
import LoginPage from "./components/loginpage/loginpage";
import SignupPage from "./components/signuppage/signup";
import ProfilePage from "./components/myprofile/profile";
import OrderPage from "./components/order/order";
import Addresses from "./components/addresspage/address";
function App() {
  const dispatch = useDispatch();
  const userEmail = localStorage.getItem("DcathelonUserEmail") || "null";

  useEffect(() => {
    const fetchData = async (url, actionCreator) => {
      try {
        const response = await axios.get(url);
        if (response.data) {
          const dataArray = Object.values(response.data);
          const filteredArray = userEmail !== "null" 
            ? dataArray.filter(item => item.email === userEmail)
            : [];
          dispatch(actionCreator(filteredArray));
        } else {
          dispatch(actionCreator([]));
        }
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        dispatch(actionCreator([]));
      }
    };

    fetchData(
      'https://dcathelone-default-rtdb.firebaseio.com/dcatheloneCart.json',
      cartReduxActions.fetchFromDatabaseFunction
    );

    fetchData(
      'https://dcathelone-default-rtdb.firebaseio.com/dcatheloneWishlist.json',
      cartReduxActions.fetchFromDatabaseWishListFunction
    );
  }, [dispatch, userEmail]);

  return (
    <div>
      <Router>
        <Routes>
        <Route path="/address" element={<Addresses />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
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
