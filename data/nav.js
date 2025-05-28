const menuItems = [
  { label: "Anasayfa", href: "/" },
  {
    label: "Hizmetler",
    subItems: [
      { label: "Chip Tuning", href: "/chip-tuning" },
      { label: "Diagnostik", href: "/diagnostik" },
      { label: "Yazılım Güncelleme", href: "/yazilim" },
    ],
  },
  {
    label: "Kurumsal",
    subItems: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Referanslar", href: "/referanslar" },
    ],
  },
  { label: "İletişim", href: "/iletisim" },
];

export default menuItems;
