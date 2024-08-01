import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import React from "react";
import HorizontalCard from "../../components/HorizontalCards";
import dataWisata from "../../../public/data/wisata";


function UMKM() {

    return (
        <main>
            <Navbar />

            <section className="flex flex-col px-14 gap-8">
                <Title title="Wisata" crumbs="Wisata" />
                <div className="flex flex-col gap-5 mb-10">
                    <section className="flex flex-row gap-3">
                        <div className="bg-[#006f6f] w-1"></div>
                        <section className="flex flex-col">
                            <p className="text-blue text-base">Wisata</p>
                            <p className="text-orange font-bold text-2xl">
                            Wisata di Desa Bonto Bunga
                            </p>
                        </section>
                    </section>
                    <div className="flex flex-col justify-center gap-5 items-center">
                        {dataWisata.map((data) => (
                            <HorizontalCard key={data.title} data={data} />
                        ))}
                    </div>  
                </div>
                
            </section>

            <Footer />
        </main>
    );
}

export default UMKM;