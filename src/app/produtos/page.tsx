"use client"

import React, { useState } from "react";
import { Topbar, Product } from "@/app/produtos/_components";

export default function Products() {
    return (
        <div className="max-w-[100vw] min-h-[100vh] bg-gray-200 text-black  flex flex-col  items-center content gap-[2vmin] relative">
            <Topbar />
            <Product title="PET TRITURADO VERDE"
                image="/green.jpg" href="https://wa.me/5538988741219" cor="verde" />
            <Product title="PET TRITURADO CRISTAL"
                image="/cristal.webp" href="https://wa.me/5538988741219" cor="cristal" />
        </div>
    );
}

