import { Inter } from "next/font/google";
import { FaReact, FaVuejs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiFramer, SiTailwindcss } from "react-icons/si";
import Templates from "@/components/Templates";
import { motion } from "framer-motion";
import CallToAction from "@/components/CallToAction";
import Vue from "../../public/vue.svg";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main className=" flex flex-col items-center justify-center">
        <div className="w-full py-[8rem] flex gap-6 flex-col px-[8rem] items-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
            className="text-4xl w-[80%] font-bold tracking-tight text-gray-900 md:text-6xl text-center"
          >
            Beautiful <span className="text-blue-500">Tailwind CSS</span>{" "}
            templates for your next project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
            className="text-center w-[90%] text-xl text-gray-500"
          >
            Beautifully designed landing pages, websites, and dashboards built
            on top of{" "}
            <span className="font-semibold text-gray-800">Tailwind CSS</span>{" "}
            and fully coded in{" "}
            <span className="font-semibold text-gray-800">HTML, React</span> and{" "}
            <span className="font-semibold text-gray-800">Next.js</span>. A
            great starting point for your next project, saving you weeks of
            development time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
            className="flex flex-row gap-6 items-center"
          >
            <FaReact className="text-3xl text-sky-400" />
            <FaHtml5 className="text-3xl text-orange-700" />
            <RiNextjsFill className="text-3xl" />
            <img src={Vue.src} />
            <SiTailwindcss className="text-3xl text-blue-400" />
            <SiFramer className="text-2xl text-gray-800" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeInOut" }}
            className="flex flex-row gap-6 py-4 items-center"
          >
            <Link href="/docs">
              <button className="bg-white font-medium border border-gray-200 transition-all hover:opacity-80 flex flex-row items-center gap-2 text-gray-800 text-sm px-4 py-3 rounded shadow-lg">
                <p>Read the Docs </p>
              </button>
            </Link>
            <Link href="/getAccess">
              <button className="bg-blue-500 transition-all hover:opacity-80 flex flex-row items-center gap-2 text-white text-sm px-4 py-3 rounded shadow-lg">
                <p>Get Unlimited Access</p>{" "}
              </button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Templates />
      <CallToAction />
    </div>
  );
}
