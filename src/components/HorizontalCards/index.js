import Link from 'next/link';
import React from 'react';

const HorizontalCard = ({ data }) => {
  return (
    <Link href={data.url}>
        <div className="flex w-[80vw] bg-white shadow-md overflow-hidden rounded-md">
            <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={data.image} alt={data.title} />
            </div>
            <div className="p-8">
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{data.title}</h2>
            <p className="mt-2 text-gray-500">{data.description}</p>
            </div>
        </div>
    </Link>
  );
};

export default HorizontalCard;