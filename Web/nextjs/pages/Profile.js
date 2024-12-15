import Image from "next/image"; // สำหรับโหลดรูปภาพ (ถ้ามี)
import { Geist, Geist_Mono } from "next/font/google"; // สำหรับฟอนต์ถ้าต้องการ

export default function Profile() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-6 px-4 lg:px-14 py-10 space-y-6 lg:space-y-0">
      {/* กล่องที่ 1 */}
      <div className="bg-white p-6 rounded-3xl w-full lg:w-1/2">
        <svg 
          className="w-full h-auto" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 32 32" 
          style={{ enableBackground: "new 0 0 32 32" }} 
          xmlSpace="preserve"
        >
          <path 
            d="M16 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM27 32a1 1 0 0 1-1-1v-6.115a6.95 6.95 0 0 0-6.942-6.943h-6.116A6.95 6.95 0 0 0 6 24.885V31a1 1 0 1 1-2 0v-6.115" 
            fill="#282828" 
          />
        </svg>
      </div>

      {/* กล่องที่ 2 */}
      <div className="bg-white p-6 rounded-3xl w-full lg:w-1/2">
        <h2 className="text-xl font-semibold mb-4">ข้อมูลโปรไฟล์</h2>
        
        {/* แสดงชื่อ */}
        <div className="mb-4">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">ชื่อ</label>
          <input 
            type="text" 
            id="first-name" 
            className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300" 
            placeholder="ชื่อ"
          />
        </div>
        
        {/* แสดงนามสกุล */}
        <div className="mb-4">
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">นามสกุล</label>
          <input 
            type="text" 
            id="last-name" 
            className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300" 
            placeholder="นามสกุล"
          />
        </div>

        {/* แสดงอีเมล */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">อีเมล</label>
          <input 
            type="email" 
            id="email" 
            className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-100 border border-gray-300" 
            placeholder="อีเมล"
          />
        </div>
        
        {/* ปุ่มแก้ไข */}
        <button className="mt-6 py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">แก้ไข</button>
      </div>
    </div>
  );
}
