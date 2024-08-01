"use client";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bottom-0">
      <div className="bg-[#30cf7f] flex text-white justify-between footer-padding py-9 px-8">
        <div className="flex flex-row gap-10">
          <div>
            <Image
              src="/image-removebg-preview (24).png"
              width={50}
              height={50}
              alt=""
              className="max-w-28 min-w-20"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl">Kantor Desa Bonto Bunga</h1>
            <ul className="text-base">
              <li>Telpon: +62 895-8002-50447</li>
              <li>
                Alamat: Jl. Sultan Hasanuddin No. 93 Barru, Sulawesi Selatan
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5 pr-10">
          <h1 className="font-bold text-2xl">Statistik Pengunjung</h1>
          <ul className="text-base">
            <li>Hari ini <span className="pl-14">: 31</span></li>
            <li>Minggu ini<span className="pl-9">: 406</span></li>
            <li>Bulan ini<span className="pl-[3.1rem]">: 7392</span></li>
          </ul>
        </div>
      </div>
      <div className="bg-[#006f6f] text-white text-center py-3">
        <p>
          Copyright © 2024 Kantor Desa Bonto Bunga
        </p>
      </div>
    </div>
  );
}

export default Footer;
