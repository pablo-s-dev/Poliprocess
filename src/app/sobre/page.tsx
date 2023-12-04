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
            <div className="flex justify-end items-end md:w-[40%] w-[30%]   pr-[5vmin]">
                <img src="/about-removebg.png" alt="" className=" z-0 scale-x-[-1] " />
            </div>
            <GoBack />
        </div>
    );
}

function Logo() {
    return (
        <h1 className="text-3xl sm:text-3xl md:text-4xl  text-[#303030]  rounded-lg text-left ">| Poliprocess</h1>
    );

}

function GoBack() {
    return (
        <a href="/" >
            <span className=" text-[#00000092]  font-bold absolute left-[2vmin] top-[1vmin] z-10 text-base sm:text-xl "> &lt;-- </span>
        </a>
    );

}

// Somos uma equipe comprometida com a missão de oferecer polímeros triturados e limpos, provenientes da reciclagem de plástico PET. Nosso foco está na promoção da economia circular e na redução do impacto ambiental, contribuindo para um futuro mais verde.