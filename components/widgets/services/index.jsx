"use client";

import { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Cpu, Gauge, Settings, Wrench } from "lucide-react";

const services = [
  {
    icon: <Cpu size={40} className="text-red-600" />,
    title: "Araç Yazılımı",
    desc: "Araçlarınız için performans ve güvenlik odaklı yazılım çözümleri.",
  },
  {
    icon: <Gauge size={40} className="text-red-600" />,
    title: "Chip Tuning",
    desc: "Motor performansınızı optimize eden profesyonel chip tuning hizmetleri.",
  },
  {
    icon: <Settings size={40} className="text-red-600" />,
    title: "Diagnostik",
    desc: "Hızlı ve doğru araç arıza tespiti için ileri diagnostik sistemler.",
  },
  {
    icon: <Wrench size={40} className="text-red-600" />,
    title: "ECU Onarımı",
    desc: "ECU arızalarına hızlı müdahale ve onarım hizmetleri.",
  },
  {
    icon: <CheckCircle2 size={40} className="text-red-600" />,
    title: "Yazılım Güncellemeleri",
    desc: "Araç yazılımınızı güncel tutarak maksimum performans sağlıyoruz.",
  },
];

const useAnimatedCounter = (target, duration = 1500, loopDelay = 3000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    let loopTimeout;
    let current = 0;

    const startAnimation = () => {
      const fps = 30;
      const steps = duration / (1000 / fps); // kaç adımda bitecek
      const increment = target / steps;

      current = 0;
      setCount(0);

      intervalId = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(intervalId);
          setCount(target);

          // Belirli bir süre sonra tekrar başa dön
          loopTimeout = setTimeout(() => {
            startAnimation(); // tekrar başlat
          }, loopDelay);
        } else {
          setCount(Math.floor(current));
        }
      }, 1000 / fps);
    };

    startAnimation();

    return () => {
      clearInterval(intervalId);
      clearTimeout(loopTimeout);
    };
  }, [target, duration, loopDelay]);

  return count;
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const customers = useAnimatedCounter(500);
  const projects = useAnimatedCounter(1200);
  const years = useAnimatedCounter(10);

  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-red-600 mb-16">
          Hizmetlerimiz & Başarılarımız
        </h2>

        {/* Hizmetler Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mb-20">
          {services.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-zinc-800 p-8 rounded-xl shadow-lg hover:shadow-red-600 transition cursor-pointer"
            >
              <div className="mb-6 flex justify-center">{icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Başarı Göstergeleri */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center gap-12"
        >
          <div className="text-center">
            <h3 className="text-6xl font-bold text-red-600">{customers}+</h3>
            <p className="text-gray-400 mt-2 text-lg">Mutlu Müşteri</p>
          </div>
          <div className="text-center">
            <h3 className="text-6xl font-bold text-red-600">{projects}+</h3>
            <p className="text-gray-400 mt-2 text-lg">Başarılı Proje</p>
          </div>
          <div className="text-center">
            <h3 className="text-6xl font-bold text-red-600">{years}+</h3>
            <p className="text-gray-400 mt-2 text-lg">Yıllık Deneyim</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
