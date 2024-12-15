import Image from 'next/image';

export default function Advice() {
  return (
    <div className="bg-white p-5 mx-4 my-8 rounded-2xl">
      <h1 className="font-bold text-3xl text-center py-4">คำแนะนำ</h1>
      <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
        
        
        {/* ข้อความ */}
        <div className="flex-1">
          <p className="text-sm md:text-lg font-medium text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum commodi a iusto aperiam quam, sint quod eius illo voluptatibus voluptatem tempore fuga nisi ipsum ad illum unde! Veritatis, voluptatibus. 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, distinctio dolore. Impedit blanditiis debitis a deserunt sit totam omnis expedita molestiae, nulla et asperiores harum. Molestias non ipsum sapiente porro.
          </p>
        </div>
      </div>
    </div>
  );
}
