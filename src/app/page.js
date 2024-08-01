import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PublikasiMini from "../components/PublikasiMini";
import Link from "next/link";
import Image from "next/image";
import dataPublikasi from "../../public/data/publikasi";

const data = dataPublikasi.slice(0, 5);
const infoLink = "/informasi-aktual";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="bg-gradient-to-b from-[#30cf7f] to-[#006f6f] w-[100vw] h-[80vh] flex px-10 justify-center align-center gap-10">
        <div className="w-3/5 flex flex-col justify-center text-white">
          <h2 className="text-5xl text-orange-dark font-extrabold mb-2">
            Selamat Datang di Sistem Informasi Bonto Bunga !!
          </h2>
          <p className="text-heading-s font-light">
            Sistem informasi Bonto Bunga yang menampung informasi terbaru mengenai Desa Bonto Bunga Kecamatan Moncongloe Kota Maros.
          </p>
        </div>

        <Image
            className="mb-20"
            src="/hero.svg"
            width={520}
            height={380}
            alt="hero image"
        />
      </div>

      <div className="flex flex-col gap-8 px-14 pt-14">
        <section className="flex flex-row gap-3">
          <div className="bg-[#006f6f] w-1"></div>
          <section className="flex flex-col">
            <p className="text-blue text-base">STATISTIK</p>
            <p className="text-orange font-bold text-2xl">
              Statistik Desa Bonto Bunga Kecamatan Moncongloe Kota Maros
            </p>
          </section>
        </section>

        <section className="flex flex-wrap grow gap-6">
          <div className="flex flex-col border w-[274px] h-[165px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white">
            <h2 className="flex font-bold text-blue-dark text-heading-l">
              1687
            </h2>
            <h3 className="text-orange font-bold text-heading-s">Jumlah Penduduk</h3>
            <h3 className="text-l">Jumlah penduduk di Desa Bonto Bunga Tahun 2024</h3>
          </div>

          <div className="flex flex-col border w-[274px] h-[165px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white">
            <h2 className="flex font-bold text-blue-dark text-heading-l">3</h2>
            <h3 className="text-orange font-bold text-heading-s">Jumlah Dusun</h3>
            <h3 className="text-l">Jumlah Dusun yang ada di Desa Bonto Bunga</h3>
          </div>

          <div className="flex flex-col border w-[274px] h-[165px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white">
            <h2 className="flex font-bold text-blue-dark text-heading-l">474</h2>
            <h3 className="text-orange font-bold text-heading-s">Jumlah Kepala Keluarga</h3>
            <h3 className="text-l">Jumlah Kepala Keluarga di Desa Bonto Bunga</h3>
          </div>
        </section>
      </div>
      
      <div className="flex flex-col gap-8 px-14 pt-14">
        <div className="flex flex-row gap-3">
          <div className="bg-[#006f6f] w-1"></div>
          <div className="flex flex-col">
            <p className="text-blue text-base">INFORMASI</p>
            <p className="text-orange font-bold text-2xl">Publikasi</p>
          </div>
        </div>
        <div className="flex flex-row gap-7 overflow-x-scroll scroll-smooth py-3">
          {data.map((item) => (
            <PublikasiMini
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              views={item.views}
              date={item.date}
            />
          ))}
        </div>
        <Link href={infoLink}>
          <div className="flex justify-center">
            <button className="bg-blue text-white w-60 h-12 rounded-3xl">
              Selengkapnya
            </button>
          </div>
        </Link>
      </div>

      <Footer />
    </main>
  );
}
