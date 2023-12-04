"use client";
import { GoBack, Logo} from '@/app/sobre/_components';

export default function about() {
    return (
        <div className=" min-h-[100vh] w-[100vw] flex flex-col  items-center bg-[#fafafa] text-[#303030] md:flex-row sm:items-center sm:justify-end pt-[10vmin]">
            <div className="bg-[#fafafa] md:w-[60%] w-[70%]  z-10 mx-[20vmin]
            p-[4vmin] ">
                <Logo />
                <p className=" text-left text-lg sm:text-lg md:text-xl py-[10vmin] ">
                    A Poliprocess é uma empresa de venda de polímeros, provenientes da reciclagem do plástico PET. Nossa missão é promover uma economia circular e reduzir o impacto ambiental, contribuindo para um futuro mais verde. Estamos localizados no norte de Minas Gerais, na cidade de Janaúba.
                </p>

            </div>
            <div className="flex justify-end items-end md:w-[40%] w-[70%]   pr-[5vmin]">
                <img src="/about-removebg.png" alt="" className=" z-0 scale-x-[-1] " />
            </div>
            <GoBack />
        </div>
    );
}
