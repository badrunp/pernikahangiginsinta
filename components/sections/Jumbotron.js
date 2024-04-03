import useCountdown from "@/hooks/useCountdown";
import Image from "next/image";
import { useEffect, useState } from "react";
import Bingkai from "../Bingkai";
import { AnimatePresence, motion } from "framer-motion";

function LargeTimeBox({ count, nameTime }) {
 return (
  <div className="w-[60px] h-[55px] rounded-lg bg-amber-700 bg-opacity-50 flex items-center justify-center text-white">
   <div>
    <h3 className="font-bold text-xl">{count}</h3>
    <span className="block text-xs -mt-[3px]">{nameTime}</span>
   </div>
  </div>
 );
}

function ImageItem({ url, active, className }) {
 return (
  active && (
   <AnimatePresence>
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 0.4 }}
    >
     <Image
      src={url}
      alt="bgbtn"
      fill
      className={`w-full h-full object-cover ${className}`}
     />
    </motion.div>
   </AnimatePresence>
  )
 );
}

const dataImage = [
 {
  id: 1,
  url: "/assets/image/mempelai/2.jpg",
  className: "",
 },
 {
  id: 2,
  url: "/assets/image/mempelai/1.jpg",
  className: "",
 },
 {
  id: 3,
  url: "/assets/image/mempelai/3.jpg",
  className: "object-top",
 },
 {
  id: 4,
  url: "/assets/image/mempelai/4.jpg",
  className: "",
 },
];

function Jumbotron() {
 const [days, hours, minutes, seconds] = useCountdown(
  new Date(
   "Thu Apr 25 2024 08:00:00 GMT+0700 (Waktu Indonesia Barat)"
  ).getTime()
 );
 const [imageActive, setImageActive] = useState(1);

 useEffect(() => {
  let interval = setInterval(() => {
   let count = imageActive < dataImage.length ? imageActive + 1 : 1;
   setImageActive(count);
  }, 3000);

  return () => clearInterval(interval);
 }, [imageActive]);

 return (
  <div className="w-full h-[600px] relative overflow-hidden">
   <Bingkai />

   <Image
    src={"/assets/image/bg2.png"}
    alt="bgbtn"
    width={428}
    height={100}
    className="absolute z-10"
   />

   <div className="w-full h-[450px] absolute top-0 left-0">
    {dataImage.map((item) => (
     <ImageItem
      key={item.id}
      url={item.url}
      active={imageActive == item.id}
      className={item.className}
     />
    ))}
   </div>

   <div className="absolute z-20 bottom-4 sm:bottom-0 left-1/2 -translate-x-1/2 text-center">
    <h1 className="font-bold text-3xl mb-1 font-gv">Gigin & Sinta</h1>
    <h5 className="font-semibold mb-6 ">Kamis, 25 April 2024</h5>
    {days + hours + minutes + seconds <= 0 ? (
     <div className="flex items-center space-x-2">
      <LargeTimeBox count={0} nameTime="Hari" />
      <LargeTimeBox count={0} nameTime="Jam" />
      <LargeTimeBox count={0} nameTime="Menit" />
      <LargeTimeBox count={0} nameTime="Detik" />
     </div>
    ) : (
     <div className="flex items-center space-x-2">
      <LargeTimeBox count={days} nameTime="Hari" />
      <LargeTimeBox count={hours} nameTime="Jam" />
      <LargeTimeBox count={minutes} nameTime="Menit" />
      <LargeTimeBox count={seconds} nameTime="Detik" />
     </div>
    )}
   </div>
  </div>
 );
}

export default Jumbotron;
