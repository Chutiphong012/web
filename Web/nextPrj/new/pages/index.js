import style from '@/styles/styles.module.css';

export default function Home() {
  return (
    <div className={style.background3}>
      <div className="container mx-auto text-center text-white py-20">
        <h1 className="text-3xl font-bold text-center mb-6 glow-text">
          Welcome to Galaxy Shop
        </h1>
        
        <div className="flex justify-center space-x-4">
          <a
            href="/products"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
