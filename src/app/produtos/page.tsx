"use client"

import React, { useState } from "react";



function Product(props: {title: string, image: string, href: string, cor: string}){
    const [amount, setAmount] = useState(100);
    return (

            <div className="text-[#101010] flex flex-row justify-center items-center grow max-h-[80vmin]  bg-gray-50 max-w-[90vw] w-[90vw] shadow-md mb-[2vmin]">
                
                <div className=" flex flex-col justify-center items-center pb-[10vmin] max-h-[80vmin] w-[50vw]  pt-[10vh]">
                    <img src={props.image} alt="product" style={{width: '60%', height: 'min-content'}} className="shadow-lg"/>

                    <span className="pt-[2vmin] opacity-60">Imagem meramente ilustrativa</span>
                </div>
                {/* <Vline/> */}
                
                <div className="flex flex-col justify-center items-center  flex-grow min-h-[80vmin]  ">
                    <div id="just-a-border" className="border border-grey rounded-lg flex flex-col justify-around items-center px-[5vmin] pb-[5vmin] min-h-[70vmin] ">

                        <h1 className="text-2xl text-center py-[3vmin]">{props.title}</h1>
                        <Price price={"5,90"}/>
                        <AmountInput amount={amount} setAmount={setAmount}/>
                        <a href={props.href + "?text=" + "Tenho interesse em comprar " + amount + " PETS triturados da cor " + props.cor} className="group rounded-lg border border-transparent px-5 py-4  transition-colors hover:border-gray-300 hover:dark:border-neutral-700 border-x-2 backdrop-blur-sm md:w-[12ch] md:min-h-[3ch] sm:min-h-[3ch] sm:w-[25ch] min-h-[4ch] w-[10ch]  text-[#000000] flex justify-center items-center shadow-sm text-center bg-[#e7e7e7] ">
                            <span>Comprar</span>
                        </a>

                    </div>
                    
                </div>
            </div>
    );
}

function Price(props: { price: String}){
    return (
        <div className="flex flex-col justify-center items-start w-[100%]">
            <h1 className="text-lg text-center py-[1vmin] opacity-80">Preço</h1>
            <h1 className="text-base text-center pb-[2vmin]">R$ {props.price} / Kg </h1>
        </div>
    );
}

function AmountInput(props: {amount: number, setAmount: Function}){
    
    return (
        <div className="bg-transparent flex flex-col w-[100%] ">
            <h1 className="text-lg text-left py-[1vmin] opacity-80 pb-[1vmin]">Quantidade</h1>
            <div className="flex flex-row justify-between items-center w-[100%] rounded border border-[#c0c0c0] py-[2vmin] ">
                <span className="pl-[2vmin]">{props.amount + " Kg"}</span>
                <div >
                    <button onClick={()=> props.setAmount(props.amount + 1)} className="pr-[1vmin]">
                        <span className="bg-[#e3e3e3] px-[2vmin] py-[1.5vmin]">+</span>
                    </button>
                    <button onClick={()=> props.amount>100? props.setAmount(props.amount - 1) : null} className="pr-[1vmin]">
                        <span className="bg-[#e3e3e3] px-[2vmin] py-[1.5vmin]">-</span>
                    </button>
                </div>
            </div>
        </div>
    );

}

function Vline(){
    return (
        <div className="min-w-[0.1px] border border-1 border-l-black h-[90vh] z-50">
        </div>
    );
}
function GoBack(){
    return (
        <a href="/" >
            <span className="text-xl text-black  font-bold "> &lt;- </span>
        </a>
    );

}

function Logo(){
    return (
        <a href="/" className="flex flex-row absolute left-[2vmin] ">
            <h1 className="text-xl text-black bg-[#10101014] p-[1vmin] rounded-lg">| Poliprocess</h1>
        </a>
    );

}

function Topbar(){
    return (
        <div className="flex flex-row justify-center items-center w-[100vw] h-[9vmin] bg-[#ffffff75] shadow-md">

                <Logo/>

            <h1 className="text-xl text-black ">Produtos</h1>
            
        </div>
    );
}

export default function Products(){
    return (
        <div className="w-max-[100vw] min-h-[100vh] bg-gray-200 text-black  flex flex-col  items-center content gap-[2vmin] ">
            <Topbar/>
            <Product title="PET TRITURADO VERDE"
                image="/green.jpg" href="https://wa.me/5538988741219" cor="verde"/>
            <Product title="PET TRITURADO CRISTAL"
                image="/cristal.webp" href="https://wa.me/5538988741219" cor="cristal"/>
        </div>
    );
}