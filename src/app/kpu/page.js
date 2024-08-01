import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import React from "react";
import Image from 'next/image';
import Link from 'next/link';

function KPU() {

    return (
        <main>
            <Navbar />

            <section className="flex flex-col px-14 gap-8 mb-10">
                <Title title="Info KPU" crumbs="Info KPU" />

                <div className="mx-auto">
                    <Image 
                        src="/images/kpu/IMG-20240721-WA0036.jpg" 
                        alt="KPU" 
                        width={800}
                        height={400}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-center">Ikuti Langkahnya</h1>
                    <div className="flex flex-row gap-5">
                        <ol className="list-decimal list-inside">
                            <li>Kunjungi Situs Cek Pemiluh <Link href="cekdptonline.kpu.go.id" className="text-green-600">cekdptonline.kpu.go.id</Link></li>
                            <li>Masukkan 16 Digit Nomor Induk Kependudukan (NIK)</li>
                            <li>Masukkan Nomor HP (Whatsapp) untuk di Kirimkan Kode OTP</li>
                            <li>Masukkan Kode OTP yang terkirim melalui whatsapp komisi pemilihan umum republik Indonesia dengan nomor kontak +62 811-2024-214</li>
                            <li>Masukkan Kode OTP yang terkirim melalui whatsapp komisi pemilihan umum republik Indonesia</li>
                            <li>Halaman akan menampilkan data
                                - Nama lengkap pemilih
                                - NIK dan NKK
                                - Nomor dan Lokasi TPS
                                - Kabupaten/kota, Kecamatan, dan Kelurahan
                            </li>
                        </ol>
                        <div className="flex flex-row w-[30vw] justify-center items-center">
                            <Image 
                                src="/images/kpu/Mascot MOMO.png" 
                                alt="Mascot Momo" 
                                width={100}
                                height={200}
                            />
                            <Image 
                                src="/images/kpu/Mascot MUMU.png" 
                                alt="Mascot Momo" 
                                width={125}
                                height={200}
                            />
                        </div>
                    </div>
                    
                </div>

                
            </section>

            <Footer />
        </main>
    );
}

export default KPU;