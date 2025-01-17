import React from "react";
import Image from "next/image";
import Link from "next/link";
import textOverflow from "../../lib/textOverflow";

function PublicationCard({ infoAktual }) {
  const imageUrl = infoAktual.image

  return (
    <Link
      href={`/publikasi/${infoAktual.id}`}
      className="flex flex-col border w-[18%] rounded-3xl shadow-lg shadow-white-hover bg-white"
    >
      <div className="relative w-full h-[30vh] rounded-t-3xl overflow-hidden">
        {imageUrl && (
          <Image
            className="object-cover"
            src={imageUrl ? imageUrl : "https://via.placeholder.com/150"}
            layout="fill"
            quality={80}
            alt="Tidak ada Gambar"
          />
        )}
      </div>
      <div className="min-h-24 px-3 py-3 bg-white rounded-b-2xl flex flex-col gap-1">
          <div className="flex flex-row gap-2">
            <div className="bg-[#FBA834] px-2 py-1 text-xs rounded-xl text-center flex flex-row gap-1 items-center">
              <svg
                className="w-4"
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M6,22H18a3,3,0,0,0,3-3V7a2,2,0,0,0-2-2H17V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5H5A2,2,0,0,0,3,7V19A3,3,0,0,0,6,22ZM5,12.5a.5.5,0,0,1,.5-.5h13a.5.5,0,0,1,.5.5V19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1Z"></path>
                </g>
              </svg>
              <p>{infoAktual.date}</p>
            </div>
          </div>
          <h1 className="text-md font-bold text-blue-dark line-clamp-2">{textOverflow(infoAktual.title)}</h1>
        </div>
    </Link>
  );
}

export default PublicationCard;
