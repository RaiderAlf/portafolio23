//ASSETS
import CV from '../assets/cv1.pdf'

const Contact = () => {
    return (
        <>
            <div className="py-16 md:py-20 [box-shadow:_0_0_25px_rgb(0_0_0_)]" id="contact">
                <h2 className="text-center font-header text-4xl drop-shadow-lg font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                    Here&apos;s a contact form
                </h2>
                <h4 className="pt-6 text-center font-header text-xl drop-shadow-lg font-medium text-secondary sm:text-2xl lg:text-3xl">
                    Have Any Questions?
                </h4>
                <div className="flex flex-col justify-center pt-16 lg:flex-row">
                    <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-50 px-6 py-6 sm:py-8 lg:w-1/3">
                        <div className="flex items-center">
                            <i className="bx bx-phone text-2xl text-grey-40"></i>
                            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                                My Phone
                            </p>
                        </div>
                        <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                            (+58) 412 141 7669
                        </p>
                    </div>
                    <div
                        className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-50 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                        <div className="flex items-center">
                            <i className="bx bx-envelope text-2xl text-grey-40"></i>
                            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                                My Email
                            </p>
                        </div>
                        <a className="pt-2 text-left font-body font-bold text-primary lg:text-lg" href="mailto:kalfonzoespinett@gmail.com">
                            kalfonzoespinett@gmail.com
                        </a>
                    </div>
                    <div
                        className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-50 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                        <div className="flex items-center">
                            <i className="bx bxs-file-doc text-2xl text-grey-40"></i>
                            <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                                My CV
                            </p>
                        </div>
                        <a className="pt-2 text-left font-body font-bold text-primary lg:text-lg" href={CV} download>
                            DownLoad
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-primary">
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