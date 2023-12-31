//ASSETS
import LOGO from '../assets/Logo.webp'
import AUTHOR from '../assets/blog-author.webp'

const Header = () => {
    return (
        <>
            <div id='header' className='bg-primary w-full sm:h-fit px-12 py-3 sm:py-5 [box-shadow:inset_0_0_15px_rgb(0_0_0_)]'>
                <nav className='flex justify-between items-center'>
                    <div className=''>
                        <a href="">
                            <img className='w-36 lg:w-48 drop-shadow-xl' src={LOGO} alt="Logo" />
                        </a>
                    </div>
                    <div className='block'>
                        <ul className='flex items-center'>
                            <li className='group pl-6 hover:text-yellow transition-all'>
                                <a className='cursor-pointer pt-0.5 font-header font-semibold uppercase' href="#resume">ABOUT</a>
                            </li>
                            <li className='group pl-6 hover:text-yellow transition-all'>
                                <a className='cursor-pointer pt-0.5 font-header font-semibold uppercase' href="#portfolio">PORTFOLIO</a>
                            </li>
                            <li className='group pl-6 hover:text-yellow transition-all'>
                                <a className='cursor-pointer pt-0.5 font-header font-semibold uppercase' href="#contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div id='intro' className='lg:py-36 sm:pt-8 sm:pb-5'>
                    <div className='flex lg:flex-row flex-col items-center justify-center gap-12 '>
                        <div className='rounded-full border-8 border-primary shadow-xl'>
                            <img className='h-52 rounded-full sm:h-56' src={AUTHOR} alt="Author" />
                        </div>
                        <div className='sm:flex flex-col items-center justify-center lg:justify-start lg:items-start' >
                            <h1 className='text-7xl sm:text-center' >Hello I&apos;m Kevin Alfonzo</h1>
                            <div className='flex items-center'>
                                <span className='text-3xl sm:py-4'>Let&apos;s Connect</span>
                                <i className="bx bx-chevron-right text-4xl text-yellow"></i>
                                <div>
                                    <a href="https://github.com/RaiderAlf" className="pl-4">
                                        <i className="bx bxl-github text-5xl text-yellow hover:text-white transition-all"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/kalfonzoespinett/" className="pl-4">
                                        <i className="bx bxl-linkedin text-5xl text-yellow hover:text-white transition-all"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header