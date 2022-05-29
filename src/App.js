import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./components/Dashboard/Dashboard";
import MyProfile from "./components/Dashboard/MyProfile";
import AddReview from "./components/Dashboard/UserDash/AddReview";
import MyOrders from "./components/Dashboard/UserDash/MyOrders";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductDetails from "./components/Products/ProductDetails";
import Products from "./components/Products/Products";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";


function App() {
  return (
    <div className="of-x-h">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:productId" element={
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        }></Route>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        }></Route>
        <Route path="/dashboard/editprofile" element={
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        }></Route>
        <Route path="/dashboard/myorders" element={
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        }></Route>
        <Route path="/dashboard/addreview" element={
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        }></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
