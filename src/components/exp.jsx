import { useRef, useEffect } from "react";

const Exp = () => {

    const titles = useRef(null)
    const studies = useRef(null)

    useEffect(() => {
        const verificarScroll = () => {
            const { top, bottom } = titles.current.getBoundingClientRect();
            if (top < window.innerHeight && bottom > 700) {
                titles.current.classList.add('animateSkills')
                studies.current.classList.add('animateCourses')
            }
        };

        window.addEventListener('scroll', verificarScroll);
        return () => window.removeEventListener('scroll', verificarScroll);
    }, []);


    const events = [
        {
            id: 1,
            date: "July 2024 - ACT",
            title: "SmartSoft Solutions LLC,",
            description: "Full Stack Developer - Semi-Senior"
        },
        {
            id: 2,
            date: "Sempiterno Group",
            title: "May 2024 - July 2024",
            description: "Full Stack Developer - Programador GeneXus"
        },
        {
            id: 3,
            date: "Ene 2022 - Marzo 2024",
            title: "Mosqueda y Cordova",
            description: "Full Stack Developer - Junior"
        }
    ];

    return (
        <>
            <div id='exp' className="px-20 py-16 md:py-20 flex justify-center items-center flex-col [box-shadow:_0_0_25px_rgb(0_0_0_)]">
                <div ref={titles}>
                    <h2 className="text-center font-header text-4xl font-semibold drop-shadow-lg uppercase text-primary sm:text-5xl lg:text-6xl">
                        Experience
                    </h2>
                    <h3 className="pt-6 text-center font-header text-xl font-medium drop-shadow-lg text-grey-10 sm:text-2xl lg:text-3xl">
                        My job expirence
                    </h3>
                </div>
                <div className="container mx-auto px-4 py-8">
                    <div ref={studies} className="flex flex-col justify-center md:grid lg:grid-cols-9 gap-12 text-black">
                        {events.map((event) => (
                            <div key={event.id} className="md:col-span-3 flex justify-start items-center">
                                <div className="border-l-4 border-secondary pl-4">
                                    <div className="flex items-center mb-4 md:mb-0">
                                        <i className="bx bx-chevron-right lg:text-4xl text-yellow"></i>
                                        <div className="text-lg font-semibold">{event.date}</div>
                                    </div>
                                    <h2 className="text-2xl text-secondary font-bold mb-2">{event.title}</h2>
                                    <p className="font-body leading-relaxed text-secondary mb-2">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exp