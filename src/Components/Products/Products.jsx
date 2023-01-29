import React from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";

const Products = ({handleAdd}) => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);
  const handleAddTime = (product) => {
    handleAdd(product);
  };
  return (
    <div>
      <Header />
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-4 md:gap-7 mt-4">
        {products.map((product) => (
          <Card handleAddTime={handleAddTime} product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
