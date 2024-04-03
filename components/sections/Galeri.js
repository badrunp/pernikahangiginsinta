import ModalImage from "react-modal-image";
import { motion } from "framer-motion";

function Galeri() {
 return (
  <div id="galeri" className="w-full h-auto relative pb-24 px-4 pt-12">
   <h1 className="text-gray-800 text-2xl text-center font-semibold mb-1 font-mw">
    Galeri Foto
   </h1>
   <p className="mb-10 text-gray-800 text-center text-sm">
    Foto-foto kebahagiaan kami yang akan kami kenang selalu.
   </p>

   <div className="grid grid-cols-2 gap-2">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
     <ModalImage
      small={"/assets/image/mempelai/galery1.jpg"}
      large={"/assets/image/mempelai/galery1.jpg"}
      className="relative w-full h-[190px] object-cover rounded-md"
      hideDownload
      hideZoom
     />
    </motion.div>
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
     <ModalImage
      small={"/assets/image/mempelai/galery2.jpg"}
      large={"/assets/image/mempelai/galery2.jpg"}
      className="relative w-full h-[190px] object-cover rounded-md"
      hideDownload
      hideZoom
     />
    </motion.div>

    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
     <ModalImage
      small={"/assets/image/mempelai/galery3.jpg"}
      large={"/assets/image/mempelai/galery3.jpg"}
      className="relative w-full h-[190px] object-cover rounded-md object-top"
      hideDownload
      hideZoom
     />
    </motion.div>
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
     <ModalImage
      small={"/assets/image/mempelai/galery4.jpg"}
      large={"/assets/image/mempelai/galery4.jpg"}
      className="relative w-full h-[190px] object-cover rounded-md object-top"
      hideDownload
      hideZoom
     />
    </motion.div>
   </div>
  </div>
 );
}

export default Galeri;
