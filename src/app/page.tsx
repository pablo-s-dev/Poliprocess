import Image from 'next/image'
import AboutPage from './about/page';
import BlogPage from './blog/page';
import ProductsPage from './products/page';


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-10 bg-[#fbfafc] h-['100vh'] w-['100vw'] overflow-clip">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-white dark:via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
      </div>

      <div className="z-10 relative flex justify-left flex-row px-5 pb-10 w-11/12 ">
        <div className='flex flex-col justify-left '>
          <h1 className='p-5 text-5xl text-[#000000] font-semibold'>
            Poliprocess
          </h1>
          <h2 className='p-5 text-2xl text-[#000000]'>
          A melhor escolha em polímeros
            {/* Aproveite o melhor dos PETS */}
          </h2>
        </div>
      </div >
      <div className=" z-10 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left text-black gap-1">
        <a
          href="/products"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 border-x-2 backdrop-blur-md bg-[#DDDDDD]/10 "
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Produtos{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-100 text-gray-800`}>
            Conheça os nossos polímeros.
          </p>

        </a>

        <a
          href="/blog"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 border-x-2 backdrop-blur-md bg-[#DDDDDD]/10 "
        >
          <h2 className={`mb-3 text-2xl font-semibold `}>
            Blog{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-100 text-gray-800`}>
            Fique por dentro do mundo dos polímeros!
          </p>
        </a>

        <a
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 border-x-2 backdrop-blur-md bg-[#DDDDDD]/10 "
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Quem somos{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-100 text-gray-800`}>
            Entenda a nossa missão.
          </p>
        </a>

        <a
          href="https://wa.me/5538988741219?"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 border-x-2 backdrop-blur-md bg-[#DDDDDD]/10 "
        >
          <h2 className={`mb-3 text-2xl font-semibold whitespace-nowrap`}>
            Contato{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-100 text-gray-800`}>
            Entre em contato conosco através do whatsapp.
          </p>
        </a>
      </div>


      <div className="absolute top-0 right-1 -z-0">
        <Image
          className="relative opacity-70"
          src="/background_trash_can.jpg"
          alt="Poli process logo"
          sizes="80vw"

          width={300}
          height={300}
          layout="responsive"
    
          priority
        />
      </div>

    </main>
  )
}
