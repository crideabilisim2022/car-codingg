"use client";

import { motion } from "framer-motion";
import { Cpu, Gauge, Settings, Wrench, CheckCircle } from "lucide-react";

const advantages = [
  {
    id: 1,
    icon: Cpu,
    title: "Uzmanlık ve Tecrübe",
    desc: "Yılların verdiği tecrübe ile en güncel ve güvenilir araç yazılım çözümleri.",
  },
  {
    id: 2,
    icon: Gauge,
    title: "Yüksek Performans",
    desc: "Araç performansını optimize eden chip tuning ve yazılım güncellemeleri.",
  },
  {
    id: 3,
    icon: Settings,
    title: "Kesintisiz Destek",
    desc: "7/24 teknik destek ile her zaman yanınızdayız.",
  },
  {
    id: 4,
    icon: Wrench,
    title: "Gelişmiş Diagnostik",
    desc: "Modern cihazlarla hızlı ve doğru arıza tespiti ve müdahale.",
  },
  {
    id: 5,
    icon: CheckCircle,
    title: "Garantili Hizmet",
    desc: "Yaptığımız işlemler ve yazılımlar garanti kapsamındadır.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-red-600 mb-4">
          Neden Biz?
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          OtoYazılım olarak araç yazılım çözümlerinde sunduğumuz avantajlar ve
          farkımız.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {advantages.map(({ id, icon: Icon, title, desc }) => (
          <motion.div
            key={id}
            className="bg-zinc-900 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: id * 0.15 }}
          >
            <Icon size={48} className="text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
