import Coments from "./pages/coments";
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
    path: "coments",
    element: <Coments />,
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
