import Image from "next/image";
import Bingkai from "../Bingkai";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="w-full h-[700px] relative overflow-hidden mb-[60px]">
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
        className="object-cover -translate-y-40"
      />

      <div className="absolute z-40 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-6 w-full h-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.7 },
          }}
        >
          <div className="relative w-[230px] h-[200px] rounded-md overflow-hidden mx-auto mb-10">
            <Image
              src={"/assets/image/mempelai/footer.jpg"}
              alt="bgbtn"
              fill
              className="w-full h-full object-cover object-top"
            />
          </div>

          <p className="text-gray-800 text-center text-sm mb-8">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan Do'a restu di
            acara berbahagia kami
          </p>

          <p className="text-gray-800 text-center text-sm mb-1">Terima kasih</p>
          <p className="text-gray-800 text-center text-sm font-semibold">
            Gigin Ginanjar <br /> & <br />
            Sinta Marapianti
          </p>
          <p className="text-gray-800 text-center text-xs mb-1 mt-16">
            &copy; 2023 Duos Dev. All Rights Reserved
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
