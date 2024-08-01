import PublicationCard from "../../components/PublicationCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import React from "react";
import dataPublikasi from "../../../public/data/publikasi";


function Publikasi() {

    return (
        <main>
            <Navbar />

            <section className="flex flex-col px-14 gap-8">
                <Title title="Publikasi" crumbs="Publikasi" />

                <div className="flex flex-wrap justify-center gap-5 mb-10">
                    {dataPublikasi.map((infoAktual) => (
                        <PublicationCard key={infoAktual.id} infoAktual={infoAktual} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Publikasi;