import { useState } from "react";

export default function Analyze() {
  const [result, setResult] = useState(null);
  const [severity, setSeverity] = useState(null);

  // ฟังก์ชันจัดการเมื่อกดปุ่ม
  const handleAnalyze = (status) => {
    setSeverity(null); 
    if (status === "healthy") {
      setResult("ผลการวิเคราะห์: ไม่พบโรค");
    } else if (status === "disease") {
      setResult("ผลการวิเคราะห์: พบโรค");
    }
  };

  //คำแนะนำ ค่อยลบ
  const getAdvice = (level) => {
    switch (level) {
      case "ระยะเริ่มต้น":
        return "คำแนะนำ: ควรตัดแต่งรากและใส่ปุ๋ยบำรุงพืช เพื่อฟื้นฟูสุขภาพ.";
      case "ระยะกลาง":
        return "คำแนะนำ: ใช้ยากำจัดเชื้อราที่เหมาะสมและตรวจสอบดินรอบต้น.";
      case "ระยะรุนแรง":
        return "คำแนะนำ: จำเป็นต้องขุดลอกดินบริเวณรากและพ่นสารกำจัดเชื้อรา.";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-2xl md:text-4xl font-bold py-4 px-4">วิเคราะห์โรค</h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        {/* ปุ่มเลือกผลการวิเคราะห์ */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => handleAnalyze("healthy")}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            ไม่เป็นโรครากเน่า
          </button>
          <button
            onClick={() => handleAnalyze("disease")}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            เป็นโรครากเน่า
          </button>
        </div>

        {/* แสดงผลการวิเคราะห์ */}
        {result && (
          <div
            className={`mt-6 p-4 rounded-lg ${
              result.includes("ไม่พบ")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {result}
          </div>
        )}

        {/* แสดงฟอร์มเลือกความรุนแรงเฉพาะเมื่อพบโรค */}
        {result === "ผลการวิเคราะห์: พบโรค" && (
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-4">เลือกความรุนแรงของโรค:</h2>
            <div className="flex space-x-4">
              <button
                onClick={() => setSeverity("ระยะเริ่มต้น")}
                className={`py-2 px-4 rounded-lg font-bold ${
                  severity === "Lv.1"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Lv.1
              </button>
              <button
                onClick={() => setSeverity("ระยะกลาง")}
                className={`py-2 px-4 rounded-lg font-bold ${
                  severity === "Lv.2"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Lv.2
              </button>
              <button
                onClick={() => setSeverity("ระยะรุนแรง")}
                className={`py-2 px-4 rounded-lg font-bold ${
                  severity === "Lv.3"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Lv.3
              </button>
            </div>

            {/* แสดงผลความรุนแรงและคำแนะนำ */}
            {severity && (
              <div className="mt-4 p-4 bg-blue-100 text-blue-700 rounded-lg">
                <p className="font-bold">ระดับความรุนแรง: {severity}</p>
                <p>{getAdvice(severity)}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
