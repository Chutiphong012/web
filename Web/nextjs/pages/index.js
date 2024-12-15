import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

export default function Home() {
  return (
    <div>

       <iframe class="py-5 px-2"
      src="https://www.tmd.go.th/weatherForecast7DaysWidget?province=สุราษฎร์ธานี"
      frameborder="0"
      width="100%"
      height="400px"
    ></iframe>


    </div>
  );
}
