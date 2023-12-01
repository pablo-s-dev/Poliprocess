export default function about(){
    return (
        <div className="w-[100vw] p-[15vmin] h-[100vh] flex flex-col justify-around items-center bg-[#f6f7fb] text-black ">
            <div className="bg-[#ffffff]">
                <Logo/>
                <p className="p-[10vmin] text-left text-xl sm:p-[15vmin]">
                    Somos uma empresa comprometida com a missão de oferecer polímeros, provenientes da reciclagem de plástico PET. Nosso foco está na promoção da economia circular e na redução do impacto ambiental, contribuindo para um futuro mais verde. A Poliprocess está localizada no norte de Minas Gerais, em Janaúba.
                </p>
            </div>
        </div>
    );
}

function Logo(){
    return (
        <a href="/" className="">
            <h1 className="text-3xl text-black bg-[#ffffffe8] pt-[4vmin] pl-[4vmin] rounded-lg">| Poliprocess</h1>
        </a>
    );

}


// Somos uma equipe comprometida com a missão de oferecer polímeros triturados e limpos, provenientes da reciclagem de plástico PET. Nosso foco está na promoção da economia circular e na redução do impacto ambiental, contribuindo para um futuro mais verde.