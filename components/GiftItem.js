import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";

function GiftItem({ img, buttonText = "", lists, no, handleSuccessCopy }) {
  const [nomor, setNomor] = useState({
    text: no,
    success: false,
  });

  const handleCopy = () => {
    setNomor({ ...nomor, success: true });
    if (nomor.success) return;
    handleSuccessCopy();
  };

  useEffect(() => {
    if (nomor.success) {
      setTimeout(() => {
        setNomor({ ...nomor, success: false });
      }, 5500);
    }
  }, [nomor.success]);

  return (
    <div className="w-[300px] mx-auto">
      <Image
        src={img}
        alt={img}
        width={150}
        height={200}
        className="object-cover mb-3 mx-auto"
      />
      {lists.map((item) => (
        <h4
          className={`text-center tracking-wide ${
            item.id == lists.length && "mb-4"
          }`}
          key={item.id}
        >
          <span className="font-semibold">{item.title}</span> {item.value}
        </h4>
      ))}
      <CopyToClipboard
        text={nomor.success ? null : nomor.text}
        onCopy={handleCopy}
      >
        <button
          className={`px-4 py-2 mx-auto flex items-center space-x-2 focus:outline-none ${
            nomor.success ? "bg-green-600 ring-green-200" : "bg-blue-600"
          } focus:ring rounded-full text-gray-100`}
        >
          {nomor.success ? (
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
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          ) : (
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
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
          )}
          <p className="text-sm tracking-wide">{buttonText}</p>
        </button>
      </CopyToClipboard>
    </div>
  );
}

export default GiftItem;
