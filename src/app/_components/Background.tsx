"use client";

import Image from "next/image";

export default function Background() {
    return (

        <div className="w-[100vw] min-h-[100%] absolute bg-[#ffffff]">
            <div className='wallpaper '>
                <Image
                    src="/wallpaper.jpg"
                    alt="Poli process"
                    priority
                    style={{
                        position: 'absolute',
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        opacity: 0.5,
                    }}
                    width={1920}
                    height={1080}
                />
            </div>
        </div>
    );
}