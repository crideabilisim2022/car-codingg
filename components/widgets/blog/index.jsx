"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Chip Tuning Nedir ve Neden Önemlidir?",
    summary:
      "Araç performansını artıran chip tuning işlemi hakkında bilmeniz gereken her şey...",
    date: "Mayıs 2025",
    slug: "/blog/chip-tuning-nedir",
    image: "/img/hero/car1.jpg",
    tags: ["Performans", "Yazılım"],
  },
  {
    id: 2,
    title: "Diagnostik Cihazlar Nasıl Çalışır?",
    summary:
      "Modern araçlarda kullanılan arıza tespit sistemlerinin nasıl çalıştığını öğrenin.",
    date: "Nisan 2025",
    slug: "/blog/diagnostik-cihazlar",
    image: "/img/hero/car2.jpg",
    tags: ["Teknoloji", "Servis"],
  },
  {
    id: 3,
    title: "Yazılım Güncellemeleriyle Yakıt Verimliliği",
    summary:
      "Araç yazılımı güncellemelerinin yakıt tüketimine etkisi üzerine bilgilendirici yazı.",
    date: "Mart 2025",
    slug: "/blog/yazilim-guncelleme-verimlilik",
    image: "/img/hero/car3.webp",
    tags: ["Yazılım", "Verimlilik"],
  },
];

export default function BlogSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-red-600 text-center mb-12">
          Blog & Haberler
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-zinc-800 rounded-xl overflow-hidden shadow hover:shadow-red-600/20 transition"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                <p className="text-sm text-red-400 mb-1">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{post.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-red-600/20 text-red-300 text-xs px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={post.slug}
                  className="mt-auto text-sm text-red-500 hover:underline font-medium"
                >
                  Devamını Oku →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
