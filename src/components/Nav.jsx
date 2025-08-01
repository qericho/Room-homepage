import { useEffect, useState } from 'react';
import Logo from '../assets/images/logo.svg';
import Bar from '../assets/images/icon-hamburger.svg'
import CloseBar from '../assets/images/icon-close.svg'
const Nav = () => {
    const [active, setActive] = useState('Home');
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev)
    }

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const navItems = ['Home', 'Shop', 'About', 'Contact'];

    return (
        <>
            <div className={`${open ? " " : "hidden "} lg:hidden w-full h-[100vh] bg-black/30 fixed top-0 z-9`}></div>
            <nav className='absolute top-0 left-0 z-999'>
                <div className="flex items-center space-x-7 p-10 hidden lg:flex ">
                    <div className="w-20">
                        <img className="w-full object-contain cursor-pointer" src={Logo} alt="Logo" />
                    </div>
                    <ul className="flex items-center space-x-5 font-semibold text-[var(--color-white)]  ">
                        {navItems.map((item, i) => (
                            <li
                                key={i}
                                className={`relative group cursor-pointer transition-colors duration-200 ${active === item ? 'text-[var(--color-black)]' : 'hover:text-[var(--color-black)]'
                                    }`}
                                onClick={() => {
                                    setActive(item);
                                    setOpen(false);
                                }}
                            >
                                <span>{item}</span>
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 bg-[var(--color-black)] ${active === item ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            {/* Mobile Nav */}

            <div >
                <div className='lg:hidden absolute top-5 left-1/2 -translate-x-1/2 z-999'>
                    <img className='w-[80px] cursor-pointer'
                        src={Logo} alt="logo" />
                </div>
                <span onClick={handleOpen}
                    className='lg:hidden flex absolute top-5 left-5 z-10'>
                    <img className='w-[20px] cursor-pointer'
                        src={Bar} alt="logo" />
                </span>
                <div className={`${open ? "top-0" : "top-[-900px] "} 
                 lg:hidden absolute bg-[var(--color-white)] z-11 w-full h-20`}>
                    <ul className='h-full flex items-center justify-center gap-10 font-semibold relative'>
                        <span onClick={handleOpen}
                            className='absolute top-8 left-5 cursor-pointer'>
                            <img src={CloseBar} />
                        </span>
                        {navItems.map((item, i) => (
                            <li
                                key={i}
                                className={`relative group cursor-pointer transition-colors duration-200 ${active === item ? 'text-[var(--color-black)]' : 'hover:text-[var(--color-black)]'
                                    }`}
                                onClick={() => {
                                    setActive(item);
                                    setOpen(false);
                                }}
                            >
                                <span>{item}</span>
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 bg-[var(--color-black)] ${active === item ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
        </>
    );
};

export default Nav;
