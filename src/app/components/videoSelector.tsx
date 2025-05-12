import Image from "next/image";
import body from "@/app/images/download.png";
import fornt from "@/app/images/download (1).png";
import cabin from "@/app/images/download (2).png";
import trunk from "@/app/images/download (3).png";
import exterior from "@/app/images/download (4).png";
import truckbody from "@/app/images/commercial-body.497c72f2daf47ca41c4fd25f86191b69.svg";
import truckfornt from "@/app/images/commercial-engine.474985507c936157fc7a6daa457d4f04.svg";

interface Props {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  vehicleType: "passenger" | "commercial";
}

export default function VideoSelector({
  total,
  activeIndex,
  onSelect,
  vehicleType,
}: Props) {
  const passengerThumbnails = [body, fornt, cabin, trunk, exterior];
  const commercialThumbnails = [truckbody, truckfornt];

  const thumbnails =
    vehicleType === "commercial" ? commercialThumbnails : passengerThumbnails;

  return (
    <div className="flex justify-center gap-4 mt-4">
      {thumbnails.slice(0, total).map((src, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`relative w-22 h-22 rounded-full overflow-hidden transition-all duration-200 ${
            i === activeIndex ? "scale-110" : "opacity-70 hover:opacity-100"
          }`}
        >
          <Image
            src={src}
            alt={`Thumbnail ${i}`}
            fill
            className="object-cover"
          />
        </button>
      ))}
    </div>
  );
}
