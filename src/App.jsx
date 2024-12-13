import { useEffect, useState } from "react";
import "./App.css";
const GET_PRODUCTS = "http://localhost:5000/products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const respons = await fetch(GET_PRODUCTS);
        const result = await respons.json();
        if (result && result.data) {
          setProducts(result.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 max-w-[2200px] gap-8 mx-auto">
        {products.map((value, index, array) => {
          return (
            <div
              className="w-[500px] flex flex-col justify-between"
              key={value.id}
            >
              <img className="mb-3" src={value.image} alt="" />
              <h2 className="font-semibold text-3xl">{value.name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
