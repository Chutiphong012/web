import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";


export default function Analyze(){
    return (
        <div class="flex justify-center items-center bg-white p-5 mx-4 my-5 rounded-2xl text-center shadow-md">
        <div>
          <p class="text-lg sm:text-xl md:text-2xl">สมมุติว่าทำกล้องละ</p>
          <a href="Result.html">
            <button class="bg-green-500 text-white px-6 py-3 mt-4 rounded-2xl hover:bg-green-600 transition duration-200 text-sm md:text-base">
              วิเคราะห์โรค
            </button>
          </a>
        </div>
    </div>
    )
    
}
  