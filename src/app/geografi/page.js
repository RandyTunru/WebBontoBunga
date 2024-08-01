"use client"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import React from "react";
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import HorizontalCard from "../../components/HorizontalCards";

const dataGeografi = [{
    image:"https://via.placeholder.com/150",
    title:"Card Title",
    description:"This is a description of the card.",
    url: "https://maps.app.goo.gl/jAQnXTp3MbzWHUsU6"
},
{
    image:"https://via.placeholder.com/150",
    title:"Card Title",
    description:"This is a description of the card.",
    url: "https://maps.app.goo.gl/jAQnXTp3MbzWHUsU6"
},
]

function Geografi() {

    return (
        <main>
            <Navbar />

            <section className="flex flex-col px-14 gap-8">
                <Title title="Geografi" crumbs="Geografi" />
                <div className="flex flex-col gap-5 mb-10">
                    <div className="flex w-[90vw] h-[70vh] justify-center items-center">
                        <APIProvider apiKey="AIzaSyDdOfh-tMEfF9d02uqa1OafADOpwMme_c8">
                            <Map
                                width="500px"
                                height="500px"
                                defaultZoom={15}
                                defaultCenter={{ lat: -5.1370045571785345, lng: 119.5444804231628 }}
                                mapStyle="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                onCameraChanged={(event) => {
                                    console.log(event);
                                }}
                            />
                        </APIProvider>
                    </div>
                    <section className="flex flex-row gap-3">
                        <div className="bg-[#006f6f] w-1"></div>
                        <section className="flex flex-col">
                            <p className="text-blue text-base">Landmarks</p>
                            <p className="text-orange font-bold text-2xl">
                            Bangunan penting di Desa Bonto Bunga
                            </p>
                        </section>
                    </section>
                    <div className="flex flex-col justify-center gap-5 items-center">
                        {dataGeografi.map((data) => (
                            <HorizontalCard key={data.title} data={data} />
                        ))}
                    </div>      

                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Geografi;