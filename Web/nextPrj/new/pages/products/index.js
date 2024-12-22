import Head from "next/head";

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=6");
  const data = await res.json();

  return {
    props: { products: data.products },
  };
}

export default function Index({ products }) {
  return (
    <>
      <Head>
        <title>สินค้าทั้งหมด</title>
        <meta name="keywords" content="ร้านค้า, ขายของ, สินค้า" />
        <meta name="description" content="รายการสินค้าทั้งหมดจากร้านของเรา" />
      </Head>

      <div
        className="min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/bg2.jpeg')" }}
      >
        <div className="container mx-auto p-6 bg-gray-900 bg-opacity-70 rounded-lg">
          <h1 className="text-4xl font-bold text-center mb-10 glow-text">
            สินค้าทั้งหมด
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="border border-gray-700 rounded-lg shadow-lg bg-gray-800 hover:shadow-xl transition duration-300 p-4"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="text-xl font-semibold text-amber-400">
                  {item.title}
                </h2>
                <p className="text-gray-300 mt-2">฿{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
