import React from 'react';

interface HomepageButtonProps {
    href: string;
    title: string;
    description: string;
}

const HomepageButton: React.FC<HomepageButtonProps> = ({ href, title, description }) => (
    <a
        
        href={href}
        className="group rounded-lg border border-transparent px-5 py-4  transition-colors hover:border-gray-300 hover:dark:border-neutral-700 border-x-2 backdrop-blur-sm md:w-[28ch] md:min-h-[12ch] sm:min-h-[11ch] sm:w-[25ch] min-h-[10ch] w-[25ch]  text-black flex flex-col content-center justify-start fullShadow "
    >
        <h2 className="mb-3 text-[1.8ch] sm:text-[2ch] font-semibold">
            {title + " "}
            <span className="text-[2ch] inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
            </span>
        </h2>
        <div className='flex flex-grow flex-col justify-center items-center'>
            <p className=" text-[1.2ch] sm:text-[1.4ch] opacity-100   text-black-800">{description}</p>
        </div>
    </a>
);

export default HomepageButton;