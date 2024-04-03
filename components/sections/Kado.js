import Image from "next/image";
import { useEffect, useState } from "react";
import Bingkai from "../Bingkai";
import GiftItem from "../GiftItem";
import ModalMessage from "../ModalMessage";
import { AnimatePresence, motion } from "framer-motion";

function Kado() {
 const [isRekening, setIsRekening] = useState(false);
 const [isNomor, setIsNomor] = useState(false);

 const handleActiveIsRekening = () => {
  setIsRekening(true);
  setIsNomor(false);
 };
 const handleActiveIsNomor = () => {
  setIsRekening(false);
  setIsNomor(true);
 };

 useEffect(() => {
  if (isRekening) {
   setTimeout(() => {
    setIsRekening(false);
   }, 5000);
  }
  if (isNomor) {
   setTimeout(() => {
    setIsNomor(false);
   }, 5000);
  }
 }, [isRekening, isNomor]);

 return (
  <div id="kado" className="w-full h-[800px] relative overflow-hidden">
   <Bingkai />
   <AnimatePresence>
    {isRekening && (
     <ModalMessage
      message="Nomor Dana Copy to Clipboard"
      center="true"
      handleCloseModal={() => setIsRekening(false)}
     />
    )}
   </AnimatePresence>

   <AnimatePresence>
    {isNomor && (
     <ModalMessage
      message="Nomor Dana Copy to Clipboard"
      center="true"
      handleCloseModal={() => setIsNomor(false)}
     />
    )}
   </AnimatePresence>

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
    <div className="text-center space-y-16 relative">
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
       opacity: 1,
       y: 0,
       transition: { delay: 0.2, duration: 0.7 },
      }}
     >
      <h1 className="font-bold text-2xl mb-1 font-mw">Kirim Kado</h1>
      <p className="text-gray-800 text-sm">
       Terima kasih atas Do'a dan restu yang telah Anda berikan, jika
       Anda ingin mengirimkan kado nikah, silakan kirim dengan cara di
       bawah ini. Sebelumnya, kami mengucapkan banyak terima kasih.
      </p>
     </motion.div>
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
       opacity: 1,
       y: 0,
       transition: { delay: 0.1, duration: 0.7 },
      }}
      className="space-y-14"
     >
           <GiftItem
       img={"/assets/image/logo-dana.svg"}
       buttonText="Copy Nomor Dana"
       no="6282130985022"
       lists={[
        {
         id: 1,
         title: "Nomor Dana:",
         value: "+6282130985022",
        },
        {
         id: 2,
         title: "A/N:",
         value: "Gigin Ginanjar",
        },
       ]}
       handleSuccessCopy={handleActiveIsNomor}
      />
      <GiftItem
       img={"/assets/image/logo-dana.svg"}
       buttonText="Copy Nomor Dana"
       no="6282128858120"
       lists={[
        {
         id: 1,
         title: "Nomor Dana:",
         value: "+6282128858120",
        },
        {
         id: 2,
         title: "A/N:",
         value: "Sinta Marapianti",
        },
       ]}
       handleSuccessCopy={handleActiveIsRekening}
      />

     </motion.div>
    </div>
   </div>
  </div>
 );
}

export default Kado;
