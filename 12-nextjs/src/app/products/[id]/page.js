export default async function ProductPage({ params }) {
  const { id } = await params;

  return (
    <div className="text-center font-bold text-2xl mt-20">
      Product {id} details page — content coming soon!
    </div>
  );
}
