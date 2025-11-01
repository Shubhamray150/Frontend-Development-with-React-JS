export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: `${id} - Products Store`,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  return (
    <h1>
      Product List - <span className="uppercase">{id}</span>
    </h1>
  );
}
