import { useState } from "react";
import {Price, AmountInput} from '@/app/produtos/_components';

export default function Product(props: { title: string, image: string, href: string, cor: string }) {
    const [amount, setAmount] = useState(100);
    return (

        <div className="text-[#101010] flex sm:flex-row sm:justify-center items-center sm:h-[80vmin] w-[90vw]  bg-gray-50 shadow-md mb-[2vmin] p-[2vmin] flex-col ">

            <div className=" flex flex-col justify-center items-center sm:py-[10vmin]  sm:flex-grow sm:h-[100%] relative  h-[100vmin]  ">
                <img src={props.image} alt="product" style={{ width: 'min-content', height: '90%' }} className="shadow-lg" />

                <span className="pt-[2vmin] text-sm opacity-50 text-center">Imagem meramente ilustrativa</span>
            </div>
            {/* <Vline/> */}

            <div className="flex flex-col justify-center items-center  flex-grow  sm:max-h-[90%] max-w-[90vw]  sm:max-w-[50vw] relative w-[90vw]">
                <div id="just-a-border" className="border border-grey rounded-lg flex flex-col justify-around items-center px-[5vmin] h-[75vmin] sm:w-[60%]  w-[90%] min-w-max ">

                    <h1 className="text-2xl text-center py-[3vmin]">{props.title}</h1>
                    <Price price={"5,90"} />
                    <AmountInput amount={amount} setAmount={setAmount} />
                    <a href={props.href + "?text=" + "Tenho interesse em comprar " + amount + "Kg em PETS triturados da cor " + props.cor} className="group rounded-lg border border-transparent px-5 py-4   hover:border-gray-300 hover:dark:border-neutral-700 border-x-2 backdrop-blur-sm md:w-[12ch] md:min-h-[3ch] sm:min-h-[3ch] sm:w-[25ch] min-h-[4ch] w-[10ch]  text-[#000000] flex justify-center items-center shadow-sm text-center bg-[#e7e7e7] ">
                        <span>Comprar</span>
                    </a>

                </div>

            </div>
        </div>
    );
}