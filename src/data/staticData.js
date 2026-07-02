// =========================================================
// DATA STATIS – Sistem Jadwal Kuliah
// =========================================================

// -----------------------------------------------------------
// A. Data Mata Kuliah (Halaman 1 – .map())
// -----------------------------------------------------------
export const mataKuliah = [
  {
    id: 'mk001',
    kode: 'IF-401',
    nama: 'Pemrograman Mobile',
    sks: 3,
    dosen: 'Dr. Ahmad Fauzi',
  },
  {
    id: 'mk002',
    kode: 'IF-312',
    nama: 'Basis Data Lanjut',
    sks: 3,
    dosen: 'Dr. Sari Dewi',
  },
  {
    id: 'mk003',
    kode: 'IF-405',
    nama: 'Kecerdasan Buatan',
    sks: 3,
    dosen: 'Dr. Rizal Hakim',
  },
  {
    id: 'mk004',
    kode: 'IF-908',
    nama: 'Jaringan Komputer',
    sks: 2,
    dosen: 'Dr. Putri Indah',
  },
  {
    id: 'mk005',
    kode: 'IF-402',
    nama: 'Rekayasa Perangkat Lunak',
    sks: 3,
    dosen: 'Dr. Hendra Putra',
  },
];

// -----------------------------------------------------------
// B. Data Pertemuan (Halaman 2 – FlatList, minimal 10 item)
// -----------------------------------------------------------
export const pertemuan = [
  {
    id: 'pt001',
    mataKuliah: 'Pemrograman Mobile',
    pertemuanKe: 1,
    topik: 'Pengenalan React Native',
    tanggal: '4 Sep 2025',
  },
  {
    id: 'pt002',
    mataKuliah: 'Basis Data Lanjut',
    pertemuanKe: 1,
    topik: 'Review SQL Dasar',
    tanggal: '5 Sep 2025',
  },
  {
    id: 'pt003',
    mataKuliah: 'Kecerdasan Buatan',
    pertemuanKe: 1,
    topik: 'Intro AI & Machine Learning',
    tanggal: '6 Sep 2025',
  },
  {
    id: 'pt004',
    mataKuliah: 'Pemrograman Mobile',
    pertemuanKe: 2,
    topik: 'Komponen & Props',
    tanggal: '11 Sep 2025',
  },
  {
    id: 'pt005',
    mataKuliah: 'Basis Data Lanjut',
    pertemuanKe: 2,
    topik: 'Stored Procedure & Trigger',
    tanggal: '12 Sep 2025',
  },
  {
    id: 'pt006',
    mataKuliah: 'Kecerdasan Buatan',
    pertemuanKe: 2,
    topik: 'Algoritma Pencarian BFS & DFS',
    tanggal: '13 Sep 2025',
  },
  {
    id: 'pt007',
    mataKuliah: 'Jaringan Komputer',
    pertemuanKe: 1,
    topik: 'Model OSI & TCP/IP',
    tanggal: '9 Sep 2025',
  },
  {
    id: 'pt008',
    mataKuliah: 'Rekayasa Perangkat Lunak',
    pertemuanKe: 1,
    topik: 'SDLC & Model Waterfall',
    tanggal: '10 Sep 2025',
  },
  {
    id: 'pt009',
    mataKuliah: 'Pemrograman Mobile',
    pertemuanKe: 3,
    topik: 'State & Lifecycle',
    tanggal: '18 Sep 2025',
  },
  {
    id: 'pt010',
    mataKuliah: 'Jaringan Komputer',
    pertemuanKe: 2,
    topik: 'Subnetting & VLSM',
    tanggal: '16 Sep 2025',
  },
  {
    id: 'pt011',
    mataKuliah: 'Basis Data Lanjut',
    pertemuanKe: 3,
    topik: 'Indexing & Query Optimization',
    tanggal: '19 Sep 2025',
  },
  {
    id: 'pt012',
    mataKuliah: 'Rekayasa Perangkat Lunak',
    pertemuanKe: 2,
    topik: 'Agile & Scrum Framework',
    tanggal: '17 Sep 2025',
  },
];

// -----------------------------------------------------------
// C. Data Jadwal per Hari (Halaman 3 – SectionList)
// -----------------------------------------------------------
export const jadwalPerHari = [
  {
    hari: 'Senin',
    data: [
      {
        id: 'jd001',
        mataKuliah: 'Pemrograman Mobile',
        ruangan: 'Ruang A201',
        jamMulai: '08.00',
        jamSelesai: '10.30',
      },
      {
        id: 'jd002',
        mataKuliah: 'Kecerdasan Buatan',
        ruangan: 'Ruang B102',
        jamMulai: '13.00',
        jamSelesai: '15.30',
      },
    ],
  },
  {
    hari: 'Selasa',
    data: [
      {
        id: 'jd003',
        mataKuliah: 'Basis Data Lanjut',
        ruangan: 'Ruang C301',
        jamMulai: '09.00',
        jamSelesai: '11.30',
      },
      {
        id: 'jd004',
        mataKuliah: 'Jaringan Komputer',
        ruangan: 'Lab Jaringan',
        jamMulai: '13.05',
        jamSelesai: '14.40',
      },
    ],
  },
  {
    hari: 'Rabu',
    data: [
      {
        id: 'jd005',
        mataKuliah: 'Rekayasa Perangkat Lunak',
        ruangan: 'Ruang A301',
        jamMulai: '10.00',
        jamSelesai: '12.30',
      },
    ],
  },
];
