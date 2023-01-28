import React from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-4 md:gap-7 mt-4">
        {products.map((product) => (
          <Card product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
