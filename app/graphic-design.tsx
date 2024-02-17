"use client";

import { ThreeDCardDemo } from "@/components/snippet/ThreeDCardDemo";
import { EvervaultCardDemo } from "@/components/snippet/evervault-card";
import { motion } from "framer-motion";

export default function GraphicDesign() {
  return (
    <div>
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text 
        text-transparent bg-gradient-to-b from-purple-500 to bg-sky-200 bg-opacity-50"
        >
          Graphic Design <br />
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          We create stunning visuals for your brand. From logos to social media
          posts, we&apos;ve got you covered.
        </p>

        <div className="items-center lg:flex justify-center md:mx-auto md:space-x-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-0 md:px-0"
          >
            <ThreeDCardDemo />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-0 md:px-0"
          >
            <EvervaultCardDemo />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
