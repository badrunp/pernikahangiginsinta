import Image from "next/image";
import Bingkai from "../Bingkai";
import MempelaiItem from "../MempelaiItem";

function Mempelai() {
  return (
    <div id="mempelai" className="w-full h-[1100px] relative overflow-hidden">
      <Bingkai />
      <Image
        src={"/assets/image/bgbtn.png"}
        alt="bgbtn"
        width={428}
        height={100}
        className="rotate-180"
      />
      <Image
        src={"/assets/image/bgbtn.png"}
        alt="bgbtn"
        width={428}
        height={200}
        className="object-cover absolute bottom-0 left-0"
      />

      <div className="absolute z-40 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-6 w-full h-auto">
        <div className="space-y-12">
          <MempelaiItem
            img={"/assets/image/mempelai/men.jpeg"}
            name="Maman Supratman"
            text1="Putra Bungsu dari"
            text2="Bpk. Oom & Ibu Lili"
          />
          <Image
            src={"/assets/image/home.png"}
            alt="men"
            width={100}
            height={200}
            className="h-[100px] object-cover mx-auto"
          />
          <MempelaiItem
            img={"/assets/image/mempelai/women.jpeg"}
            name="Eka Raniyati Rahman"
            text1="Putri Bungsu dari"
            text2="Bpk. Eman Rohman & Ibu Nendah"
          />
        </div>
      </div>
    </div>
  );
}

export default Mempelai;
