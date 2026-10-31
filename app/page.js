'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FiX, FiArrowUpRight, FiLayers, FiDatabase, FiServer, FiCode } from 'react-icons/fi'

export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null)

  const blogs = [
    {
      id: 1,
      title: 'Belajar Next.js',
      summary:
        'Catatan ringkas fitur dasar Next.js: routing berbasis folder, server components, dan rendering statis.',
      image: '/images/blog1.png',
      link: 'https://nextjs.org/docs',
    },
    {
      id: 2,
      title: 'Mengenal Laravel untuk Web Development',
      summary:
        'Memahami arsitektur MVC, ORM Eloquent, dan ekosistem backend Laravel untuk aplikasi web.',
      image: '/images/blog5.png',
      link: 'https://laravel.com/docs/12.x',
    },
    {
      id: 3,
      title: 'Menggunakan Tailwind CSS',
      summary:
        'Pola penyusunan antarmuka dengan utility-first CSS yang fleksibel tanpa menulis file CSS terpisah.',
      image: '/images/blog3.png',
      link: 'https://tailwindcss.com/docs',
    },
  ]

  const focusAreas = [
    {
      icon: <FiDatabase className="text-zinc-700 text-lg" />,
      title: 'Pemodelan Data & Database',
      description:
        'Mempelajari relasi skema data, normalisasi tabel, dan efisiensi query menggunakan PostgreSQL dan MySQL.',
    },
    {
      icon: <FiServer className="text-zinc-700 text-lg" />,
      title: 'Desain & Alur API',
      description:
        'Menyusun endpoint RESTful yang terstruktur, autentikasi, serta komunikasi data yang konsisten antara client dan server.',
    },
    {
      icon: <FiLayers className="text-zinc-700 text-lg" />,
      title: 'Arsitektur Sistem Modular',
      description:
        'Menerapkan pemisahan tanggung jawab (separation of concerns) agar kode bersih, modular, dan mudah dirawat.',
    },
    {
      icon: <FiCode className="text-zinc-700 text-lg" />,
      title: 'Eksplorasi Modern Stack',
      description:
        'Bereksperimen membangun aplikasi nyata menggunakan Next.js, Nuxt 3, Laravel, Supabase, dan Bun runtime.',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-200 selection:text-zinc-900">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-16">
        {/* Navigation */}
        <header className="flex items-center justify-between pb-8 mb-16 border-b border-zinc-100">
          <a
            href="#intro"
            className="font-mono text-base font-bold tracking-tight text-zinc-900 hover:text-zinc-600 transition"
          >
            agus<span className="text-zinc-400 font-normal">.dev</span>
          </a>
          <nav className="flex items-center space-x-6 sm:space-x-8 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-zinc-950 transition">
              Tentang
            </a>
            <a href="#focus" className="hover:text-zinc-950 transition">
              Fokus
            </a>
            <a href="#notes" className="hover:text-zinc-950 transition">
              Catatan
            </a>
            <a href="#contact" className="hover:text-zinc-950 transition">
              Kontak
            </a>
            <a
              href="https://github.com/antulaot"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-200 text-xs font-mono text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 transition"
            >
              <FaGithub size={13} />
              <span>GitHub</span>
              <FiArrowUpRight size={12} className="text-zinc-400" />
            </a>
          </nav>
        </header>

        <main className="space-y-24">
          {/* Intro Section - 2 Kolom di Desktop */}
          <section id="intro" className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Teks Kiri */}
            <div className="md:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold block mb-2">
                  Personal Site & System Notes
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                  Halo, Saya Agus.
                </h1>
                <p className="text-sm sm:text-base text-zinc-500 font-mono mt-2">
                  Mahasiswa Institut Teknologi Keling Kumang (ITKK)
                </p>
              </div>

              <div className="space-y-4 text-zinc-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Saya mahasiswa kelas sore yang sedang antusias mendalami rekayasa web, arsitektur data, dan prinsip dasar <strong>System Design</strong>.
                </p>
                <p className="text-zinc-600 text-sm sm:text-base">
                  Fokus eksplorasi saya adalah memahami bagaimana sebuah sistem digital beroperasi di balik layar—mulai dari perancangan skema database relasional, bagaimana API berkomunikasi antar-layanan, hingga bagaimana antarmuka pengguna dapat dibangun secara efisien, responsif, dan rapi.
                </p>
              </div>

              {/* Quick Actions & Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm transition shadow-xs"
                >
                  Hubungi Saya
                </a>
                <a
                  href="https://github.com/antulaot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 font-medium text-sm transition"
                >
                  <FaGithub size={15} />
                  <span>GitHub @antulaot</span>
                  <FiArrowUpRight size={13} className="text-zinc-400" />
                </a>
                <a
                  href="https://wa.me/6289528039177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 font-medium text-sm transition"
                >
                  <FaWhatsapp size={15} className="text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Foto Profil Kanan */}
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-50 group">
                <Image
                  src="/images/profil.png"
                  alt="Foto Agus"
                  fill
                  sizes="(max-width: 768px) 192px, 256px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Focus & System Design Section - 2 Kolom Grid */}
          <section id="focus" className="space-y-8 pt-10 border-t border-zinc-100">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-2">
                Fokus Belajar
              </h2>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                Eksplorasi System Design & Arsitektur Web
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-2xl">
                Area-area yang sedang aktif saya pelajari dan terapkan dalam berbagai proyek eksperimen mandiri:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {focusAreas.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-zinc-200/80 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 hover:shadow-xs transition duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-xs">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Notes / Blog Section - 3 Kolom Grid di Desktop */}
          <section id="notes" className="space-y-8 pt-10 border-t border-zinc-100">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-2">
                  Catatan & Dokumentasi
                </h2>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                  Tulisan & Bahan Belajar
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                {blogs.length} artikel tersedia
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group rounded-xl border border-zinc-200 overflow-hidden bg-white hover:border-zinc-300 hover:shadow-sm transition cursor-pointer flex flex-col"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="relative w-full h-44 bg-zinc-100 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-zinc-900 group-hover:text-blue-600 transition mb-2">
                        {blog.title}
                      </h4>
                      <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
                        {blog.summary}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-900 transition">
                      <span>Lihat Ringkasan</span>
                      <span>→</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact Section - 2 Kolom di Desktop */}
          <section id="contact" className="space-y-8 pt-10 border-t border-zinc-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Kolom Kiri - Info & Sosial */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold mb-2">
                    Kontak
                  </h2>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                    Mari Terhubung
                  </h3>
                  <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
                    Tertarik berdiskusi seputar web development, system design, atau proyek kolaborasi? Silakan hubungi saya melalui form pesan atau via kontak sosial media.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="https://github.com/antulaot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200/80 hover:bg-zinc-50 text-sm text-zinc-700 hover:text-zinc-950 transition"
                  >
                    <FaGithub size={18} />
                    <span className="font-medium">github.com/antulaot</span>
                  </a>
                  <a
                    href="https://wa.me/6289528039177"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200/80 hover:bg-zinc-50 text-sm text-zinc-700 hover:text-zinc-950 transition"
                  >
                    <FaWhatsapp size={18} className="text-emerald-600" />
                    <span className="font-medium">+62 895-2803-9177 (WhatsApp)</span>
                  </a>
                  <a
                    href="https://www.instagram.com/agus1398_?igsh=MW42dnRyZDF6aG5hcA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200/80 hover:bg-zinc-50 text-sm text-zinc-700 hover:text-zinc-950 transition"
                  >
                    <FaInstagram size={18} className="text-pink-600" />
                    <span className="font-medium">@agus1398_</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/155VFPF9Lc/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-zinc-200/80 hover:bg-zinc-50 text-sm text-zinc-700 hover:text-zinc-950 transition"
                  >
                    <FaFacebook size={18} className="text-blue-600" />
                    <span className="font-medium">Facebook</span>
                  </a>
                </div>
              </div>

              {/* Kolom Kanan - Form */}
              <div className="lg:col-span-7 bg-zinc-50/70 p-6 sm:p-8 rounded-2xl border border-zinc-200">
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-600 mb-1.5 font-medium">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="nama"
                      className="w-full bg-white border border-zinc-200 px-3.5 py-2.5 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-zinc-500 transition shadow-xs"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-600 mb-1.5 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-white border border-zinc-200 px-3.5 py-2.5 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-zinc-500 transition shadow-xs"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-600 mb-1.5 font-medium">
                      Pesan
                    </label>
                    <textarea
                      name="pesan"
                      className="w-full bg-white border border-zinc-200 px-3.5 py-2.5 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-zinc-500 transition shadow-xs"
                      rows={4}
                      placeholder="Tulis pesan atau topik diskusi Anda di sini..."
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="w-full sm:w-auto px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg transition cursor-pointer shadow-xs"
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
              className="bg-white w-full max-w-lg rounded-2xl p-6 sm:p-8 relative shadow-2xl border border-zinc-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 p-1.5 rounded-md hover:bg-zinc-100 transition"
                aria-label="Tutup"
              >
                <FiX size={20} />
              </button>

              <div className="relative w-full h-52 rounded-xl overflow-hidden mb-5 bg-zinc-100 border border-zinc-100">
                <Image
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  fill
                  sizes="500px"
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
        <footer className="pt-16 mt-24 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <p>© {new Date().getFullYear()} Agus • Institut Teknologi Keling Kumang</p>
          <div className="flex items-center gap-5 text-zinc-500">
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
        </footer>
      </div>
    </div>
  )
}
