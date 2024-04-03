import { Html, Head, Main, NextScript } from "next/document";

const host = "https://pernikahangiginsinta.vercel.app";

export default function Document() {
 return (
  <Html lang="en">
   <Head>
    <meta property="og:title" content="Undangan Pernikahan Gigin & Sinta" />
    <meta
     property="og:image"
     content={host + "/assets/image/mempelai/galery1.jpg"}
    />
    <meta
     property="og:description"
     content="Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan Do'a restu di acara berbahagia kami"
    />
    <meta name="twitter:title" content="Undangan Pernikahan Gigin & Sinta" />
    <meta
     name="twitter:image"
     content={host + "/assets/image/mempelai/galery1.jpg"}
    />
    <meta
     name="twitter:url"
     content={host + "/assets/image/mempelai/galery1.jpg"}
    />
    <meta
     name="twitter:card"
     content={host + "/assets/image/mempelai/galery1.jpg"}
    />
    <meta
     name="description"
     content="Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan Do'a restu di acara berbahagia kami"
    />
    <link rel="icon" href="/balloons.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link
     rel="preconnect"
     href="https://fonts.gstatic.com"
     crossOrigin="true"
    ></link>
    <link
     href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
     rel="stylesheet"
    ></link>
    <link
     href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
     rel="stylesheet"
    ></link>
    <link
     href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
     rel="stylesheet"
    ></link>
   </Head>
   <body className="antialiased bg-gray-50 overflow-y-hidden">
    <Main />
    <NextScript />
   </body>
  </Html>
 );
}
