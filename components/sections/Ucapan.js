import { useEffect, useState } from "react";
import Loading from "../Loading";
import {
  collection,
  addDoc,
  getDocs,
  getCountFromServer,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import Moment from "react-moment";
import ModalMessage from "../ModalMessage";
import { AnimatePresence } from "framer-motion";

function InputName({ value, handleChangeInput, invalid }) {
  return (
    <div className="mb-4">
      <label className="block mb-1.5 text-gray-800 ">Nama</label>
      <input
        type="text"
        placeholder="Nama Anda"
        value={value}
        onChange={handleChangeInput}
        name="name"
        className={`w-full rounded-md border py-2.5 px-3 focus:outline-none focus:border focus:ring-2 ${
          invalid
            ? "border-red-400 focus:ring-red-200 focus:border-red-600"
            : "border-gray-400 focus:ring-blue-200 focus:border-blue-600"
        }`}
      />
      {invalid && (
        <span className="text-sm text-red-500">Nama tidak boleh kosong!</span>
      )}
    </div>
  );
}

function Textarea({ value, handleChangeInput, invalid }) {
  return (
    <div className="mb-4">
      <label className="block mb-1.5 text-gray-800 ">Ucapan</label>
      <textarea
        rows={5}
        value={value}
        onChange={handleChangeInput}
        name="ucapan"
        placeholder="Minimal 6 Karakter"
        className={`w-full rounded-md border border-gray-400 py-2.5 px-3 focus:outline-none focus:border focus:ring-2 ${
          invalid
            ? "border-red-400 focus:ring-red-200 focus:border-red-600"
            : "border-gray-400 focus:ring-blue-200 focus:border-blue-600"
        } `}
      ></textarea>
      {invalid && (
        <span className="text-sm text-red-500">Minimal 6 karakter!</span>
      )}
    </div>
  );
}

function ButtonSend({ loading, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`py-2 px-6 bg-blue-600 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 flex items-center ${
        loading ? "space-x-2 bg-opacity-80" : "space-x-1"
      }`}
    >
      <span>Kirim</span>
      {loading ? (
        <Loading />
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
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      )}
    </button>
  );
}

function SkeletonUcapan() {
  return (
    <div className="pb-3 border-b border-gray-300">
      <div className="flex items-center space-x-1.5 mb-4">
        <div className="w-[100px] h-[12px] bg-gray-200 animate-pulse rounded"></div>
        <span className="w-[5px] h-[5px] bg-gray-200 rounded-full" />
        <div className="w-[50px] h-[12px] bg-gray-200 animate-pulse rounded"></div>
      </div>
      <div className="space-y-3">
        <div className="w-[350px] h-[10px] bg-gray-200 animate-pulse rounded"></div>
        <div className="w-[250px] h-[10px] bg-gray-200 animate-pulse rounded"></div>
        <div className="w-[150px] h-[10px] bg-gray-200 animate-pulse rounded"></div>
      </div>
    </div>
  );
}

