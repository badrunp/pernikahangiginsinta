import Image from "next/image";
import { motion } from "framer-motion";

function MempelaiItem({ img, name, text1, text2 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.8 },
      }}
      className="text-center"
    >
      <Image
        src={img}
        alt="men"
        width={180}
        height={180}
        className="h-[180px] object-cover object-top rounded-full mx-auto mb-6"
      />

      <h1 className="text-3xl font-bold mb-2 text-gray-800 font-gv">{name}</h1>
      <p className="text-gray-800 font-semibold">{text1}</p>
      <p className="text-gray-800 font-semibold">{text2}</p>
    </motion.div>
  );
}

export default MempelaiItem;
