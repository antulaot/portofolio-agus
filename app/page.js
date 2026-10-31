'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FiX, FiArrowUpRight } from 'react-icons/fi'

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

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-200 selection:text-zinc-900">
      <div className="max-w-2xl mx-auto px-6 py-12 sm:py-20">
        {/* Navigation */}
        <header className="flex items-center justify-between pb-8 mb-12 border-b border-zinc-100">
          <a
            href="#intro"
            className="font-mono text-sm font-semibold tracking-tight text-zinc-900 hover:text-zinc-600 transition"
          >
            agus
          </a>
          <nav className="flex items-center space-x-6 text-sm text-zinc-600">
            <a href="#about" className="hover:text-zinc-950 transition">
              Tentang
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
              className="inline-flex items-center gap-1 font-mono text-xs text-zinc-500 hover:text-zinc-900 transition"
            >
              <span>GitHub</span>
              <FiArrowUpRight size={13} />
            </a>
          </nav>
        </header>

        <main className="space-y-16">
          {/* Intro Section */}
          <section id="intro" className="space-y-6">
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-zinc-200 shrink-0 bg-zinc-100">
                <Image
                  src="/images/profil.png"
                  alt="Agus"
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                  Agus
                </h1>
                <p className="text-sm text-zinc-500 font-mono mt-0.5">
                  Institut Teknologi Keling Kumang (ITKK)
                </p>
              </div>
            </div>

            <div className="space-y-4 text-zinc-700 leading-relaxed text-sm sm:text-base">
              <p>
                Halo. Saya mahasiswa kelas sore di Institut Teknologi Keling Kumang. Saat ini saya sedang tertarik mempelajari rekayasa web dan dasar-dasar <strong>System Design</strong>.
              </p>
              <p>
                Saya suka mengulik bagaimana sebuah aplikasi bekerja di balik layar—mulai dari perancangan skema database, bagaimana API berkomunikasi antar-layanan, hingga bagaimana antarmuka pengguna dapat dibangun secara rapi dan efisien.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
              <a
                href="https://github.com/antulaot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-700 hover:text-zinc-950 font-medium underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition"
              >
                <FaGithub size={14} />
                <span>GitHub (@antulaot)</span>
              </a>
              <span className="text-zinc-300">•</span>
              <a
                href="https://wa.me/6289528039177"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-700 hover:text-zinc-950 font-medium underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition"
              >
                <FaWhatsapp size={14} />
                <span>WhatsApp</span>
              </a>
              <span className="text-zinc-300">•</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-zinc-700 hover:text-zinc-950 font-medium underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition"
              >
                <span>Kontak Saya</span>
                <span>↓</span>
              </a>
            </div>
          </section>

          {/* About / Focus Section */}
          <section id="about" className="space-y-5 pt-8 border-t border-zinc-100">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Fokus & Eksplorasi
            </h2>

            <div className="space-y-3 text-zinc-700 text-sm sm:text-base leading-relaxed">
              <p>
                Belakangan ini saya banyak menghabiskan waktu mendalami konsep <strong>System Design</strong> dan arsitektur aplikasi:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-600">
                <li>
                  <strong className="text-zinc-800">Pemodelan Data & Database:</strong> Relasi antar tabel, normalisasi, dan efisiensi query (PostgreSQL, MySQL).
                </li>
                <li>
                  <strong className="text-zinc-800">Desain API:</strong> Menyusun endpoint RESTful yang terstruktur serta alur data yang konsisten.
                </li>
                <li>
                  <strong className="text-zinc-800">Arsitektur Modular:</strong> Pemisahan logika bisnis dari layer presentasi agar kode lebih mudah dikelola.
                </li>
                <li>
                  <strong className="text-zinc-800">Eksplorasi Tools:</strong> Menggunakan Next.js, Nuxt 3, Laravel, dan Supabase untuk membangun berbagai proyek eksperimental.
                </li>
              </ul>
            </div>
          </section>

          {/* Notes / Blog Section */}
          <section id="notes" className="space-y-5 pt-8 border-t border-zinc-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                Catatan & Tulisan
              </h2>
              <span className="text-xs text-zinc-400 font-mono">
                {blogs.length} tulisan
              </span>
            </div>

            <div className="divide-y divide-zinc-100">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="py-4 group cursor-pointer"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-semibold text-zinc-900 group-hover:text-blue-600 transition">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {blog.summary}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 shrink-0 mt-0.5 group-hover:text-zinc-700 transition">
                      Baca ↗
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-5 pt-8 border-t border-zinc-100">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                Kontak
              </h2>
              <p className="text-sm text-zinc-600">
                Punya pertanyaan, diskusi santai seputar system design, atau hal lain? Kirim pesan langsung lewat form di bawah atau via kontak sosial media.
              </p>
            </div>

            <form className="space-y-3.5 pt-2">
              <div>
                <label className="block text-xs font-mono text-zinc-500 mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  name="nama"
                  className="w-full bg-zinc-50 border border-zinc-200 px-3.5 py-2 rounded-lg text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-zinc-400 transition"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-500 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-zinc-50 border border-zinc-200 px-3.5 py-2 rounded-lg text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-zinc-400 transition"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-500 mb-1">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  className="w-full bg-zinc-50 border border-zinc-200 px-3.5 py-2 rounded-lg text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-zinc-400 transition"
                  rows={4}
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              <button
                type="button"
                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg transition cursor-pointer"
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
          </section>
        </main>

        {/* Modal Blog */}
        {selectedBlog && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedBlog(null)}
          >
            <div
              className="bg-white w-full max-w-md rounded-xl p-6 relative shadow-xl border border-zinc-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 p-1 rounded-md hover:bg-zinc-100 transition"
                aria-label="Tutup"
              >
                <FiX size={18} />
              </button>

              <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4 bg-zinc-100 border border-zinc-100">
                <Image
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>

              <h3 className="text-base font-bold text-zinc-900 mb-2">
                {selectedBlog.title}
              </h3>
              <p className="text-zinc-600 text-sm mb-6 leading-relaxed">
                {selectedBlog.summary}
              </p>

              <div className="flex gap-2">
                <a
                  href={selectedBlog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-zinc-900 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-zinc-800 transition"
                >
                  Buka Referensi Resmi ↗
                </a>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-3 py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="pt-16 mt-16 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <p>© {new Date().getFullYear()} Agus • ITKK</p>
          <div className="flex items-center gap-4 text-zinc-500">
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
