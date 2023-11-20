import Image from 'next/image'
import Title from '@/app/_components/Title'
import HomepageButton from '@/app/_components/HomepageButton'


export default function Home() {
  return (
    <div className='bg-[#fbfafc]  relative h-[100dvh]'>

      <main className=" flex min-h-screen flex-col items-center ">

        <div id='titleAndImgDiv' className="flex flex-row  flex-grow relative z-20  items-center flex-wrap">

          <div className='flex flex-col items-center'>
            <div className="common-container">
              <Title />
              <div className=" py-[5vh] z-30 flex flex-col max-w-fit lg:flex-row lg:w-fit text-center lg:flex-wrap lg:text-left text-black gap-2 ">

                <a
                  href="/products"
                  className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 border-x-2 backdrop-blur-md bg-[#DDDDDD]/10 shadow-2xl "
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

                {/* <a
          href="/blog"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 border-x-2 backdrop-blur-md bg-[#DDDDDD]/10 shadow-2xl "
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
        </a> */}

                <a
                  href="/about"
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 border-x-2 backdrop-blur-md bg-[#DDDDDD]/10 shadow-2xl "
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
                  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300  hover:dark:border-neutral-700 border-x-2 backdrop-blur-md bg-[#DDDDDD]/10 shadow-2xl "
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
            </div>
            {/* <div className='absolute flex-grow z-0'>
              <Image
                src="/background_trash_can.jpg"
                alt="Poli process logo"
                priority
                width={1024}
                height={1024}
                className='z-10'
                style={{ scale: 1, aspectRatio: 1, width: '100%' }}
              />
            </div> */}

          </div>

        </div >

      </main>

    </div>

  )
}
