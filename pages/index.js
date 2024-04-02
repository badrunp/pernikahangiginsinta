import Loading from "@/components/Loading";
import MenuBottomBar from "@/components/MenuBottomBar";
import Acara from "@/components/sections/Acara";
import AwalPage from "@/components/sections/AwalPage";
import Footer from "@/components/sections/Footer";
import Galeri from "@/components/sections/Galeri";
import Jumbotron from "@/components/sections/Jumbotron";
import Kado from "@/components/sections/Kado";
import Mempelai from "@/components/sections/Mempelai";
import Ucapan from "@/components/sections/Ucapan";
import Undangan from "@/components/sections/Undangan";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";

// const Jumbotron = React.lazy(() => import("@/components/sections/Jumbotron"));

export default function Home() {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(true);
  const [audio, setAudio] = useState(null);
  const [isPlay, setIsPlay] = useState(false);

  const handleCloseActive = () => {
    setActive(false);
    playAudio();
    document.body.classList.remove("overflow-y-hidden");
  };

  const playAudio = () => {
    audio.loop = true;
    if (isPlay) {
      audio.pause();
      setIsPlay(false);
    } else {
      audio.play();
      setIsPlay(true);
    }
  };

  useEffect(() => {
    if (audio == null) {
      setAudio(new Audio("/assets/mp3/audio.mp3"));
    }
  }, [audio]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          user-scalable="no"
        />
        <title>Undangan Pernikahan Maman & Eka</title>
      </Head>
      <main className="max-w-[428px] mx-auto relative bg-white font-osans">
        <MenuBottomBar handlePlayMusic={playAudio} isPlay={isPlay} />

        <Jumbotron />

        {loading && <Loading awal={true} />}

        <AnimatePresence>
          {active && <AwalPage handleCloseActive={handleCloseActive} />}
        </AnimatePresence>

        <Undangan />

        <Mempelai />

        <Acara />

        <Kado />

        <Ucapan />

        <Galeri />

        <Footer />
      </main>
    </>
  );
}
