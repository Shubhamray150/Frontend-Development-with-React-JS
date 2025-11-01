export async function generateMetadata({ params }) {
  const { name } = await params;
  return {
    title: `Hello ${name}`,
  };
}

const HelloPage = async ({ params }) => {
  const { name } = await params;
  console.log(name);

  return <div className="font-bold text-2xl">Hello , {name}!</div>;
};

export default HelloPage;
