"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-zinc-900 text-white py-20 px-6 md:px-12">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-red-600 mb-6">Hakkımızda</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          OtoYazılım olarak, otomotiv teknolojilerinde en ileri çözümleri sunma
          vizyonuyla yola çıktık. Araç yazılım güncellemeleri, performans
          optimizasyonu, chip tuning ve diagnostik hizmetlerinde profesyonel
          kadromuzla güvenilir ve kaliteli hizmet sunuyoruz. Müşteri memnuniyeti
          ve teknolojik üstünlük, tüm hizmet anlayışımızın temelini oluşturur.
        </p>
      </motion.div>
    </section>
  );
}
