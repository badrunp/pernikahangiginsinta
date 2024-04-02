import Image from "next/image";
import { motion } from "framer-motion";

function Bingkai() {
  return (
    <>
      <motion.div
        animate={{ scale: [null, 1.2], rotate: 7 }}
        transition={{ repeat: Infinity, duration: 5, repeatType: "reverse" }}
        className="absolute left-0 top-0 z-30"
      >
        <Image
          src={"/assets/image/sidetop.png"}
          alt="bgbtn"
          width={150}
          height={150}
        />
      </motion.div>

      <motion.div
        animate={{ scale: [null, 1.2], rotate: 7 }}
        transition={{ repeat: Infinity, duration: 5, repeatType: "reverse" }}
        className="absolute right-0 top-0 z-30"
      >
        <Image
          src={"/assets/image/sidetop2.png"}
          alt="bgbtn"
          width={150}
          height={150}
        />
      </motion.div>

      <motion.div
        animate={{ scale: [null, 1.2], rotate: 7 }}
        transition={{ repeat: Infinity, duration: 5, repeatType: "reverse" }}
        className="absolute right-0 bottom-0 z-30"
      >
        <Image
          src={"/assets/image/sidebtn.png"}
          alt="bgbtn"
          width={150}
          height={150}
        />
      </motion.div>

      <motion.div
        animate={{ scale: [null, 1.2], rotate: 7 }}
        transition={{ repeat: Infinity, duration: 5, repeatType: "reverse" }}
        className="absolute left-0 bottom-0 z-30"
      >
        <Image
          src={"/assets/image/sidebtn2.png"}
          alt="bgbtn"
          width={150}
          height={150}
        />
      </motion.div>
    </>
  );
}

export default Bingkai;
