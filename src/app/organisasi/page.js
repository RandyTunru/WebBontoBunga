import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import OrganisasiCard from "../../components/OrganisasiCard";
import Image from "next/image";
import React from "react";
import skpdItems from "../../../public/data/organisasi";

function Organisasi() {

    return (
        <main>
            <Navbar />

            <section className="flex flex-col px-14 gap-8 mb-10">
                <Title title="Organisasi" crumbs="Organisasi" />

                <div className="mx-auto">
                    <Image 
                        src="/images/organisasi/Screenshot_2024-07-29-16-58-34-977_com.canva.editor-edit.jpg" 
                        alt="Visi Misi" 
                        width={800}
                        height={400}
                    />
                </div>
                <section className="flex flex-row gap-3">
                    <div className="bg-[#006f6f] w-1"></div>
                    <section className="flex flex-col">
                        <p className="text-blue text-base">Struktur Organisasi</p>
                        <p className="text-orange font-bold text-2xl">
                        Struktur Kantor Desa Bonto Bunga
                        </p>
                    </section>
                </section>
                <section className="flex flex-wrap gap-6 justify-center">
                    {skpdItems.map((item, index) => (
                        <OrganisasiCard 
                        key={index}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        position={item.position}
                        name={item.name}
                        />

                    ))}
                </section>

                
            </section>

            <Footer />
        </main>
    );
}

export default Organisasi;