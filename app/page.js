'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import {
  FiX,
  FiArrowUpRight,
  FiLayers,
  FiDatabase,
  FiServer,
  FiCode,
  FiSend,
  FiMapPin,
  FiBookOpen,
} from 'react-icons/fi'

export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null)

  const scrollTo = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', `#${id}`)
    }
  }

  const blogs = [
    {
      id: 1,
      title: 'Belajar Next.js',
      summary:
        'Catatan ringkas fitur dasar Next.js: routing berbasis folder, server components, image optimization, dan rendering statis.',
      image: '/images/blog1.png',
      link: 'https://nextjs.org/docs',
    },
    {
      id: 2,
      title: 'Mengenal Laravel untuk Web Development',
      summary:
        'Memahami arsitektur MVC, ORM Eloquent, database migrations, dan ekosistem backend Laravel untuk aplikasi web modern.',
      image: '/images/blog5.png',
      link: 'https://laravel.com/docs/12.x',
    },
    {
      id: 3,
      title: 'Menggunakan Tailwind CSS',
      summary:
        'Pola penyusunan antarmuka dengan utility-first CSS yang fleksibel, konsisten, dan responsif tanpa menulis file CSS terpisah.',
      image: '/images/blog3.png',
      link: 'https://tailwindcss.com/docs',
    },
  ]

  const focusAreas = [
    {
      icon: <FiDatabase className="text-zinc-800 text-xl" />,
      title: 'Pemodelan Data & Database',
      description:
        'Mempelajari relasi skema data, normalisasi tabel, integritas data, dan optimasi query menggunakan PostgreSQL dan MySQL.',
      tag: 'Storage & Schema',
    },
    {
      icon: <FiServer className="text-zinc-800 text-xl" />,
      title: 'Desain & Alur API',
      description:
        'Menyusun endpoint RESTful yang terstruktur, standardisasi respons JSON, dan komunikasi data konsisten antara client dan server.',
      tag: 'Networking & API',
    },
    {
      icon: <FiLayers className="text-zinc-800 text-xl" />,
      title: 'Arsitektur Sistem Modular',
      description:
        'Menerapkan pemisahan tanggung jawab (separation of concerns) agar arsitektur kode bersih, modular, dan mudah dipelihara.',
      tag: 'System Architecture',
    },
    {
      icon: <FiCode className="text-zinc-800 text-xl" />,
      title: 'Eksplorasi Modern Stack',
      description:
        'Bereksperimen membangun aplikasi nyata menggunakan Next.js, Nuxt 3, Laravel, Supabase, dan Bun runtime performan tinggi.',
      tag: 'Ecosystem & Runtime',
    },
  ]

  const techStack = [
    'Next.js',
    'Nuxt 3',
    'Laravel',
    'Vue.js',
    'React',
    'PostgreSQL',
    'MySQL',
    'Supabase',
    'Tailwind CSS',
    'Bun Runtime',
    'Git & GitHub',
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-200 selection:text-zinc-900 flex flex-col">
      {/* Fixed Full-Width Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 transition">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-18 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => scrollTo(e, 'home')}
            className="font-mono text-base font-bold tracking-tight text-zinc-900 hover:text-zinc-600 transition flex items-center gap-1 cursor-pointer"
          >
            agus<span className="text-zinc-400 font-normal">.dev</span>
          </a>

          <nav className="flex items-center space-x-6 sm:space-x-8 text-sm font-medium text-zinc-600">
            <a
              href="#home"
              onClick={(e) => scrollTo(e, 'home')}
              className="hover:text-zinc-950 transition cursor-pointer"
            >
              Home
            </a>
            <a
              href="#focus"
              onClick={(e) => scrollTo(e, 'focus')}
              className="hover:text-zinc-950 transition cursor-pointer"
            >
              Fokus
            </a>
            <a
              href="#notes"
              onClick={(e) => scrollTo(e, 'notes')}
              className="hover:text-zinc-950 transition cursor-pointer"
            >
              Catatan
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="hover:text-zinc-950 transition cursor-pointer"
            >
              Kontak
            </a>
            <a
              href="https://github.com/antulaot"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-zinc-200 text-xs font-mono text-zinc-800 hover:text-zinc-950 hover:bg-zinc-50 transition shadow-2xs"
            >
              <FaGithub size={13} />
              <span>GitHub</span>
              <FiArrowUpRight size={12} className="text-zinc-400" />
            </a>
          </nav>
        </div>
      </header>

      {/* Main Sections - Setiap section 1 layar penuh (min-h-screen) */}
      <main className="flex-1">
        {/* Section 1: Home / Hero (Full Viewport Height) */}
        <section
          id="home"
          className="min-h-screen w-full flex flex-col justify-center scroll-mt-18 pt-24 pb-16"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Teks Kiri */}
              <div className="lg:col-span-8 space-y-7">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-zinc-100 text-zinc-700 border border-zinc-200/80 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Institut Teknologi Keling Kumang • Kelas Sore
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 leading-tight">
                    Halo, Saya Agus.
                  </h1>
                  <p className="text-lg sm:text-xl text-zinc-500 font-mono mt-3">
                    Exploring Web Engineering & System Design
                  </p>
                </div>

                <div className="space-y-4 text-zinc-700 leading-relaxed text-base sm:text-lg max-w-3xl">
                  <p>
                    Saya mahasiswa di Institut Teknologi Keling Kumang yang berfokus mendalami arsitektur perangkat lunak, perancangan database relasional, dan dasar-dasar <strong>System Design</strong>.
                  </p>
                  <p className="text-zinc-600 text-base">
                    Saya tertarik pada bagaimana sebuah sistem digital beroperasi secara andal di balik layar—mulai dari struktur skema data di level storage, komunikasi API yang terstandarisasi antar-layanan, hingga pembangunan antarmuka web modern yang cepat, rapi, dan modular.
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2.5 font-medium">
                    Stack & Alat yang Sering Digunakan:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-50 border border-zinc-200/80 text-zinc-700 hover:border-zinc-300 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="#contact"
                    onClick={(e) => scrollTo(e, 'contact')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm transition shadow-xs cursor-pointer"
                  >
                    <span>Hubungi Saya</span>
                    <FiSend size={14} />
                  </a>
                  <a
                    href="https://github.com/antulaot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-300 hover:border-zinc-400 text-zinc-800 hover:text-zinc-950 hover:bg-zinc-50 font-medium text-sm transition shadow-2xs"
                  >
                    <FaGithub size={16} />
                    <span>Kunjungi GitHub (@antulaot)</span>
                    <FiArrowUpRight size={13} className="text-zinc-400" />
                  </a>
                  <a
                    href="https://wa.me/6289528039177"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-300 hover:border-zinc-400 text-zinc-800 hover:text-zinc-950 hover:bg-zinc-50 font-medium text-sm transition shadow-2xs"
                  >
                    <FaWhatsapp size={16} className="text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Foto Profil Kanan */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-full max-w-xs sm:max-w-sm space-y-4">
                  <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100 group">
                    <Image
                      src="/images/profil.png"
                      alt="Foto Agus"
                      fill
                      sizes="(max-width: 768px) 320px, 384px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  <div className="p-4 rounded-xl border border-zinc-200/80 bg-zinc-50/60 text-xs text-zinc-600 space-y-1 font-mono">
                    <div className="flex items-center gap-2 text-zinc-800 font-semibold">
                      <FiMapPin size={13} className="text-zinc-500" />
                      <span>Indonesia • Sekadau, Kalbar</span>
                    </div>
                    <p className="text-zinc-500">Institut Teknologi Keling Kumang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Fokus & System Design (Full Viewport Height) */}
        <section
          id="focus"
          className="min-h-screen w-full flex flex-col justify-center scroll-mt-18 py-24 bg-zinc-50/70 border-y border-zinc-200/80"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold block mb-2">
                  Eksplorasi Keahlian
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
                  Fokus Pembelajaran & System Design
                </h2>
              </div>
              <p className="text-zinc-600 text-sm sm:text-base max-w-md">
                Pilar-pilar teknis yang sedang aktif saya pelajari dan terapkan dalam arsitektur aplikasi:
              </p>
            </div>

            {/* 4 Kolom Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.map((item, index) => (
                <div
                  key={index}
                  className="p-7 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-xs transition duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center mb-5">
                      {item.icon}
                    </div>
                    <span className="text-2xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-1.5">
                      {item.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Catatan & Dokumentasi (Full Viewport Height) */}
        <section
          id="notes"
          className="min-h-screen w-full flex flex-col justify-center scroll-mt-18 py-24"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold block mb-2">
                  Catatan & Referensi
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
                  Dokumentasi Belajar
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-md border border-zinc-200/80">
                {blogs.length} Tulisan Tersedia
              </span>
            </div>

            {/* 3 Kolom Kartu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group rounded-2xl border border-zinc-200 overflow-hidden bg-white hover:border-zinc-300 hover:shadow-sm transition cursor-pointer flex flex-col"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="relative w-full h-48 sm:h-52 bg-zinc-100 overflow-hidden border-b border-zinc-100">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-mono text-zinc-400">
                        <FiBookOpen size={12} />
                        <span>Dokumentasi Web</span>
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-600 transition mb-2.5">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {blog.summary}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-900 transition font-medium">
                      <span>Buka Catatan</span>
                      <span>→</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Kontak (Full Viewport Height) */}
        <section
          id="contact"
          className="min-h-screen w-full flex flex-col justify-center scroll-mt-18 py-24 bg-zinc-50/70 border-t border-zinc-200/80"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Kolom Kiri - Info Kontak (5 Kolom) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold block mb-2">
                    Hubungi Saya
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
                    Mari Terhubung & Berdiskusi
                  </h2>
                  <p className="text-zinc-600 text-base mt-3 leading-relaxed">
                    Terbuka untuk diskusi seputar rekayasa web, arsitektur data, atau pertanyaan terkait proyek. Silakan hubungi saya melalui form pesan di samping atau melalui media sosial berikut.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="https://github.com/antulaot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 text-sm text-zinc-700 hover:text-zinc-950 transition shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <FaGithub size={18} />
                      <span className="font-medium">github.com/antulaot</span>
                    </div>
                    <FiArrowUpRight size={14} className="text-zinc-400" />
                  </a>

                  <a
                    href="https://wa.me/6289528039177"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 text-sm text-zinc-700 hover:text-zinc-950 transition shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <FaWhatsapp size={18} className="text-emerald-600" />
                      <span className="font-medium">+62 895-2803-9177 (WhatsApp)</span>
                    </div>
                    <FiArrowUpRight size={14} className="text-zinc-400" />
                  </a>

                  <a
                    href="https://www.instagram.com/agus1398_?igsh=MW42dnRyZDF6aG5hcA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 text-sm text-zinc-700 hover:text-zinc-950 transition shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <FaInstagram size={18} className="text-pink-600" />
                      <span className="font-medium">@agus1398_</span>
                    </div>
                    <FiArrowUpRight size={14} className="text-zinc-400" />
                  </a>

                  <a
                    href="https://www.facebook.com/share/155VFPF9Lc/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 text-sm text-zinc-700 hover:text-zinc-950 transition shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <FaFacebook size={18} className="text-blue-600" />
                      <span className="font-medium">Facebook</span>
                    </div>
                    <FiArrowUpRight size={14} className="text-zinc-400" />
                  </a>
                </div>
              </div>

              {/* Kolom Kanan - Form Kirim Pesan (7 Kolom) */}
              <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-2xl border border-zinc-200 shadow-xs">
                <h3 className="text-lg font-bold text-zinc-900 mb-1">
                  Kirim Pesan Langsung
                </h3>
                <p className="text-sm text-zinc-500 mb-6">
                  Pesan Anda akan otomatis diarahkan ke kontak WhatsApp saya.
                </p>

                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-600 mb-1.5 font-medium">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="nama"
                      className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-zinc-400 transition"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-600 mb-1.5 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-zinc-400 transition"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-600 mb-1.5 font-medium">
                      Pesan / Topik Diskusi
                    </label>
                    <textarea
                      name="pesan"
                      className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-xl text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-zinc-400 transition"
                      rows={5}
                      placeholder="Tuliskan pesan atau topik yang ingin Anda diskusikan..."
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="w-full sm:w-auto px-7 py-3 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-xl transition cursor-pointer shadow-xs inline-flex items-center justify-center gap-2"
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
                    <span>Kirim via WhatsApp</span>
                    <FiSend size={14} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal Blog */}
      {selectedBlog && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-white w-full max-w-xl rounded-2xl p-6 sm:p-8 relative shadow-2xl border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 p-1.5 rounded-md hover:bg-zinc-100 transition"
              aria-label="Tutup"
            >
              <FiX size={20} />
            </button>

            <div className="relative w-full h-56 rounded-xl overflow-hidden mb-5 bg-zinc-100 border border-zinc-100">
              <Image
                src={selectedBlog.image}
                alt={selectedBlog.title}
                fill
                sizes="600px"
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-zinc-900 mb-2">
              {selectedBlog.title}
            </h3>
            <p className="text-zinc-600 text-sm mb-6 leading-relaxed">
              {selectedBlog.summary}
            </p>

            <div className="flex gap-3">
              <a
                href={selectedBlog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-zinc-900 text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-zinc-800 transition"
              >
                Buka Dokumentasi Resmi ↗
              </a>
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-4 py-2.5 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200/80 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} Agus • Mahasiswa Institut Teknologi Keling Kumang</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/antulaot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition"
            >
              GitHub
            </a>
            <a
              href="https://wa.me/6289528039177"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/agus1398_?igsh=MW42dnRyZDF6aG5hcA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/155VFPF9Lc/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
