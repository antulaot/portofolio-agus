'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null)

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
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Portofolio</h1>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home */}
<section id="home" className="pt-24 snap-start min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white text-center text-gray-900">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-3xl px-6"
  >
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-blue-800 drop-shadow-sm">
      Selamat Datang di <span className="text-blue-600">Portofolio Saya</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-800 leading-relaxed tracking-wide">
      Saya mahasiswa&nbsp;
      <a 
        href="https://itkk.ac.id" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="font-extrabold text-black"
      >
        <span className="text-black">INSTITUT TEKNOLOGI </span>
        <span className="text-red-600">KELING </span>
        <span className="text-blue-600">KUMANG</span>
      </a>
      &nbsp;kelas sore yang lagi semangat belajar jadi <span className="font-semibold text-blue-700">Fullstack Developer</span>.
      Saat ini, saya lagi aktif ngulik hal-hal seru di dunia <span className="underline decoration-blue-400">web development</span> dan mencoba bikin proyek digital yang <span className="italic">modern</span>, <span className="italic">interaktif</span>, dan tentunya <span className="italic">berguna</span>.
    </p>
  </motion.div>
</section>



      {/* About */}
      <motion.section
        id="about"
        className="pt-20 snap-start min-h-screen flex items-center justify-center px-6 bg-white text-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-4 text-blue-700">Tentang Saya</h2>
            <p className="text-lg mb-4 leading-relaxed">
        Saya lagi belajar jadi <strong>Pengembang Web Fullstack</strong> dari nol. Mulai dari bikin tampilan antarmuka sampai ngatur backend dan database, semuanya saya pelajari sedikit demi sedikit sambil bikin proyek pribadi.
        Saat ini, saya lagi ngulik <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React/Next.js</strong>, terus juga <strong>Node.js</strong> dan <strong>Laravel</strong> buat bagian server-nya.
      </p>
      <p className="text-base text-gray-700">
        Tujuan saya sih simpel : pengen bikin aplikasi web yang nggak cuma jalan, tapi juga rapi, efisien, dan gampang dikembangin ke depannya. Oh iya, website ini saya buat pakai Next.js dan Tailwind CSS.
      </p>


          </div>

          <div className="relative w-full h-[300px] md:h-[400px] flex justify-center items-center order-1 md:order-2">
            <div className="absolute w-72 h-72 bg-blue-100 rounded-full z-0 animate-pulse blur-2xl" />
            <img
              src="/images/profil.png"
              alt="Foto Profil"
              className="z-10 w-72 h-72 rounded-2xl object-cover shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.section>

      {/* Blog */}
      <motion.section
        id="blog"
        className="pt-20 snap-start min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50 text-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-blue-700">Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
  {blogs.map((blog) => (
    <div
      key={blog.id}
      className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
      >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <a href={blog.link} className="text-blue-700 font-semibold hover:underline">
          {blog.title}
        </a>
        <p className="text-sm text-gray-600 mt-2">{blog.summary}</p>
      </div>
    </div>
  ))}
</div>

        {selectedBlog && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={() => setSelectedBlog(null)}
          >
            <div
              className="bg-white w-11/12 max-w-md rounded-lg p-6 relative shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              >
                <span className="text-xl">&times;</span>
              </button>

              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-48 object-cover rounded mb-4"
              />

              <h3 className="text-2xl font-bold mb-2 text-blue-700">{selectedBlog.title}</h3>
              <p className="text-gray-700 mb-4">{selectedBlog.summary}</p>

              <a
                href={selectedBlog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Baca Selengkapnya
              </a>
            </div>
          </div>
        )}
      </motion.section>

      {/* Contact */}
<motion.section
  id="contact"
  className="pt-20 snap-start min-h-screen flex items-center justify-center px-6 bg-[#f0f4f8] text-[#1a1a1a]"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="max-w-6xl w-full flex flex-col items-center gap-8">
    
    {/* Form Kontak */}
    <div className="w-full md:w-2/3">
      <h2 className="text-4xl font-bold mb-4 text-center">Kontak Saya</h2>
      <form className="space-y-4 mb-6 w-full">
        <div>
          <label className="block mb-1 font-medium">Nama</label>
          <input
            type="text"
            name="nama"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nama Anda"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="email@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Pesan</label>
          <textarea
            name="pesan"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="Tulis pesan Anda..."
          ></textarea>
        </div>
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => {
            const nama = document.querySelector('input[name="nama"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const pesan = document.querySelector('textarea[name="pesan"]').value;

            if (!nama || !email || !pesan) {
              alert("Mohon lengkapi semua kolom.");
              return;
            }

            const text = `Halo, saya ${nama}%0AEmail: ${email}%0APesan: ${pesan}`;
            const waLink = `https://wa.me/6289528039177?text=${encodeURIComponent(text)}`;
            window.open(waLink, '_blank');
          }}
        >
          Kirim
        </button>
      </form>
    </div>

    {/* Ikon Sosial Media */}
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-center text-gray-700 mb-2">Terhubung dengan saya</h3>
      <div className="flex justify-center space-x-6 text-3xl">
        <a
          href="https://wa.me/6289528039177"
          className="text-green-600 hover:text-green-800"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.facebook.com/share/155VFPF9Lc/?mibextid=wwXIfr"
          className="text-blue-700 hover:text-blue-900"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/agus1398_?igsh=MW42dnRyZDF6aG5hcA%3D%3D&utm_source=qr"
          className="text-pink-600 hover:text-pink-800"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </div>

  </div>
</motion.section>

    </main>
  )
}
