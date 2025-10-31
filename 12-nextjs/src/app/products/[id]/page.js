async function getProductWithId(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  console.log(id);

  const data = await getProductWithId(id);
  console.log(data);

  return (
    <div className="text-center font-bold text-2xl mt-20">
      <div>{data.title}</div>
      <div className="font-light text-lg">{data.description}</div>
      <div>${data.price}</div>
    </div>
  );
}
