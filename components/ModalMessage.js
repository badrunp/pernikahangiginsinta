import { motion } from "framer-motion";

function ModalMessage({ message, handleCloseModal, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, transition: { type: "tween" } }}
      className={`fixed w-full max-w-xs sm:max-w-sm pl-3 pr-7 py-3 z-50 top-2 left-2 shadow-xl border border-green-700 bg-green-600 flex ${
        center && "items-center"
      } space-x-2 rounded`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 flex-none text-gray-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
      <p className="text-[11px] text-gray-100 pr-1">{message}</p>

      <button
        type="button"
        onClick={handleCloseModal}
        className="absolute right-2 top-2 bg-green-200 p-[1px] rounded-full text-green-600"
      >
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </motion.div>
  );
}

export default ModalMessage;
