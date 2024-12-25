import { useState } from "react";

export default function Home() {
  const [province, setProvince] = useState("สุราษฎร์ธานี");

  const provinces = [

    "กระบี่", "กรุงเทพมหานคร", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร", 
    "ขอนแก่น", "จันทบุรี", "ฉะเชิงเทรา", "ชลบุรี", "ชัยนาท", 
    "ชัยภูมิ", "ชุมพร", "ตรัง", "ตราด", "ตาก", 
    "นครนายก", "นครปฐม", "นครพนม", "นครราชสีมา", "นครศรีธรรมราช", 
    "นครสวรรค์", "นนทบุรี", "นราธิวาส", "น่าน", "บึงกาฬ", 
    "บุรีรัมย์", "ปทุมธานี", "ประจวบคีรีขันธ์", "ปราจีนบุรี", "ปัตตานี", 
    "พระนครศรีอยุธยา", "พะเยา", "พังงา", "พัทลุง", "พิจิตร", 
    "พิษณุโลก", "ภูเก็ต", "มหาสารคาม", "มุกดาหาร", "ยะลา", 
    "ยโสธร", "ระนอง", "ระยอง", "ราชบุรี", "ร้อยเอ็ด", 
    "ลพบุรี", "ลำปาง", "ลำพูน", "ศรีสะเกษ", "สกลนคร", 
    "สงขลา", "สตูล", "สมุทรปราการ", "สมุทรสงคราม", "สมุทรสาคร", 
    "สระบุรี", "สระแก้ว", "สิงห์บุรี", "สุพรรณบุรี", "สุราษฎร์ธานี", 
    "สุรินทร์", "สุโขทัย", "หนองคาย", "หนองบัวลำภู", "อำนาจเจริญ", 
    "อุดรธานี", "อุตรดิตถ์", "อุทัยธานี", "อุบลราชธานี", "อ่างทอง", 
    "เชียงราย", "เชียงใหม่", "เพชรบุรี", "เพชรบูรณ์", "เลย", 
    "แพร่", "แม่ฮ่องสอน"
    
  ];

  return (
    <>
      <h1 className="text-center text-2xl md:text-4xl font-bold py-4 px-4">
        Durian Epidemic Geospatial Report System
      </h1>

      <div className="py-5 px-2">
        {/* Dropdown เลือกจังหวัด */}
        <div className="mb-4 flex justify-between items-center flex-col md:flex-row">
          
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 text-sm md:text-base text-black"
          >
            {provinces.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>

        <iframe
          src={`https://www.tmd.go.th/weatherForecast7DaysWidget?province=${province}`}
          frameBorder="0"
          width="100%"
          height="400px"
          className="w-full rounded-lg shadow-md"
        ></iframe>
      </div>
    </>
  );
}
