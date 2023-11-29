//ASSETS

const Resume = () => {
    return (
        <>
            <div id='resume' className='px-8 sm:py-16 h-full gap-4 flex flex-col items-center lg:py-12 lg:flex-row [box-shadow:_0_0_25px_rgb(0_0_0_)]'>
                <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left bg-gray-500 p-3 rounded-lg">
                    <h1 className='text-6xl text-primary font-bold drop-shadow-lg'>WHO AM I?</h1>
                    <h3 className="pt-6 font-header text-xl text-grey-10 drop-shadow-lg font-medium text-black sm:text-2xl lg:text-3xl">I&apos;m Kevin Alfonzo</h3>
                    <h3 className="pt-6 font-header text-xl text-grey-10 drop-shadow-lg font-medium text-black sm:text-2xl lg:text-3xl">FrontEnd && BackEnd Developer</h3>
                    <p className="indent-1 pt-4 font-body leading-relaxed text-grey-10">
                        Hello, I am a self-taught FullStack web developer who has had a passion for science and technology
                        since I was young. I started my journey in development in 2021 and have had a series of small victories
                        during my learning. I am always looking to learn something new and share my knowledge with others, in
                        any situation.
                    </p>
                    <p className="indent-1 pt-4 font-body leading-relaxed text-grey-10">
                        I have taken multiple courses, both certified and uncertified, and always keep my skills and tools
                        up-to-date to ensure that I am up-to-date with the best practices within the development world.
                    </p>
                    <p className="indent-1 pt-4 font-body leading-relaxed text-grey-10">
                        I have learned a variety of technologies, languages, and frameworks, including HTML, CSS, JavaScript,
                        TypeScript, React, Angular, Vite, Redux, NodeJS, Express, ReactNative, Docker, Git, PostgreSQL
                        and MongoDB. In each project, I use the Agile methodology of SCRUM and tools such as Jira, Trello,
                        Figma, CI/CD.
                    </p>
                    <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                        <div className="flex items-center justify-center sm:justify-start">
                            <p className="font-body text-lg font-semibold text-grey-1indent-1 0">
                                Connect with me
                            </p>
                            <div className="hidden sm:block">
                                <i className="bx bx-chevron-right text-2xl text-gray-10"></i>
                            </div>
                        </div>
                        <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                            <a href="https://github.com/RaiderAlf" className="pl-4">
                                <i className="bx bxl-github text-4xl text-primary hover:text-black transition-all"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/kalfonzoespinett/" className="pl-4">
                                <i className="bx bxl-linkedin text-4xl text-primary hover:text-black transition-all"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="skills" className="w-full pl-8 sm:w-3/4 lg:w-2/5 lg:pl-12 rounded-lg p-12 [box-shadow:inset_0_0_10px_rgb(0_0_0_/_40%)]">
                    <div>
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold text-gray-300">
                                HTML & CSS

                            </h4>
                            <h3 className="font-body text-3xl font-bold text-primary">95%</h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                            <div id="barHTML" className="h-3 rounded-full bg-primary" style={{ width: "95%" }}></div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black">
                                JavaScript
                            </h4>
                            <h3 className="font-body text-3xl font-bold text-primary">92%</h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                            <div className="h-3 rounded-full bg-primary" style={{ width: "92%" }}></div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black">Node.JS</h4>
                            <h3 className="font-body text-3xl font-bold text-primary">88%</h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                            <div className="h-3 rounded-full bg-primary" style={{ width: "88%" }}></div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black">
                                React.JS
                            </h4>
                            <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                            <div className="h-3 rounded-full bg-primary" style={{ width: "98%" }}></div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black">PostgreSQL</h4>
                            <h3 className="font-body text-3xl font-bold text-primary">60%</h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-lila">
                            <div className="h-3 rounded-full bg-primary" style={{ width: "60%" }}></div>
                        </div>
                    </div>
                </div>
            </div >
            <div></div>
        </>
    )
}

export default Resume