import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>โปรไฟล์</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col lg:flex-row lg:space-x-6 px-4 lg:px-14 py-10 space-y-6 lg:space-y-0">
        {/* กล่องที่ 1 */}
        <div className="bg-white p-6 rounded-3xl w-full lg:w-1/2">
          <svg
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            style={{ enableBackground: 'new 0 0 32 32' }}
            xmlSpace="preserve"
          >
            <path d="M16 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM27 32a1 1 0 0 1-1-1v-6.115a6.95 6.95 0 0 0-6.942-6.943h-6.116A6.95 6.95 0 0 0 6 24.885V31a1 1 0 1 1-2 0v-6.115c0-4.93 4.012-8.943 8.942-8.943h6.116c4.93 0 8.942 4.012 8.942 8.943V31a1 1 0 0 1-1 1z" />
          </svg>
        </div>

        {/* กล่องที่ 2 */}
        <div className="bg-white p-6 rounded-3xl w-full lg:w-1/2">
          {/* ชื่อ */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <input
                type="text"
                id="first-name"
                className="mt-1 py-5 block w-full rounded-md bg-gray-300 pl-10"
                placeholder="ชื่อ"
              />
            </div>
            <button className="ml-4 text-white bg-orange-500 py-1 px-1 rounded-xl">แก้ไข</button>
          </div>
          {/* นามสกุล */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <input
                type="text"
                id="last-name"
                className="mt-1 py-5 block w-full rounded-md bg-gray-300 pl-10"
                placeholder="นามสกุล"
              />
            </div>
            <button className="ml-4 text-white bg-orange-500 py-1 px-1 rounded-xl">แก้ไข</button>
          </div>
          {/* อีเมล */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <input
                type="email"
                id="email"
                className="mt-1 py-5 block w-full rounded-md bg-gray-300 pl-10"
                placeholder="อีเมล"
              />
            </div>
            <button className="ml-4 text-white bg-orange-500 py-1 px-1 rounded-xl">แก้ไข</button>
          </div>
          {/* ปุ่มออกจากระบบ */}
          <div className="flex justify-center mt-6 py-5">
            <button className="bg-red-500 text-white py-3 px-4 rounded-md hover:bg-red-600">ออกจากระบบ</button>
          </div>
        </div>
      </div>
    </>
  );
}
