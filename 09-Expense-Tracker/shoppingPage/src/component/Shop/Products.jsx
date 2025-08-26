import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DummyProducts = [
  {
    id: "p1",
    price: 6,
    title: "My First book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My second book",
    description: "The first part is a hit so second book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((product) => {
          console.log(product);
          return (
            <ProductItem
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
