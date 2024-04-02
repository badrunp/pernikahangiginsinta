import "@/styles/globals.css";
import moment from "moment";

moment.relativeTimeThreshold("s", 60);
moment.relativeTimeThreshold("m", 60);
moment.relativeTimeThreshold("h", 24);
moment.relativeTimeThreshold("d", 7);
moment.relativeTimeThreshold("w", 4);
moment.relativeTimeThreshold("M", 12);

moment.locale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s detik yang lalu",
    s: "baru saja ditambahkan",
    ss: "%d menit yang lalu",
    m: "1 menit yang lalu",
    mm: "%d menit yang lalu",
    h: "1 jam yang lalu",
    hh: "%d jam yang lalu",
    d: "1 hari yang lalu",
    dd: "%d hari yang lalu",
    w: "1 minggu yang lalu",
    ww: "%d minggu yang lalu",
    M: "1 bulan yang lalu",
    MM: "%d bulan yang lalu",
    y: "1 tahun yang lalu",
    yy: "%d tahun yang lalu",
  },
});


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
