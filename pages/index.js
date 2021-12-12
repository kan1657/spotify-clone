import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className=" bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Clone</title>
        <link
          rel="icon"
          href="https://www.freeiconspng.com/uploads/spotify-icon-2.png"
        />
      </Head>
      <main>
        <Sidebar />
        {/* Center */}
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}
