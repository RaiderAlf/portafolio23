//HOOKS
import { useRef, useEffect } from "react";
//ASSETS
import CV from '../assets/cvKev.pdf'

const Contact = () => {

    const contact = useRef(null)
    const footer = useRef(null)

    useEffect(() => {
        const verificarScroll = () => {
            const { top, bottom } = contact.current.getBoundingClientRect();
            if (top < window.innerHeight && bottom <= 1000) {
                contact.current.classList.add('animateCourses')
                footer.current.classList.add('animateCourses')
            } else {
                contact.current.classList.remove('animateCourses')
                footer.current.classList.remove('animateCourses')
            }
        };

        window.addEventListener('scroll', verificarScroll);
        return () => window.removeEventListener('scroll', verificarScroll);
    }, []);

    return (
        <>
            <div className="py-16 md:py-20 lg:min-h-screen [box-shadow:_0_0_25px_rgb(0_0_0_)]" id="contact">
                <h2 className="text-center font-header text-4xl drop-shadow-lg font-bold uppercase text-primary sm:text-5xl lg:text-6xl">
                    Here&apos;s a contact form
                </h2>
                <h4 className="pt-6 text-center font-header text-xl drop-shadow-lg font-semibold text-secondary sm:text-2xl lg:text-3xl">
                    Have Any Questions?
                </h4>
                <div id="contactDiv" ref={contact} className="flex flex-col justify-center pt-16 lg:flex-row">
                    <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-50 px-6 py-6 sm:py-8 lg:w-1/3">
                        <div className="flex items-center">
                            <i className="bx bx-phone text-3xl text-grey-10"></i>
                            <p className="pl-2 font-body font-bold uppercase text-grey-10 lg:text-lg">
                                My Phone
                            </p>
                        </div>
                        <p className="pt-2 w-fit cursor-pointer transition-all text-left font-body hover:text-secondary hover:[text-shadow:_0_0_10px_#f9e71c]  font-bold text-primary lg:text-lg">
                            (+54) 11 7846-2264
                        </p>
                    </div>
                    <div
                        className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-50 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                        <div className="flex items-center">
                            <i className="bx bx-envelope text-3xl text-grey-10"></i>
                            <p className="pl-2 font-body font-bold uppercase text-grey-10 lg:text-lg">
                                My Email
                            </p>
                        </div>
                        <a className="pt-2 transition-all text-left font-body hover:text-secondary hover:[text-shadow:_0_0_10px_#f9e71c] font-bold text-primary lg:text-lg" href="mailto:kalfonzoespinett@gmail.com">
                            kalfonzoespinett@gmail.com
                        </a>
                    </div>
                    <div
                        className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-50 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                        <div className="flex items-center">
                            <i className="bx bxs-file-doc text-3xl text-grey-10"></i>
                            <p className="pl-2 font-body font-bold uppercase text-grey-10 lg:text-lg">
                                My CV
                            </p>
                        </div>
                        <a className="pt-2 transition-all text-left font-body hover:text-secondary hover:[text-shadow:_0_0_10px_#f9e71c] font-bold text-primary lg:text-lg" href={CV} download>
                            DownLoad
                        </a>
                    </div>
                </div>
            </div>

            <div ref={footer} className="bg-primary">
                <div className="mx-12 flex flex-col justify-between items-center py-2 sm:flex-row">
                    <p className="text-center font-body text-white md:text-left">
                        Kevin Alfonzo DEV®. All right reserved.
                    </p>
                    <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                        <a href="https://github.com/RaiderAlf" className="pl-4">
                            <i className="bx bxl-github text-3xl text-white transiton-all hover:text-yellow"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/kalfonzoespinett/" className="pl-4">
                            <i className="bx bxl-linkedin text-3xl text-white transiton-all hover:text-yellow"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact