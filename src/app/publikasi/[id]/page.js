'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import dataPublikasi from '../../../../public/data/publikasi';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Title from '../../../components/Title';

const PublikasiDetail = () => {
  const { id } = useParams();

  console.log(id);
  console.log(dataPublikasi);

  const data = dataPublikasi.find((item) => item.id === id);

  if (!data) {
    return <div className="max-w-4xl mx-auto p-6 bg-white shadow-md">Data not found</div>;
  }

  return (
    <main>
            <Navbar />

            <section className="flex flex-col px-14 gap-8 mb-10 rounded-md">
                <Title title="Publikasi" crumbs={"Publikasi > " + data.title} />

                <div className=" p-6 bg-white shadow-md mt-2">
                    <img src={data.image} alt={data.title} className="w-full h-64 object-cover" />
                    <div className="mt-4">
                        <h1 className="text-3xl font-bold">{data.title}</h1>
                        <p className="text-gray-500 mt-2">{data.date} - {data.views} views</p>
                        <div className="mt-4 text-gray-700">
                            {data.content}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
  );
};

export default PublikasiDetail;
