"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
import Navbar from "../Navbar";
import JoinUsSection from "../Joinwithus";
import Footer from "../Footer";
import Hero from "../Hero"


const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Page() {

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <Navbar />

      <main className="container py-12">
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-10 items-center pb-12 border-b"
        >

          {/* LEFT COLUMN — EXACTLY SAME */}
          <div className="col-span-2">
            <motion.p variants={fadeUp} className="mt-3 pb-4 text-l md:text-l font-light text-gray-600">
              ✌️ Grow your career. Build your team.
            </motion.p>

            <motion.h1 variants={fadeUp} className="text-4xl tracking-tighter md:text-8xl font-regular text-gray-900">
              We are rising soon !!
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-8 text-gray-600 font-light max-w-xl">
              We're crafting an experience that will change the way you grow your career. Stay tuned.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8  flex flex-col sm:flex-row gap-10 item-center ">
              <div>
                <a href="./" className="inline-flex mr-4 items-center gap-2 px-5 py-3 bg-primary text-sm text-white rounded-md font-semibold hover:opacity-95">
                  BACK TO HOME
                </a>
                <a href="mailto:progrize.app@gmail.com" className="inline-flex mt-4 md:ml-4 items-center gap-2 px-5 py-3 border border-gray-200 text-sm rounded-md hover:bg-gray-50">
                  EMAIL TO US
                </a>
              </div>
            </motion.div>
          </div>

        </motion.section>

        <JoinUsSection />


      </main>
      <Footer />
    </div>
  );
}
