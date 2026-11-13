'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa'
import {
  FiSun,
  FiMoon,
  FiX,
  FiArrowUpRight,
  FiLayers,
  FiDatabase,
  FiServer,
  FiCode,
  FiSend,
  FiMapPin,
  FiBookOpen,
  FiTerminal,
  FiCheck,
  FiCopy,
  FiExternalLink,
  FiCpu,
  FiActivity,
  FiFolder,
} from 'react-icons/fi'
import {
  SiNextdotjs,
  SiReact,
  SiNuxt,
  SiVuedotjs,
  SiLaravel,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiBun,
  SiTailwindcss,
  SiDocker,
  SiGit,
} from 'react-icons/si'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState('arch-web')
  const [copiedKey, setCopiedKey] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Interactive Terminal State
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState([
    {
      type: 'system',
      text: 'Agus System Shell v2.4 (x86_64-pc-linux-gnu)\nKetik "help" untuk melihat daftar perintah, atau klik tombol cepat di bawah.',
    },
  ])
  const terminalBottomRef = useRef(null)

  // Form State
  const [formNama, setFormNama] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formPesan, setFormPesan] = useState('')
  const [formNotification, setFormNotification] = useState(null)

  // Sync Dark Mode with DOM & LocalStorage
  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const scrollTo = (e, id) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', `#${id}`)
    }
  }

  // Terminal Command Handler
  const runTerminalCommand = (cmdStr) => {
    const rawCmd = (cmdStr || terminalInput).trim()
    if (!rawCmd) return

    const cmd = rawCmd.toLowerCase()
    const newEntry = { type: 'input', text: `agus@itkk:~$ ${rawCmd}` }

    let response = ''

    switch (cmd) {
      case 'help':
        response = `Daftar perintah yang tersedia:\n  • about     : Profil & latar belakang pendidikan\n  • stack     : Daftar teknologi & tools favorit\n  • projects  : Proyek rekayasa perangkat lunak\n  • arch      : Filosofi desain sistem & database\n  • curl      : Simulasi API profil (JSON)\n  • contact   : Tautan sosial & direct contact\n  • clear     : Bersihkan layar terminal`
        break
      case 'about':
        response = `Agus — Mahasiswa di Institut Teknologi Keling Kumang.\nFokus: Rekayasa Web, Arsitektur Database Relasional, dan Dasar-dasar System Design.`
        break
      case 'stack':
        response = `[Frontend]  Next.js 15, React 19, Vue.js, Nuxt, Tailwind CSS v4\n[Backend]   Laravel, RESTful APIs, Node.js\n[Database]  PostgreSQL, MySQL, Supabase (Schema design, Indexing, ACID)\n[Tools]     Bun Runtime, Git/GitHub, Docker, Linux environment`
        break
      case 'projects':
        response = `Proyek Rekayasa:\n1. Sistem Informasi Manajemen Gudang (Laravel, MySQL, Mutasi Stok)\n2. High-Integrity POS System (Transaction Ledger, Audit Log)\n3. IoT Kebun Telemetry Monitor (ESP32, Sensor Data Ingestion)\n4. Personal Site v2.0 (Next.js 15, Turbopack, Tailwind v4)`
        break
      case 'arch':
        response = `Prinsip Arsitektur Agus:\n• Schema-First & Normalisasi Relasi (Cegah anomali data)\n• Idempotency & Transactional Safety (ACID rollbacks)\n• Clean API Separation of Concerns (Controller -> Service -> Repo)`
        break
      case 'curl':
        response = `HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "name": "Agus",\n  "campus": "Institut Teknologi Keling Kumang",\n  "focus": "Web Engineering & System Design",\n  "status": "Available for collaboration & internships",\n  "location": "Sekadau, Kalimantan Barat, ID"\n}`
        break
      case 'contact':
        response = `GitHub    : https://github.com/antulaot\nWhatsApp  : +62 895-2803-9177\nInstagram : @agus1398_\nEmail     : agus678876@gmail.com`
        break
      case 'clear':
        setTerminalHistory([])
        setTerminalInput('')
        return
      default:
        response = `Perintah "${rawCmd}" tidak dikenali. Ketik "help" untuk melihat perintah yang tersedia.`
    }

    setTerminalHistory((prev) => [
      ...prev,
      newEntry,
      { type: 'output', text: response },
    ])
    setTerminalInput('')

    setTimeout(() => {
      if (terminalBottomRef.current) {
        terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, 50)
  }

  // Tech Stack Data dengan Logo Resmi
  const techStack = [
    { name: 'Next.js', icon: <SiNextdotjs />, category: 'Framework' },
    { name: 'React', icon: <SiReact className="text-cyan-500" />, category: 'Frontend' },
    { name: 'Nuxt', icon: <SiNuxt className="text-emerald-500" />, category: 'Framework' },
    { name: 'Vue.js', icon: <SiVuedotjs className="text-emerald-600" />, category: 'Frontend' },
    { name: 'Laravel', icon: <SiLaravel className="text-red-500" />, category: 'Backend' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-sky-600" />, category: 'Database' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" />, category: 'Database' },
    { name: 'Supabase', icon: <SiSupabase className="text-emerald-400" />, category: 'Database' },
    { name: 'Bun', icon: <SiBun className="text-amber-300" />, category: 'Runtime' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" />, category: 'Styling' },
    { name: 'Docker', icon: <SiDocker className="text-blue-400" />, category: 'DevOps' },
    { name: 'Git', icon: <SiGit className="text-orange-500" />, category: 'VCS' },
  ]

  // Fokus Area
  const focusAreas = [
    {
      icon: <FiDatabase className="text-zinc-800 dark:text-zinc-200 text-xl" />,
      title: 'Pemodelan Data & Database',
      description:
        'Mempelajari relasi skema data, normalisasi tabel 1NF-3NF, integritas referensial foreign key, dan optimasi query menggunakan PostgreSQL & MySQL.',
      tag: 'Storage & Schema',
    },
    {
      icon: <FiServer className="text-zinc-800 dark:text-zinc-200 text-xl" />,
      title: 'Desain & Alur API',
      description:
        'Menyusun endpoint RESTful yang terstruktur, standardisasi respons JSON, idempotency, dan komunikasi data konsisten antara client dan server.',
      tag: 'Networking & API',
    },
    {
      icon: <FiLayers className="text-zinc-800 dark:text-zinc-200 text-xl" />,
      title: 'Arsitektur Sistem Modular',
      description:
        'Menerapkan pemisahan tanggung jawab (Separation of Concerns: Controller, Service, Repository) agar arsitektur kode bersih, modular, dan teruji.',
      tag: 'System Architecture',
    },
    {
      icon: <FiCode className="text-zinc-800 dark:text-zinc-200 text-xl" />,
      title: 'Eksplorasi Modern Stack',
      description:
        'Bereksperimen membangun aplikasi nyata menggunakan Next.js, Nuxt, Laravel, Supabase, dan Bun runtime performan tinggi.',
      tag: 'Ecosystem & Runtime',
    },
  ]

  // Proyek Rekayasa Unggulan
  const featuredProjects = [
    {
      id: 'gudang',
      title: 'Sistem Informasi Manajemen Gudang (WMS)',
      tag: 'Enterprise & Relational DB',
      description:
        'Aplikasi manajemen stok dan logistik gudang dengan kendali mutasi barang multi-lokasi, pencatatan surat jalan masuk/keluar, dan laporan akumulasi stok secara otomatis.',
      highlights: [
        'Relasi skema data multi-tabel dengan foreign key constraint yang ketat',
        'Transaksi database ACID untuk mencegah inkonsistensi mutasi stok',
        'Ekspor dan import pelaporan transaksi gudang secara terstruktur',
      ],
      tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'Blade'],
      github: 'https://github.com/antulaot',
      status: 'Production-ready',
    },
    {
      id: 'pos',
      title: 'High-Integrity Point of Sale (POS)',
      tag: 'Transaction Ledger & Cashier',
      description:
        'Sistem kasir ritel dengan alur checkout cepat, kalkulasi pajak/diskon real-time, cetak struk, dan sistem buku besar transaksi yang akuntabel.',
      highlights: [
        'Atomic transaction boundary untuk menjamin integritas transaksi kasir',
        'Pencegahan selisih kas dengan pencatatan audit log',
        'Antarmuka kasir responsif dan ramah keyboard shortcut',
      ],
      tech: ['Laravel', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
      github: 'https://github.com/antulaot',
      status: 'Active Prototype',
    },
    {
      id: 'iot-telemetry',
      title: 'IoT Kebun Telemetry & Monitoring System',
      tag: 'Hardware & Web Telemetry',
      description:
        'Platform pemantauan telemetri kebun berbasis mikrokontroler ESP32 yang mengirimkan metrik sensor secara berkala ke web server untuk visualisasi grafik historis.',
      highlights: [
        'Protokol pengiriman data sensor berkala via HTTP REST / Telemetri',
        'Dashboard visualisasi riwayat kondisi kebun secara berkala',
        'Arsitektur data time-series terindeks untuk query cepat',
      ],
      tech: ['ESP32', 'Next.js', 'REST API', 'MySQL'],
      github: 'https://github.com/antulaot',
      status: 'IoT Experiment',
    },
    {
      id: 'portfolio-v2',
      title: 'Engineering Portfolio & System Site v2',
      tag: 'Modern Web Engineering',
      description:
        'Situs personal berarsitektur modern dengan Next.js 15 Turbopack, Tailwind CSS v4, dark mode adaptif, interactive shell CLI, dan visualisasi arsitektur sistem.',
      highlights: [
        'Skor performa tinggi dengan server-rendered components & asset optimization',
        'Interactive developer terminal & interactive system design visualizer',
        'Desain minimalis berstandar industri dengan palet warna Zinc',
      ],
      tech: ['Next.js 15', 'React 19', 'Tailwind CSS v4', 'Framer Motion'],
      github: 'https://github.com/antulaot/portofolio-agus',
      demo: 'https://portofolio-agus.vercel.app',
      status: 'Live on Vercel',
    },
  ]

  // System Design Visualizer Data
  const architectureTabs = [
    {
      id: 'arch-web',
      name: '1. Web Request Lifecycle',
      description:
        'Alur siklus hidup request dari pengguna hingga data disajikan kembali dengan caching berlapis:',
      nodes: [
        {
          step: '1. Client Browser',
          sub: 'DNS & SSL Handshake',
          detail: 'Browser mengirim HTTPS GET/POST request dengan kompresi Brotli/Gzip.',
        },
        {
          step: '2. Edge CDN / Vercel',
          sub: 'Static Caching & DDoS',
          detail: 'Aset statis dan halaman ISR disajikan dari node edge terdekat (<30ms latency).',
        },
        {
          step: '3. Web / API Layer',
          sub: 'Next.js / Laravel',
          detail: 'Routing, middleware autentikasi, validasi schema request (Zod/Request Form).',
        },
        {
          step: '4. Service & Cache',
          sub: 'Business Logic / Redis',
          detail: 'Eksekusi kalkulasi bisnis dan pengecekan cache in-memory sebelum query database.',
        },
        {
          step: '5. Relational DB',
          sub: 'PostgreSQL / MySQL',
          detail: 'Query ACID berindeks dengan foreign key integrity dan rollback safety.',
        },
      ],
    },
    {
      id: 'arch-data',
      name: '2. Relational Data Integrity',
      description:
        'Pola pengamanan integritas data relasional untuk mencegah inkonsistensi dan data rusak:',
      nodes: [
        {
          step: '1. Schema Normalization',
          sub: '1NF, 2NF, 3NF',
          detail: 'Menghilangkan redundansi data antar tabel dengan pemisahan entitas yang jelas.',
        },
        {
          step: '2. Constraint Validation',
          sub: 'NOT NULL & UNIQUE',
          detail: 'Penegakan batasan data di level engine database (bukan sekadar di kode aplikasi).',
        },
        {
          step: '3. Foreign Key Cascades',
          sub: 'ON DELETE RESTRICT',
          detail: 'Menghindari orphaned record dengan kebijakan penghapusan relasi yang eksplisit.',
        },
        {
          step: '4. DB Transactions',
          sub: 'BEGIN ... COMMIT/ROLLBACK',
          detail: 'Operasi mutasi stok/keuangan harus bersifat all-or-nothing (ACID).',
        },
        {
          step: '5. Audit Trail',
          sub: 'Created/Updated Timestamps',
          detail: 'Riwayat modifikasi data dicatat lengkap dengan user id dan snapshot perubahan.',
        },
      ],
    },
    {
      id: 'arch-api',
      name: '3. Clean API & Separation',
      description:
        'Standardisasi antarmuka API agar kode modular, mudah dirawat, dan terprediksi:',
      nodes: [
        {
          step: '1. Endpoint Standard',
          sub: 'RESTful URLs',
          detail: 'Format URI terstandar: /api/v1/resources dengan status code HTTP semantik.',
        },
        {
          step: '2. Middleware Chain',
          sub: 'Auth & Rate Limiting',
          detail: 'Pemeriksaan token, CORS headers, dan pencegahan abuse sebelum masuk controller.',
        },
        {
          step: '3. Controller Layer',
          sub: 'Request Handlers',
          detail: 'Hanya bertugas menerima input dan mengembalikan HTTP JSON response.',
        },
        {
          step: '4. Service Layer',
          sub: 'Domain Logic',
          detail: 'Tempat semua kalkulasi bisnis berada, terpisah murni dari framework HTTP.',
        },
        {
          step: '5. Unified Response',
          sub: '{ success, data, error }',
          detail: 'Format JSON seragam memudahkan konsumsi data oleh frontend (React/Next.js/Mobile).',
        },
      ],
    },
  ]

  // Blog / Dokumentasi
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

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formNama.trim() || !formEmail.trim() || !formPesan.trim()) {
      setFormNotification({
        type: 'error',
        message: 'Mohon lengkapi semua kolom form terlebih dahulu.',
      })
      setTimeout(() => setFormNotification(null), 3500)
      return
    }

    const text = `Halo Agus,\nSaya: ${formNama}\nEmail: ${formEmail}\n\nPesan:\n${formPesan}`
    const waUrl = `https://wa.me/6289528039177?text=${encodeURIComponent(text)}`
    
    setFormNotification({
      type: 'success',
      message: 'Membuka WhatsApp untuk mengirim pesan...',
    })
    setTimeout(() => {
      window.open(waUrl, '_blank')
      setFormNotification(null)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-zinc-100 flex flex-col bg-grid-pattern transition-colors duration-300">
      {/* Fixed Full-Width Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-18 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => scrollTo(e, 'home')}
            className="font-mono text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700">
              <Image
                src="/images/profil2.png"
                alt="Agus"
                fill
                sizes="24px"
                className="object-cover"
              />
            </div>
            <span>
              agus<span className="text-zinc-400 dark:text-zinc-500 font-normal">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a
              href="#home"
              onClick={(e) => scrollTo(e, 'home')}
              className="hover:text-zinc-950 dark:hover:text-zinc-100 transition cursor-pointer"
            >
              Home
            </a>
            <a
              href="#focus"
              onClick={(e) => scrollTo(e, 'focus')}
              className="hover:text-zinc-950 dark:hover:text-zinc-100 transition cursor-pointer"
            >
              Fokus
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, 'projects')}
              className="hover:text-zinc-950 dark:hover:text-zinc-100 transition cursor-pointer"
            >
              Proyek
            </a>
            <a
              href="#terminal"
              onClick={(e) => scrollTo(e, 'terminal')}
              className="hover:text-zinc-950 dark:hover:text-zinc-100 transition cursor-pointer flex items-center gap-1.5"
            >
              <FiTerminal size={14} className="text-emerald-500" />
              <span>Shell</span>
            </a>
            <a
              href="#notes"
              onClick={(e) => scrollTo(e, 'notes')}
              className="hover:text-zinc-950 dark:hover:text-zinc-100 transition cursor-pointer"
            >
              Catatan
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="hover:text-zinc-950 dark:hover:text-zinc-100 transition cursor-pointer"
            >
              Kontak
            </a>

            {/* Dark Mode Toggle Button */}
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 transition cursor-pointer"
              >
                {isDark ? <FiSun size={15} className="text-amber-400" /> : <FiMoon size={15} />}
              </button>
            )}

            <a
              href="https://github.com/antulaot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 transition shadow-2xs"
            >
              <FaGithub size={13} />
              <span>GitHub</span>
              <FiArrowUpRight size={12} className="text-zinc-400 dark:text-zinc-500" />
            </a>
          </nav>

          {/* Mobile Actions: Theme + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
              >
                {isDark ? <FiSun size={15} className="text-amber-400" /> : <FiMoon size={15} />}
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-mono"
            >
              {mobileMenuOpen ? 'Tutup' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md px-6 py-4 space-y-3 font-mono text-sm">
            <a
              href="#home"
              onClick={(e) => scrollTo(e, 'home')}
              className="block text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1"
            >
              Home
            </a>
            <a
              href="#focus"
              onClick={(e) => scrollTo(e, 'focus')}
              className="block text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1"
            >
              Fokus & Desain Sistem
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, 'projects')}
              className="block text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1"
            >
              Proyek Rekayasa
            </a>
            <a
              href="#terminal"
              onClick={(e) => scrollTo(e, 'terminal')}
              className="block text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1"
            >
              Interactive Shell CLI
            </a>
            <a
              href="#notes"
              onClick={(e) => scrollTo(e, 'notes')}
              className="block text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1"
            >
              Catatan Dokumentasi
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, 'contact')}
              className="block text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1"
            >
              Kontak
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <section
          id="home"
          className="min-h-screen w-full flex flex-col justify-center scroll-mt-18 pt-28 pb-16 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Teks Kiri */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="lg:col-span-8 space-y-7"
              >
                <div>
                  <div className="inline-flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Institut Teknologi Keling Kumang
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60">
                      <span>Available for Web & Data Projects</span>
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
                    Halo, Saya Agus.
                  </h1>
                  <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-mono mt-3">
                    Exploring Web Engineering & System Design
                  </p>
                </div>

                <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-base sm:text-lg max-w-3xl">
                  <p>
                    Saya mahasiswa di <strong>Institut Teknologi Keling Kumang</strong> yang berfokus mendalami arsitektur perangkat lunak, perancangan database relasional, dan dasar-dasar <strong>System Design</strong>.
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-base">
                    Saya tertarik pada bagaimana sebuah sistem digital beroperasi secara andal di balik layar—mulai dari struktur skema data di level storage, komunikasi API yang terstandarisasi antar-layanan, hingga pembangunan antarmuka web modern yang cepat, rapi, dan modular.
                  </p>
                </div>

                {/* Tech Pills dengan Logo Resmi */}
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold">
                      Tech Stack & Tools:
                    </span>
                    <span className="text-2xs font-mono text-zinc-400 dark:text-zinc-500">
                      Hover untuk kategori
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition shadow-2xs"
                      >
                        <span className="text-sm">{tech.icon}</span>
                        <span>{tech.name}</span>
                        <span className="text-2xs opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 dark:text-zinc-500 ml-0.5">
                          • {tech.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    onClick={(e) => scrollTo(e, 'projects')}
                    className="px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-white transition flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <FiFolder size={15} />
                    <span>Lihat Proyek Rekayasa</span>
                  </a>
                  <a
                    href="#focus"
                    onClick={(e) => scrollTo(e, 'focus')}
                    className="px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-sm font-medium hover:border-zinc-400 dark:hover:border-zinc-600 transition flex items-center gap-2 cursor-pointer"
                  >
                    <FiCpu size={15} />
                    <span>Alur System Design</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('+6289528039177', 'wa-hero')}
                    className="px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 text-xs font-mono hover:border-zinc-400 dark:hover:border-zinc-600 transition flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedKey === 'wa-hero' ? (
                      <>
                        <FiCheck size={14} className="text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Nomor Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <FiCopy size={13} className="text-zinc-400" />
                        <span>Salin WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Foto Profil Kanan dengan Ambient Glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-4 flex justify-center lg:justify-end"
              >
                <div className="w-full max-w-xs sm:max-w-sm space-y-4">
                  {/* Foto dengan Halo Gradient Halus */}
                  <div className="relative group">
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 blur-xl opacity-75 dark:opacity-40 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md bg-zinc-100 dark:bg-zinc-900">
                      <Image
                        src="/images/profil2.png"
                        alt="Foto Agus"
                        fill
                        sizes="(max-width: 768px) 320px, 384px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/60 text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 font-mono shadow-2xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 font-semibold">
                        <FiMapPin size={13} className="text-emerald-500" />
                        <span>Sekadau, Kalimantan Barat</span>
                      </div>
                      <span className="text-2xs px-2 py-0.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        ID
                      </span>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Institut Teknologi Keling Kumang
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Fokus & System Design Visualizer */}
        <section
          id="focus"
          className="min-h-screen w-full flex flex-col justify-center scroll-mt-18 py-24 bg-zinc-50/70 dark:bg-zinc-900/40 border-y border-zinc-200/80 dark:border-zinc-800/80 transition-colors"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full space-y-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold block mb-2">
                  Eksplorasi Keahlian & Arsitektur
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Fokus Pembelajaran & System Design
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-md">
                Pilar-pilar teknis dan standar arsitektur yang aktif saya pelajari dan terapkan:
              </p>
            </div>

            {/* 4 Kolom Grid Pilar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.map((item, index) => (
                <div
                  key={index}
                  className="p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs transition duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 flex items-center justify-center mb-5">
                      {item.icon}
                    </div>
                    <span className="text-2xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1.5">
                      {item.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive System Design Visualizer */}
            <div className="p-7 sm:p-9 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs space-y-7">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FiActivity className="text-emerald-500" />
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      Visualizer Alur Arsitektur Sistem
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    Pilih skema di bawah untuk melihat rincian bagaimana komponen sistem berinteraksi:
                  </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex flex-wrap gap-2">
                  {architectureTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Tab Flow View */}
              {architectureTabs
                .filter((tab) => tab.id === activeTab)
                .map((tab) => (
                  <div key={tab.id} className="space-y-6">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {tab.description}
                    </p>

                    {/* Node Cards Horizontal Scroll / Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {tab.nodes.map((node, nIdx) => (
                        <div
                          key={nIdx}
                          className="relative p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition"
                        >
                          <div>
                            <span className="text-2xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase block mb-1">
                              Step {nIdx + 1}
                            </span>
                            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">
                              {node.step}
                            </h4>
                            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">
                              {node.sub}
                            </p>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal">
                              {node.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Section 3: Proyek Rekayasa Unggulan */}
        <section
          id="projects"
          className="min-h-screen w-full flex flex-col justify-center scroll-mt-18 py-24"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold block mb-2">
                  Karya & Implementasi Nyata
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Proyek Rekayasa Perangkat Lunak
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-md border border-zinc-200/80 dark:border-zinc-700/80">
                {featuredProjects.length} Proyek Terpilih
              </span>
            </div>

            {/* 2x2 Grid Proyek Unggulan */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-7 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-200/60 dark:border-emerald-800/50">
                        {project.tag}
                      </span>
                      <span className="text-2xs font-mono text-zinc-400 dark:text-zinc-500">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 block">
                        Fokus Arsitektur:
                      </span>
                      <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                        {project.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/70 dark:border-zinc-700/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                        >
                          <span>Live Site</span>
                          <FiExternalLink size={12} />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white flex items-center gap-1 font-medium"
                      >
                        <FaGithub size={13} />
                        <span>Repository</span>
                        <FiArrowUpRight size={12} className="text-zinc-400" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Interactive Developer Terminal / Shell CLI */}
        <section
          id="terminal"
          className="min-h-screen w-full flex flex-col justify-center scroll-mt-18 py-24 bg-zinc-50/70 dark:bg-zinc-900/40 border-y border-zinc-200/80 dark:border-zinc-800/80 transition-colors"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold block mb-2">
                  Developer Shell
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
                  <span>Interactive Terminal CLI</span>
                  <span className="text-xs font-mono font-normal px-2.5 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    bash / zsh
                  </span>
                </h2>
              </div>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                Ketik perintah langsung atau gunakan tombol shortcut di bawah:
              </p>
            </div>

            {/* Quick Command Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-400 mr-1">Quick:</span>
              {['help', 'about', 'stack', 'projects', 'arch', 'curl', 'contact', 'clear'].map(
                (cmd) => (
                  <button
                    key={cmd}
                    onClick={() => runTerminalCommand(cmd)}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer shadow-2xs"
                  >
                    ${cmd}
                  </button>
                )
              )}
            </div>

            {/* Terminal Window */}
            <div className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-zinc-900 text-zinc-100 shadow-xl overflow-hidden font-mono text-xs sm:text-sm">
              {/* Window Header */}
              <div className="px-4 py-3 bg-zinc-950 border-b border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-zinc-400 text-xs font-mono flex items-center gap-2">
                  <span>agus@keling-kumang: ~/system-design</span>
                </div>
                <div className="text-2xs text-zinc-600">UTF-8</div>
              </div>

              {/* Terminal Logs & History */}
              <div className="p-5 sm:p-7 max-h-96 overflow-y-auto space-y-3 font-mono leading-relaxed bg-zinc-950/80">
                {terminalHistory.map((item, index) => (
                  <div key={index}>
                    {item.type === 'input' ? (
                      <p className="text-emerald-400 font-semibold">{item.text}</p>
                    ) : item.type === 'system' ? (
                      <p className="text-zinc-400 whitespace-pre-wrap">{item.text}</p>
                    ) : (
                      <pre className="text-zinc-200 whitespace-pre-wrap font-mono mt-1">
                        {item.text}
                      </pre>
                    )}
                  </div>
                ))}
                <div ref={terminalBottomRef} />
              </div>

              {/* Terminal Input Line */}
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  runTerminalCommand(terminalInput)
                }}
                className="px-5 py-3.5 bg-zinc-900 border-t border-zinc-800 flex items-center gap-3"
              >
                <span className="text-emerald-400 font-bold">agus@itkk:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Ketik 'help', 'stack', 'projects'..."
                  className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm placeholder-zinc-600"
                />
                <button
                  type="submit"
                  className="px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono transition"
                >
                  Enter ↵
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Section 5: Catatan & Dokumentasi */}
        <section
          id="notes"
          className="min-h-screen w-full flex flex-col justify-center scroll-mt-18 py-24"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold block mb-2">
                  Catatan & Referensi
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Dokumentasi Belajar
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-md border border-zinc-200/80 dark:border-zinc-700/80">
                {blogs.length} Tulisan Tersedia
              </span>
            </div>

            {/* 3 Kolom Kartu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition cursor-pointer flex flex-col"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="relative w-full h-48 sm:h-52 bg-zinc-100 dark:bg-zinc-800 overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
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
                      <div className="flex items-center gap-2 mb-2 text-xs font-mono text-zinc-400 dark:text-zinc-500">
                        <FiBookOpen size={12} />
                        <span>Dokumentasi Web</span>
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition mb-2.5">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {blog.summary}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition font-medium">
                      <span>Buka Catatan</span>
                      <span>→</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Kontak */}
        <section
          id="contact"
          className="min-h-screen w-full flex flex-col justify-center scroll-mt-18 py-24 bg-zinc-50/70 dark:bg-zinc-900/40 border-t border-zinc-200/80 dark:border-zinc-800/80 transition-colors"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Kolom Kiri - Info Kontak (5 Kolom) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold block mb-2">
                    Hubungi Saya
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Mari Terhubung & Berdiskusi
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-base mt-3 leading-relaxed">
                    Terbuka untuk diskusi seputar rekayasa web, arsitektur database, atau peluang proyek. Hubungi saya melalui direct channel di bawah ini:
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="https://github.com/antulaot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <FaGithub size={18} />
                      <span className="font-medium">github.com/antulaot</span>
                    </div>
                    <FiArrowUpRight size={14} className="text-zinc-400" />
                  </a>

                  <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm text-zinc-700 dark:text-zinc-300 shadow-2xs">
                    <a
                      href="https://wa.me/6289528039177"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 flex-1 hover:text-zinc-950 dark:hover:text-white transition"
                    >
                      <FaWhatsapp size={18} className="text-emerald-500" />
                      <span className="font-medium">+62 895-2803-9177</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy('+6289528039177', 'wa-list')}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition cursor-pointer text-zinc-600 dark:text-zinc-300"
                    >
                      {copiedKey === 'wa-list' ? 'Tersalin!' : 'Salin'}
                    </button>
                  </div>

                  <a
                    href="https://www.instagram.com/agus1398_?igsh=MW42dnRyZDF6aG5hcA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <FaInstagram size={18} className="text-pink-500" />
                      <span className="font-medium">@agus1398_</span>
                    </div>
                    <FiArrowUpRight size={14} className="text-zinc-400" />
                  </a>

                  <a
                    href="https://www.facebook.com/share/155VFPF9Lc/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      <FaFacebook size={18} className="text-blue-500" />
                      <span className="font-medium">Facebook</span>
                    </div>
                    <FiArrowUpRight size={14} className="text-zinc-400" />
                  </a>
                </div>
              </div>

              {/* Kolom Kanan - Form Kirim Pesan (7 Kolom) */}
              <div className="lg:col-span-7 bg-white dark:bg-zinc-900 p-7 sm:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                    Kirim Pesan Langsung
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Pesan Anda akan otomatis diformat dan diteruskan ke kontak WhatsApp saya.
                  </p>
                </div>

                {formNotification && (
                  <div
                    className={`p-3.5 rounded-xl text-xs font-mono border ${
                      formNotification.type === 'error'
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300'
                        : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
                    }`}
                  >
                    {formNotification.message}
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5 font-medium">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      value={formNama}
                      onChange={(e) => setFormNama(e.target.value)}
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 px-4 py-3 rounded-xl text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:bg-white dark:focus:bg-zinc-900 focus:border-emerald-500 transition"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 px-4 py-3 rounded-xl text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:bg-white dark:focus:bg-zinc-900 focus:border-emerald-500 transition"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5 font-medium">
                      Pesan / Topik Diskusi
                    </label>
                    <textarea
                      value={formPesan}
                      onChange={(e) => setFormPesan(e.target.value)}
                      className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 px-4 py-3 rounded-xl text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:bg-white dark:focus:bg-zinc-900 focus:border-emerald-500 transition"
                      rows={5}
                      placeholder="Tuliskan pesan atau topik yang ingin Anda diskusikan..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-900 text-sm font-semibold rounded-xl transition cursor-pointer shadow-xs inline-flex items-center justify-center gap-2"
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
      <AnimatePresence>
        {selectedBlog && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-zinc-900 w-full max-w-xl rounded-2xl p-6 sm:p-8 relative shadow-2xl border border-zinc-200 dark:border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                aria-label="Tutup"
              >
                <FiX size={20} />
              </button>

              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-800">
                <Image
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  fill
                  sizes="600px"
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {selectedBlog.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
                {selectedBlog.summary}
              </p>

              <div className="flex gap-3">
                <a
                  href={selectedBlog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-zinc-800 dark:hover:bg-white transition"
                >
                  Buka Dokumentasi Resmi ↗
                </a>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
          <p>© {new Date().getFullYear()} Agus • Mahasiswa Institut Teknologi Keling Kumang</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/antulaot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
            >
              GitHub
            </a>
            <a
              href="https://wa.me/6289528039177"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/agus1398_?igsh=MW42dnRyZDF6aG5hcA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/155VFPF9Lc/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