function Ucapan() {
  const [inputData, setInputData] = useState({
    name: "",
    ucapan: "",
    loading: false,
  });
  const [data, setData] = useState([]);
  const [countData, setCountData] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMoreData, setLoadingMoreData] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [detailData, setDetailData] = useState({
    limit: 5,
    order: "desc",
  });
  const [success, setSuccess] = useState(false);

  const handleChangeInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSendUcapan = async () => {
    setIsClick(true);
    if (inputData.name != "" && inputData.ucapan.length >= 6) {
      setInputData({ ...inputData, loading: true });
      try {
        const docRef = await addDoc(collection(db, "ucapan"), {
          name: inputData.name,
          ucapan: inputData.ucapan,
          waktu: new Date().toString(),
          time: new Date().getTime(),
        });
        setData([
          { name: inputData.name, ucapan: inputData.ucapan, waktu: new Date() },
          ...data,
        ]);
        setIsClick(false);
        setCountData(countData + 1);
        // console.log("Document written with ID: ", docRef.id);
        setSuccess(true);
      } catch (error) {
        console.log(error);
        setSuccess(false);
      } finally {
        setInputData({ ...inputData, ucapan: "", loading: false });
      }
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 10000);
    }
  }, [success]);

  async function getData(order, batas) {
    setLoading(true);
    try {
      const q = query(
        collection(db, "ucapan"),
        orderBy("time", order),
        limit(batas)
      );
      const querySnapshot = await getDocs(q);
      const newData = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        newData.push(doc.data());
      });
      setData(newData);
      // console.log(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(detailData.order, 5);
  }, []);

  useEffect(() => {
    const getCountData = async () => {
      const coll = collection(db, "ucapan");
      const snapshot = await getCountFromServer(coll);
      // console.log("count: ", snapshot.data().count);

      setCountData(snapshot.data().count);
    };

    getCountData();
  }, []);

  const handleClickFilter = (by = "desc") => {
    if (detailData.order == by) return;
    let limit = 5;
    let order = by;
    if (by == "asc") {
      getData(order, limit);
    } else {
      getData(order, limit);
    }
    setDetailData({
      limit,
      order,
    });
  };

  const getMoreData = async (lastTime, order, batas) => {
    setLoadingMoreData(true);
    try {
      const q = query(
        collection(db, "ucapan"),
        where("time", order == "desc" ? "<" : ">", lastTime),
        orderBy("time", order),
        limit(batas)
      );
      const querySnapshot = await getDocs(q);
      const newData = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        newData.push(doc.data());
      });
      setData([...data, ...newData]);
      // console.log(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMoreData(false);
    }
  };

  const handleMoreData = async () => {
    getMoreData(data[data.length - 1].time, detailData.order, detailData.limit);
  };

  return (
    <div id="ucapan" className="w-full h-auto relative pt-24 mb-12 px-4">
      <AnimatePresence>
        {success && (
          <ModalMessage
            message="Terima kasih atas Do'a yang Anda berikan di hari bahagia kami. Semoga Anda
        berkenan untuk menikmati rangkaian acara kami pada saat acara
        berlangsung."
            handleCloseModal={() => setSuccess(false)}
          />
        )}
      </AnimatePresence>

      <h1 className="text-gray-800 text-2xl text-center font-semibold mb-1 font-mw">
        Kirim Do'a dan Ucapan
      </h1>
      <p className="mb-10 text-gray-800 text-center text-sm">
        Tuliskan ucapan berupa harapan ataupun do'a untuk kedua mempelai.
      </p>

      <form className="mb-20">
        <InputName
          value={inputData.name}
          invalid={inputData.name == "" && isClick}
          handleChangeInput={handleChangeInput}
        />
        <Textarea
          value={inputData.ucapan}
          invalid={inputData.ucapan.length < 6 && isClick}
          handleChangeInput={handleChangeInput}
        />
        <ButtonSend
          loading={inputData.loading}
          handleClick={handleSendUcapan}
        />
      </form>

      <div className="space-y-3 relative">
        {data.length > 0 && (
          <div className="border-b border-gray-300 pb-3">
            <div className="flex items-center space-x-2 mb-1">
              <h2 className="text-gray-800 font-bold text-xl">Ucapan</h2>
              <h4 className="text-sm font-semibold rounded-full flex items-center justify-center">
                {countData}
              </h4>
            </div>
            <div className="space-x-1">
              <button
                type="button"
                onClick={() => handleClickFilter("desc")}
                className={`py-1.5 px-4 rounded-full text-sm ${
                  detailData.order == "desc"
                    ? "bg-gray-400 text-white"
                    : "text-gray-800 border border-gray-300"
                }`}
              >
                Terbaru
              </button>
              <button
                type="button"
                onClick={() => handleClickFilter("asc")}
                className={`py-1.5 px-4 rounded-full text-sm ${
                  detailData.order == "asc"
                    ? "bg-gray-400 text-white"
                    : "text-gray-800 border border-gray-300"
                }`}
              >
                Terdahulu
              </button>
            </div>
          </div>
        )}

        {loading ? (
          <>
            <SkeletonUcapan />
            <SkeletonUcapan />
            <SkeletonUcapan />
            <SkeletonUcapan />
            <SkeletonUcapan />
          </>
        ) : (
          data.length > 0 &&
          data.map((item, i) => (
            <div className="border-b border-gray-300 pb-3" key={i}>
              <div className="flex items-center space-x-1.5 mb-1">
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <span className="w-[5px] h-[5px] bg-gray-400 rounded-full" />
                <span className="text-sm text-gray-500">
                  {" "}
                  <Moment fromNow ago locale>
                    {new Date(item.waktu)}
                  </Moment>
                </span>
              </div>
              <p className="text-sm text-gray-800 tracking-wide">
                {item.ucapan}
              </p>
            </div>
          ))
        )}

        {loadingMoreData && (
          <>
            <SkeletonUcapan />
            <SkeletonUcapan />
            <SkeletonUcapan />
            <SkeletonUcapan />
            <SkeletonUcapan />
          </>
        )}

        {data.length > 0 && data.length != countData && !loadingMoreData && (
          <div className="bg-gradient-to-t from-white to-white/50 w-full h-[100px] absolute -bottom-10 left-0 flex items-center justify-center">
            <button
              type="button"
              onClick={handleMoreData}
              className={`text-xs py-2 px-5 bg-blue-600 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 flex items-center space-x-1`}
            >
              <span>Lihat Ucapan Lainnya</span>
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
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ucapan;
