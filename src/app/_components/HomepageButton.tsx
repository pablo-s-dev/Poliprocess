import React from 'react';

interface HomepageButtonProps {
    href: string;
    title: string;
    description: string;
}

const HomepageButton: React.FC<HomepageButtonProps> = ({ href, title, description }) => (
    <a
        href={href}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:dark:border-neutral-700 border-x-2 backdrop-blur-md bg-[#DDDDDD]/10 shadow-2xl"
    >
        <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-100 text-gray-800">{description}</p>
    </a>
);

export default HomepageButton;