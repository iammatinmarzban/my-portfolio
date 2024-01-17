import { Roboto } from "next/font/google";
import Head from "next/head";
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matin </title>
      </Head>

      {/* Set the icon of your page */}
      <Head>
        <link rel="icon" href="/your-icon.png" />
      </Head>
      <main className={roboto.className}>
        <div className="page bg-black h-screen ">
          <div className=" alert bg-gradient-to-r from-[#152C4E]  to-[#152C4E]   via-[#155ae466] w-full my-auto p-2 text-center ">
            <span className="text-white ">
              To get the latest information about me click{" "}
              <a className="hover:underline cursor-pointer"> here</a>.
            </span>
          </div>
          <div className="sticky-navbar flex justify-between">
            <div className="left_side">
              <div className="logo">Logo</div>
              <div>Products</div>
              <div>Portal</div>
              <div>Bridge</div>
              <div>Commiunity</div>
              <div>Resources</div>
            </div>
            <div className="right_side">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
