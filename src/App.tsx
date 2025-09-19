import './App.css'
import {products} from "./data/productsList.ts";
import MyProduct from "./MyProduct/MyProduct.tsx";

function App() {
  return (
      <>
          {products.map((product, index) => <MyProduct key={index} product={product}/>

          )};

      </>  );
}

export default App
