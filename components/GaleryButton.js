import Image from "next/image";

function GaleryButton({ img, position = "object-center" }) {
  return (
    <button className="relative w-full h-[190px]">
      <Image
        src={img}
        alt={img}
        fill
        className={`w-full h-full ${position} object-cover rounded-md`}
      />
    </button>
  );
}

export default GaleryButton;
