import Link from "next/link";

const Products = () => {
  const arr = new Array(10).fill(0);
  return (
    <>
      <h1 className="text-center mt-10 text-3xl font-semibold">
        Click To navigate to any route
      </h1>
      <div className="flex justify-center items-center mt-10">
        {arr.map((item, index) => {
          let idx = index + 1;
          return (
            <Link
              key={idx}
              className="bg-red-500 mx-2 px-2 py-2 rounded-lg font-semibold text-black"
              href={`/products/${idx}`}
            >
              Product {idx}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Products;
