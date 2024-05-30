import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const languages = [
        { name: 'English', value: 'en' },
        { name: '繁體中文', value: 'zh-TW' },
        { name: 'Español', value: 'es' },
        { name: 'Italiano', value: 'it' },
        { name: 'Français', value: 'fr' },
        { name: 'Deutsch', value: 'de' },
        { name: '日本語', value: 'ja' },
        { name: '한국어', value: 'ko' },
        { name: 'Dutch', value: 'nl' },
        { name: 'Português', value: 'pt' },
        { name: 'العربية', value: 'ar' },
        { name: 'ไทย', value: 'th' },
        { name: 'Русский', value: 'ru' },
        { name: 'Melayu', value: 'ms' }
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-white flex items-center justify-end p-4 gap-8'>

            <div className='flex gap-6'>
                <a href="" className='hover:text-cyan-400 '>Products <i class="bi bi-caret-down"></i></a>
                <a href="" className='hover:text-cyan-400'>Demo <i class="bi bi-caret-down"></i></a>
            </div>

            <div className='w-0.5 bg-slate-200 h-6'>
            </div>
            <div className='flex items-center gap-6'>
                <a href="" className='hover:text-cyan-400'>Store</a>
                <div className='flex items-center gap-4'>
                <i class="bi bi-bell text-xl"></i> 
                <button className='bg-orange-400 text-white rounded-full px-6 py-2'>Buy Now</button>
                <a href="">
                <div className='bg-orange-400 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center'>
          <i className="bi bi-person-fill "></i>
        </div></a>
                </div>

            </div>
            <div className="inline-flex items-center overflow-hidden rounded-md hover:bg-gray-50 hover:text-gray-700  bg-white" onClick={toggleDropdown}>

                <a
                    href="#"
                    className="px-4 py-2 text-sm text-gray-600 "
                >
                    English
                </a>

                <button
                    className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                >
                    <span className="sr-only">Menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                            <div
                                className="absolute right-6 top-14 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                                role="menu"
                            >
                                <div className="p-2">
                                    {languages.map((language, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            {language.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

        </div>
    )
}

export default Navbar