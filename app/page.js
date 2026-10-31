'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaMapMarkerAlt,
  FaRobot,
  FaBrain,
  FaNetworkWired,
  FaLayerGroup,
} from 'react-icons/fa'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'

export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const blogs = [
    {
      id: 1,
      title: 'Belajar Next.js',
      summary: 'Next.js memudahkan pembuatan aplikasi React dengan fitur routing, SSR, dan lainnya.',
      image: '/images/blog1.png',
      link: 'https://nextjs.org/docs',
    },
    {
      id: 2,
      title: 'Mengenal Laravel untuk Web Development',
      summary: 'Laravel adalah framework PHP yang populer dengan sintaks elegan, fitur lengkap, dan ekosistem yang kuat untuk pengembangan web modern.',
      image: '/images/blog5.png',
      link: 'https://laravel.com/docs/12.x',
    },
    {
      id: 3,
      title: 'Menggunakan Tailwind CSS',
      summary: 'Tailwind CSS mempercepat styling dengan utility-first approach dan responsive layout.',
      image: '/images/blog3.png',
      link: 'https://tailwindcss.com/docs',
    },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/85 backdrop-blur-md shadow-xs z-50 border-b border-gray-100 transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-extrabold tracking-tight text-gray-900 group">
            agus<span className="text-blue-600 group-hover:text-blue-700 transition">.dev</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 text-gray-600 font-medium text-sm">
              <li>
                <a href="#home" className="hover:text-blue-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 transition">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-600 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition">
                  Kontak
                </a>
              </li>
            </ul>

            <div className="flex items-center space-x-3 border-l border-gray-200 pl-6">
              <a
                href="https://github.com/antulaot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition hover:shadow-sm"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 rounded-lg focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 px-6 py-4 shadow-lg"
            >
              <ul className="flex flex-col space-y-3 font-medium text-gray-700">
                <li>
                  <a
                    href="#home"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1 hover:text-blue-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1 hover:text-blue-600"
                  >
                    Tentang
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1 hover:text-blue-600"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1 hover:text-blue-600"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <a
                  href="https://github.com/antulaot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600"
                >
                  <FaGithub size={18} />
                  <span>@antulaot</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded bg-blue-600 text-white"
                >
                  Kontak
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Home / Hero */}
      <section
        id="home"
        className="pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50/70 via-white to-gray-50/40 text-center relative overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl px-6 relative z-10"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium bg-blue-50 border border-blue-200 text-blue-700 shadow-xs mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            AI-Native Workflow • Exploring System Design & AI Engineering
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            Halo, Saya{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Agus
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mt-2 font-mono">
              AI-Native Engineer
            </span>
          </h1>

          {/* Subtitle / Bio summary */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            Mahasiswa di{' '}
            <a
              href="https://itkk.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-4 transition"
            >
              Institut Teknologi Keling Kumang
            </a>{' '}
            yang berfokus membangun aplikasi modern dengan pendekatan <em>AI-Native</em>. Sedang aktif mendalami <span className="font-semibold text-gray-800">System Design</span> dan memiliki ketertarikan tinggi pada <span className="font-semibold text-gray-800">AI Engineering</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Pelajari Profil Saya</span>
              <FiArrowRight />
            </a>
            <a
              href="https://github.com/antulaot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium shadow-sm transition-all hover:-translate-y-0.5"
            >
              <FaGithub className="text-lg" />
              <span>Kunjungi GitHub</span>
            </a>
          </div>

          {/* Quick Social Links */}
          <div className="flex items-center justify-center gap-4 text-gray-500">
            <a
              href="https://github.com/antulaot"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-gray-100 hover:text-gray-900 transition"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://wa.me/6289528039177"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-emerald-50 hover:text-emerald-600 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.instagram.com/agus1398_?igsh=MW42dnRyZDF6aG5hcA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-pink-50 hover:text-pink-600 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/155VFPF9Lc/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-blue-50 hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-white text-gray-900 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Foto Profil & Badge Kiri */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
              <div className="relative group">
                {/* Glow Background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-700" />

                {/* Photo container */}
                <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-gray-100">
                  <div className="relative w-64 h-72 sm:w-72 sm:h-80 overflow-hidden rounded-xl">
                    <Image
                      src="/images/profil.png"
                      alt="Foto Profil Agus"
                      fill
                      sizes="(max-width: 640px) 256px, 288px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-xs border border-gray-100 shadow-lg px-4 py-2 rounded-xl flex items-center gap-2">
                    <FaRobot className="text-blue-600 text-lg" />
                    <div>
                      <p className="text-xs text-gray-500 leading-none">Alur Kerja</p>
                      <p className="text-xs font-bold text-gray-800">AI-Native Eng</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Konten Kanan */}
            <div className="lg:col-span-7 order-2 lg:order-2">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 inline-block">
                TENTANG SAYA
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
                Membangun Software Modern Lewat Arsitektur Sistem yang Kokoh & Kolaborasi AI
              </h2>
              <p className="text-base sm:text-lg mb-4 text-gray-700 leading-relaxed">
                Saya adalah mahasiswa di <strong>Institut Teknologi Keling Kumang (ITKK)</strong> yang mempraktikkan alur kerja <em>AI-Native Engineering</em>. Alih-alih terpaku hanya pada penulisan sintaks manual, saya fokus membedah kebutuhan masalah, merancang arsitektur sistem, dan memanfaatkan model kecerdasan buatan sebagai rekan rekayasa perangkat lunak untuk menghasilkan solusi nyata dengan cepat dan efisien.
              </p>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Saat ini saya aktif mendalami prinsip <strong>System Design</strong> untuk memahami bagaimana merancang aliran data, struktur database, serta backend yang skalabel. Di sisi lain, saya memiliki antusiasme mendalam pada <strong>AI Engineering</strong>—mengeksplorasi bagaimana AI dapat diintegrasikan secara cerdas ke dalam aplikasi masa depan.
              </p>

              {/* Highlights 4 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50/80 border border-gray-100">
                  <div className="p-2.5 rounded-lg bg-blue-100 text-blue-700">
                    <FaGraduationCap size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-medium">Pendidikan</h4>
                    <p className="text-sm font-semibold text-gray-900">IT Keling Kumang</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50/80 border border-gray-100">
                  <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-700">
                    <FaBrain size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-medium">Fokus Belajar</h4>
                    <p className="text-sm font-semibold text-gray-900">System Design</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50/80 border border-gray-100">
                  <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-700">
                    <FaRobot size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-medium">Minat Khusus</h4>
                    <p className="text-sm font-semibold text-gray-900">AI Engineering</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50/80 border border-gray-100">
                  <div className="p-2.5 rounded-lg bg-purple-100 text-purple-700">
                    <FaLayerGroup size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-medium">Eksplorasi Stack</h4>
                    <p className="text-sm font-semibold text-gray-900">Next.js, Nuxt, Laravel</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-24 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 inline-block">
              ARTIKEL & CATATAN
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Blog & Dokumentasi Belajar
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="group bg-white rounded-xl shadow-xs hover:shadow-md border border-gray-100 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
                onClick={() => setSelectedBlog(blog)}
              >
                <div className="relative w-full h-44 overflow-hidden bg-gray-100">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {blog.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-50 text-blue-600 text-xs font-semibold inline-flex items-center gap-1">
                    <span>Baca Ringkasan</span>
                    <FiArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Blog */}
        {selectedBlog && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedBlog(null)}
          >
            <div
              className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-2xl border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition"
                aria-label="Tutup"
              >
                <FiX size={20} />
              </button>

              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {selectedBlog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {selectedBlog.summary}
              </p>

              <div className="flex gap-3">
                <a
                  href={selectedBlog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-blue-700 transition"
                >
                  Buka Sumber Referensi
                </a>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 bg-[#f8fafc] text-gray-900 border-t border-gray-100"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 inline-block">
              HUBUNGI SAYA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Mari Terhubung & Berdiskusi
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-lg mx-auto">
              Punya pertanyaan, tawaran proyek, atau ingin bertukar pikiran seputar web development? Silakan hubungi saya melalui form di bawah atau via media sosial.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <form className="space-y-4 mb-8">
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  className="w-full border border-gray-200 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition text-sm"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-200 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition text-sm"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-sm font-semibold text-gray-700">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  className="w-full border border-gray-200 px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition text-sm"
                  rows={4}
                  placeholder="Tulis pesan atau topik diskusi Anda..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md shadow-blue-500/20 transition-all hover:shadow-lg cursor-pointer"
                onClick={() => {
                  const nama = document.querySelector('input[name="nama"]')?.value
                  const email = document.querySelector('input[name="email"]')?.value
                  const pesan = document.querySelector('textarea[name="pesan"]')?.value

                  if (!nama || !email || !pesan) {
                    alert('Mohon lengkapi semua kolom.')
                    return
                  }

                  const text = `Halo, saya ${nama}\nEmail: ${email}\nPesan: ${pesan}`
                  const waLink = `https://wa.me/6289528039177?text=${encodeURIComponent(text)}`
                  window.open(waLink, '_blank')
                }}
              >
                Kirim via WhatsApp
              </button>
            </form>

            {/* Media Sosial */}
            <div className="pt-6 border-t border-gray-100 text-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">
                Saluran Kontak & Media Sosial
              </h3>
              <div className="flex justify-center space-x-5 text-2xl">
                <a
                  href="https://github.com/antulaot"
                  className="text-gray-700 hover:text-black transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://wa.me/6289528039177"
                  className="text-green-600 hover:text-green-700 transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.facebook.com/share/155VFPF9Lc/?mibextid=wwXIfr"
                  className="text-blue-600 hover:text-blue-700 transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/agus1398_?igsh=MW42dnRyZDF6aG5hcA%3D%3D&utm_source=qr"
                  className="text-pink-600 hover:text-pink-700 transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-white border-t border-gray-100 text-center text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Agus. Dibuat dengan Next.js & Tailwind CSS.
        </p>
      </footer>
    </main>
  )
}
