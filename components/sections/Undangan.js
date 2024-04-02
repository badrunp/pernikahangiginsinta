import Image from "next/image";
import Bingkai from "../Bingkai";
import { motion } from "framer-motion";

function Undangan() {
  return (
    <div id="undangan" className="w-full h-[1114px] relative overflow-hidden">
      <Bingkai />

      <Image
        src={"/assets/image/bg1.png"}
        alt="bgbtn"
        width={428}
        height={100}
      />
      <Image
        src={"/assets/image/bgbtn.png"}
        alt="bgbtn"
        width={428}
        height={200}
        className="object-cover absolute bottom-0 left-0"
      />

      <div className="absolute z-40 top-56 left-1/2 -translate-x-1/2 px-5 w-full h-auto">
        <motion.h1
          initial={{ opacity: 0, x: 20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.4, duration: 0.7 },
          }}
          // viewport={{ once: true }}
          // transition={{ type: "tween" }}
          className="font-bold text-2xl text-center mb-10 relative font-mw"
        >
          Pernikahan Maman & Eka
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.4, duration: 0.7 },
          }}
          className="text-gray-800 text-center text-sm tracking-wide mb-16"
        >
          Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud menyelenggarakan Acara
          Pernikahan. Merupakan suatu kehormatan dan kebahagiaan bagi kami
          sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan
          doa restu kepada kami.
        </motion.p>

        <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden mx-auto mb-16">
          <Image
            src={"/assets/image/mempelai/4.jpeg"}
            alt="bgbtn"
            fill
            className="w-full h-full object-cover object-top"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.7 },
          }}
        >
          <p className="text-gray-800 text-center text-sm mb-6">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            merasa tenteram kepadanya, dan Dia menjadikan di antara kamu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </p>

          <p className="text-gray-800 text-center text-sm mb-6 font-semibold">
            QS. Ar-Rum Ayat 21
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Undangan;
