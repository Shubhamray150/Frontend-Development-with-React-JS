import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
}

const Products = async () => {
  const data = await getProducts();
  const product = data.products;
  console.log(product);

  return (
    <>
      <h1 className="text-center mt-10 text-3xl font-semibold">
        Click To navigate to any route
      </h1>
      <div className="flex flex-col justify-center items-center mt-10">
        <ul className="list-none">
          {product.map((item) => (
            <li
              key={item.id}
              className="block mb-4 bg-gray-100 p-4 rounded-lg shadow"
            >
              <Link
                href={`/products/${item.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Products;
