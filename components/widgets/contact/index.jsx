"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 px-6 md:px-12 text-white"
      style={{ backgroundImage: "url(/img/hero/car1.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
          Hemen İletişime Geçin
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Uzman ekibimizle tanışın, aracınız için en uygun yazılım çözümlerini
          birlikte planlayalım.
        </p>
        <Link
          href="/iletisim"
          className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold text-lg shadow-lg transition"
        >
          Bize Ulaşın
        </Link>
      </motion.div>
    </section>
  );
}
