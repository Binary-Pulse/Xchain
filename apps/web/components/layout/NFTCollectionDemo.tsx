"use client";
import Link from "next/link";
import React from "react";

interface NFTDemoProps {
  NFTName: string;
  NFTDescription: string;
  NFTImage: File | null;
  NFTWebsite: string;
  NFTSymbol: string;
  NFTMutable: boolean;
}

const NFTCollectionDemo: React.FC<NFTDemoProps> = ({
  NFTName,
  NFTDescription,
  NFTImage,
  NFTMutable,
  NFTSymbol,
  NFTWebsite,
}) => {
  return (
    <div className="border-2 border-slate-500-500 flex flex-wrap justify-between p-5 mt-10 rounded-md">
      <div className="p-3 flex items-start flex-col gap-2">
        <h1 className="text-2xl font-semibold">
          {NFTName ? NFTName : "DEMO OF YOUR NFT COLLECTION"}
        </h1>
        {NFTDescription && <span className="text-xl">{NFTDescription}</span>}
        {NFTWebsite && (
          <Link
            href={NFTWebsite}
            className="text-blue-400 text-lg hover:underline"
          >
            {NFTWebsite}
          </Link>
        )}
        {NFTSymbol && (
          <span className="text-slate-400 text-lg">{NFTSymbol}</span>
        )}
        {NFTMutable && <p className="text-slate-300 text-lg">Mutable</p>}
        {/* attributes here */}
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        {NFTImage && (
          <img
            src={URL.createObjectURL(new Blob([NFTImage]))}
            alt={"NFTImage"}
            height={200}
            width={200}
          />
        )}
      </div>
    </div>
  );
};

export default NFTCollectionDemo;
