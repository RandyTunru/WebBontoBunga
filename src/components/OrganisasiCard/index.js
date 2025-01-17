import React from 'react'
import Image from "next/image";


function OrganisasiCard(item) {
  return (
    <div
    key={item.id}
    className="flex flex-col border text-center items-center w-[274px] h-[250px] p-5 rounded-3xl shadow-lg shadow-white-hover bg-white"
  >
    <Image
      className="w-24 h-24 my-4 rounded-full "
      src={item.image != "" ? item.image : '/icons/profile.svg'}
      width={80}
      height={80}
      alt="Tidak ada Gambar"
    />
    <h3 className="text-orange font-bold text-md">{item.position}</h3>
    <h3 className="text-md">{item.name}</h3>
  </div>
  )
}

export default OrganisasiCard