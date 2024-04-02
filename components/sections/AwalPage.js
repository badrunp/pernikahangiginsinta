import Image from "next/image";
import Bingkai from "../Bingkai";
import { motion } from "framer-motion";

function AwalPage({ handleCloseActive }) {
  return (
    <motion.div
      initial={false}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center bg-amber-50 max-w-[428px] w-full h-[100vh] overflow-hidden fixed top-0 left-1/2 -translate-x-1/2 z-50"
    >
      <Bingkai />

      <div>
        <h3 className="uppercase tracking-widest font-semibold text-base mb-8 font-mw text-gray-800">
          Undangan Pernikahan
        </h3>

        <Image
          src={"/assets/image/mempelai/4.jpeg"}
          alt="bgbtn"
          width={180}
          height={100}
          className="rounded-full h-[180px] object-cover object-top mx-auto mb-2"
        />
        <Image
          src={"/assets/image/bingkai-garis.png"}
          alt="bgbtn"
          width={200}
          height={100}
          className="rounded-full h-[80px] object-cover mx-auto mb-4"
        />

        <h1 className="font-bold text-4xl text-center mb-2 font-gv text-gray-800">
          Maman & Eka
        </h1>

        <h4 className="font-semibold uppercase text-center mb-12 text-gray-800">
          Kamis, 23 Februari 2023
        </h4>

        <button
          type="button"
          onClick={handleCloseActive}
          className="font-mw flex items-center space-x-2 py-3 px-8 rounded-full text-sm text-center mx-auto bg-amber-800 text-gray-100 focus:outline-none focus:ring focus:ring-amber-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span>Buka Undangan</span>
        </button>
      </div>
    </motion.div>
  );
}

export default AwalPage;
