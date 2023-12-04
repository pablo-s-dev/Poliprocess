"use client";
export default function Title() {
  return (
    <div className='flex flex-col  justify-center z-20 max-w-fit items-left place-self-start  gap-[1.5vmin]    p-[4vmin] sideline ml-[1vmin] mb-[10vmin] md:mb-[10vmin] '>
      <h1 className='text-4xl sm:text-4xl md:text-4xl lg:text-4xl  text-[#000000] font-semibold inline backdrop-blur-[2px] max-w-fit'>
        Poliprocess
      </h1>
      <h2 className=' text-xl sm:text-2xl text-[#000000] inline backdrop-blur-[2px]'>
        A melhor escolha em polímeros
        {/* Aproveite o melhor dos PETS */}
      </h2>
    </div>
  );
}