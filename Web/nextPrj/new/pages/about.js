import style from '@/styles/styles.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className={style.background}>
      <div className="container mx-auto text-center text-white py-20">
        <h1 className="text-3xl font-bold text-center mb-6 glow-text">
          เกี่ยวกับเรา
        </h1>
        <p className="text-lg mb-8">
          012 Chutiphong
        </p>
        
        <div className="mt-10">
          <a
            href="/products"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            ดูสินค้าของเรา
          </a>
        </div>
      </div>
    </div>
  );
}
