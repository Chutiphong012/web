import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="font-bold flex items-center justify-between p-4 bg-gradient-to-r from-black via-gray-900 to-indigo-900 text-white shadow-lg bg-opacity-60 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
                <Image src="/black-hole1.png" width={40} height={40} alt="logo" />
                <span className="text-2xl text-indigo-400 glow-text">Galaxy Shop</span>
            </div>
            <ul className="inline-flex space-x-6">
                <li>
                    <a
                        href="/"
                        className="hover:text-indigo-300 transition duration-200 glow-text"
                    >
                        หน้าแรก
                    </a>
                </li>
                <li>
                    <a
                        href="/about"
                        className="hover:text-indigo-300 transition duration-200 glow-text"
                    >
                        เกี่ยวกับเรา
                    </a>
                </li>
                <li>
                    <a
                        href="/products"
                        className="hover:text-indigo-300 transition duration-200 glow-text"
                    >
                        สินค้าทั้งหมด
                    </a>
                </li>
            </ul>
        </nav>
    );
}
