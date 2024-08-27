import Comments from "./pages/comments";
import Discuont from "./pages/discout";
import Home from "./pages/home";
import Orders from "./pages/orders";
import PrivetLayout from "./pages/privetLayout";
import Products from "./pages/products";
import Users from "./pages/users";

const Routes = [
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "comments",
    element: <Comments />,
  },
  {
    path: "discount",
    element: <Discuont />,
  },
  {
    path: "orders",
    element: <Orders />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "users",
    element: <Users />,
  },
];

export default Routes;
