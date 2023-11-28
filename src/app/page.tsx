"use client";

import ReactLoading from 'react-loading';
import Title from "@/app/_components/Title";
import HomepageButton from "@/app/_components/HomepageButton";
import Background from "@/app/_components/Background";
import { useEffect, useState } from "react";


export default function Home() {
  const [loadingYet, setLoading] = useState<boolean>(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);

  }, []);
  
  return (

    <>
      {loadingYet === true? 
      (<div id="globalLoader" className="w-[100vw] min-h-[100vh] flex content-center justify-center fixed">
          <ReactLoading type={"bars"} color={"#101010"} height={"10vmin"} width={"10vmin"} />
        </div>) : 
        (<div className="flex flex-col justify-center items-center content-center relative w-[100vw] min-h-[100vh] ">

          <Background />

          <div className="flex flex-col grow relative pt-[20vmin]">
          
            <Title />
            
            <div className="z-30 flex flex-col flex-grow items-center content-center justify-center  lg:flex-row lg:items-center lg: text-center  text-white gap-3 overflow-visible pb-[10vmin] ">

              <HomepageButton title="Produtos" description="Conheça os nossos polímeros." href="/produtos" />
              <HomepageButton title="Quem somos" description="Entenda a nossa missão." href="/sobre" />
              <HomepageButton title="Contato" description="Entre em contato conosco através do whatsapp." href="https://wa.me/5538988741219" />

              {/* <HomepageButton title="Blog" description="Fique por dentro do mundo dos polímeros!" href="/blog" /> */}
            </div>
            


          </div>

        </div>)}
      </>

  );
}
