import { useEffect, useState } from "react";
import Error from "../../globalComponents/errorComponent/error";
import AddNewProduct from "./components/addNewProduct";
import ProductsTable from "./components/productsTable";
import "./index.css";
import { productsURL } from "../../setup/api/apiRoutes";
import axios from "axios";

function Products() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  function getAllProducts() {
    axios
      .get(productsURL)
      .then((response) => {
        setData(response.data);
        console.log("getAllProducts func",response)
      })
      .catch((er) => {
        setError(er);
      });
     
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="product-main-container">
      <AddNewProduct />
      {data ? (
        <ProductsTable data={data} getAllProducts={getAllProducts}/>
      ) : (
        <Error text={`هیچ محصولی یافت نشد ${error}`} />
      )}
    </div>
  );
}

export default Products;
