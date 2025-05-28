import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo ve Hakkımızda */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h2 className="text-2xl font-bold text-red-600 mb-4">OtoYazılım</h2>
          <p className="text-sm text-gray-300">
            OtoYazılım, araç yazılım çözümleri, chip tuning, diagnostik
            hizmetler ve araç elektroniği alanında uzmanlaşmıştır.
          </p>
        </div>

        {/* Hizmetler */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="text-lg font-semibold mb-3 text-red-500">Hizmetler</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/chip-tuning" className="hover:text-red-400">
                Chip Tuning
              </Link>
            </li>
            <li>
              <Link href="/diagnostik" className="hover:text-red-400">
                Diagnostik
              </Link>
            </li>
            <li>
              <Link href="/yazilim" className="hover:text-red-400">
                Yazılım Güncellemeleri
              </Link>
            </li>
            <li>
              <Link href="/ecu" className="hover:text-red-400">
                ECU Onarımı
              </Link>
            </li>
          </ul>
        </div>

        {/* Kurumsal */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="text-lg font-semibold mb-3 text-red-500">Kurumsal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/hakkimizda" className="hover:text-red-400">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/referanslar" className="hover:text-red-400">
                Referanslar
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-red-400">
                İletişim
              </Link>
            </li>
            <li>
              <Link href="/kvkk" className="hover:text-red-400">
                KVKK Politikası
              </Link>
            </li>
          </ul>
        </div>

        {/* İletişim */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="text-lg font-semibold mb-3 text-red-500">İletişim</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2 justify-center sm:justify-start">
              <Phone size={16} /> +90 555 123 45 67
            </li>
            <li className="flex items-center gap-2 justify-center sm:justify-start">
              <Mail size={16} /> info@otoyazilim.com
            </li>
            <li className="text-center sm:text-left">İkitelli OSB, İstanbul</li>
          </ul>
          <div className="flex space-x-4 mt-4 justify-center sm:justify-start">
            <a href="#" className="hover:text-red-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-red-500">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-red-500">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} OtoYazılım. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
