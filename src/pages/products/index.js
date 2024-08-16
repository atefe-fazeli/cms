import Error from "../../globalComponents/errorComponent/error";
import AddNewProduct from "./components/addNewProduct";
import ProductsTable from "./components/productsTable";
import "./index.css";
function Products() {
  return (
    <div className="product-main-container">
      <AddNewProduct />
      <Error text="هیچ محصولی یافت نشد" />
      <ProductsTable />
    </div>
  );
}

export default Products;
