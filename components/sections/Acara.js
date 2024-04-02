import useCountdown from "@/hooks/useCountdown";
import Image from "next/image";
import Bingkai from "../Bingkai";
import SmallTimeBox from "../SmallTimeBox";

function SelesaiAcara() {
  return (
    <>
      <SmallTimeBox count={0} timeName="Hari" />
      <SmallTimeBox count={0} timeName="Jam" />
      <SmallTimeBox count={0} timeName="Menit" />
      <SmallTimeBox count={0} timeName="Detik" />
    </>
  );
}

function AkadNikah() {
  const [days, hours, minutes, seconds] = useCountdown(
    new Date(
      "Thu Feb 23 2023 08:00:00 GMT+0700 (Waktu Indonesia Barat)"
    ).getTime()
  );
  return days + hours + minutes + seconds <= 0 ? (
    <div className="flex items-center space-x-2 justify-center mb-1">
      <SelesaiAcara />
    </div>
  ) : (
    <div className="flex items-center space-x-2 justify-center mb-1">
      <SmallTimeBox count={days} timeName="Hari" />
      <SmallTimeBox count={hours} timeName="Jam" />
      <SmallTimeBox count={minutes} timeName="Menit" />
      <SmallTimeBox count={seconds} timeName="Detik" />
    </div>
  );
}
function Resepsi() {
  const [days, hours, minutes, seconds] = useCountdown(
    new Date(
      "Wed Feb 22 2023 16:00:00 GMT+0700 (Waktu Indonesia Barat)"
    ).getTime()
  );
  return days + hours + minutes + seconds <= 0 ? (
    <div className="flex items-center space-x-2 justify-center mb-1">
      <SelesaiAcara />
    </div>
  ) : (
    <div className="flex items-center space-x-2 justify-center mb-1">
      <SmallTimeBox count={days} timeName="Hari" />
      <SmallTimeBox count={hours} timeName="Jam" />
      <SmallTimeBox count={minutes} timeName="Menit" />
      <SmallTimeBox count={seconds} timeName="Detik" />
    </div>
  );
}

function Acara() {
  return (
    <div id="acara" className="w-full h-[1120px] relative overflow-hidden">
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
        <div className="text-center space-y-8 relative">
          <h1 className="font-bold text-2xl font-mw">Undangan dan Acara</h1>
          <div className="relative text-gray-800">
            <h2 className="font-bold text-xl text-gray-800 font-mw">
              Akad Nikah
            </h2>
            <Image
              src={"/assets/image/bingkai-garis.png"}
              alt="men"
              width={100}
              height={50}
              className="h-[30px] my-3 object-cover mx-auto"
            />
            <h4 className="font-semibold">Kamis, 23 Februari 2023</h4>
            <p className="text-sm mb-1">Pukul 08:00 - Selesai</p>
            <AkadNikah />
            <p className="text-gray-800 mt-2">
              Desa Cidulang Blok Bojong Jln. Gang Mesjid As-Surur RT. 004, RW.
              004 Kec. Cikijing Kab. Majalengka Jawa Barat.
            </p>
            <a
              href="https://maps.app.goo.gl/RQVcdTctu983uiT56"
              target="_blank"
              className="w-max mx-auto mt-3 text-xs py-2 px-5 bg-amber-800 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-amber-800 focus:ring-offset-1 flex items-center space-x-1"
            >
              <span>Map Lokasi Acara</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
          <h1 className="font-bold text-4xl font-mw">&</h1>

          <div>
            <h2 className="font-bold text-xl text-gray-800 font-mw">
              Resepsi Pernikahan
            </h2>
            <Image
              src={"/assets/image/bingkai-garis.png"}
              alt="men"
              width={100}
              height={50}
              className="h-[30px] my-3 object-cover mx-auto"
            />
            <h4 className="font-semibold">Kamis, 22 Februari 2023</h4>
            <p className="text-sm mb-1">Pukul 16:00 - Selesai</p>
            <Resepsi />
            <p className="text-gray-800 mt-2">
              Desa Cidulang Blok Bojong Jln. Gang Mesjid As-Surur RT. 004, RW.
              004 Kec. Cikijing Kab. Majalengka Jawa Barat.
            </p>
            <a
              href="https://maps.app.goo.gl/RQVcdTctu983uiT56"
              target="_blank"
              className="w-max mx-auto mt-3 text-xs py-2 px-5 bg-amber-800 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-amber-800 focus:ring-offset-1 flex items-center space-x-1"
            >
              <span>Map Lokasi Acara</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>

          <p className="text-gray-800 text-sm px-4">
            Besar harapan kami jika Bapak/Ibu/Sahabat/Saudara/i berkenan hadir
            pada acara berbahagia kami. Atas perhatiannya kami ucapkan Terima
            kasih.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Acara;
