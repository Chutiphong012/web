import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

export default function Result() {
  return (
    <div className="bg-white p-5 mx-4 my-8 rounded-2xl">
      <h1 className="font-bold text-4xl text-center py-4">ผลการวิเคราะห์</h1>
      
      <div className="flex items-center space-x-4">
        <div>
          <p className="text-2xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum commodi a iusto aperiam quam, sint quod eius illo voluptatibus voluptatem tempore fuga nisi ipsum ad illum unde! Veritatis, voluptatibus. 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, distinctio dolore. Impedit blanditiis debitis a deserunt sit totam omnis expedita molestiae, nulla et asperiores harum. Molestias non ipsum sapiente porro.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, atque vel eaque voluptates, quia dolorem repellat officiis quam deleniti nisi quisquam perferendis quasi neque soluta numquam magnam laboriosam harum at!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum commodi a iusto aperiam quam, sint quod eius illo voluptatibus voluptatem tempore fuga nisi ipsum ad illum unde! Veritatis, voluptatibus. 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, distinctio dolore. Impedit blanditiis debitis a deserunt sit totam omnis.
          </p>
        </div>
      </div>

      <div class="text-center mt-10">
            <a href="Advice.html" class="bg-green-500 text-black py-3 px-8 rounded-2xl 
            hover:bg-green-600 transition duration-300">
              คำแนะนำ
            </a>
          </div>
    </div>
  );
}
