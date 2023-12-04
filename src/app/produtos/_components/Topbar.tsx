import {LogoBtn} from '@/app/produtos/_components';

export default function Topbar() {
    return (
        <div className="flex flex-row justify-center items-center w-[100vw] h-[9vmin] bg-[#ffffff75] shadow-md">

            <LogoBtn />

            <h1 className="text-xl text-black ">Produtos</h1>

        </div>
    );
}