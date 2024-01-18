//HOOKS
import { useRef, useEffect } from "react";

const Courses = () => {

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
            date: "January 2024",
            title: "Curso WordPress 2024: Cómo Crear una Página Web Desde Cero",
            certificate: "https://www.udemy.com/certificate/UC-fb3a00d1-5fde-4c6d-97ae-defe74fea642/"
        },
        {
            id: 2,
            date: "April 2023",
            title: "Certificate English First",
            certificate: "https://www.efset.org/cert/Xk3Lva"
        },
        {
            id: 3,
            date: "April 2023",
            title: "Henry FullStack Web Developer",
            description: "Bootcamp with 700 hours of theoretical-practical coursework and individual and group projects for its approval.",
            certificate: "https://certificates.soyhenry.com/new-cert?id=3098bf1a587d95a0e340836d49612293031c97da4b14f69f4ce0622b7cbf04aa"
        },
        {
            id: 4,
            date: "March 2023",
            title: "Desarrollo con NodeJs. Aplicacion, Testing y seguridad",
            certificate: "https://ude.my/UC-595cef28-1f63-4ba0-9581-1fa0266d9db1"
        },
        {
            id: 5,
            date: "February 2023",
            title: "Escuela de JavaScript 2023 - De cero a Master en JavaScript",
            certificate: "https://ude.my/UC-fe2bf607-a2a0-4a6d-9192-66175fcd29c2"
        },
        {
            id: 6,
            date: "December 2022",
            title: "JavaScript: Desde cero con NodeJS",
            certificate: "https://ude.my/UC-7482b0a3-8347-4f99-a1a5-6fe0cc7802d5"
        },
        {
            id: 7,
            date: "December 2022",
            title: "HTML, CSS & JavaScript - Certification Course for Beginners",
            certificate: "http://ude.my/UC-ddf04b5e-00f5-4480-876d-d977e3f320b5"
        },
        {
            id: 8,
            date: "April 2022",
            title: "Introduccion al Desarrollo Web I & II",
            certificate: "https://learndigital.withgoogle.com/link/1nur091p2ww"
        }
    ];

    return (
        <>
            <div id='courses' className="px-20 py-16 md:py-20 flex justify-center items-center flex-col [box-shadow:_0_0_25px_rgb(0_0_0_)]">
                <div ref={titles}>
                    <h2 className="text-center font-header text-4xl font-semibold drop-shadow-lg uppercase text-primary sm:text-5xl lg:text-6xl">
                        The path on which I learned
                    </h2>
                    <h3 className="pt-6 text-center font-header text-xl font-medium drop-shadow-lg text-grey-10 sm:text-2xl lg:text-3xl">
                        Courses & studies
                    </h3>
                </div>
                <div className="container mx-auto px-4 py-8">
                    <div ref={studies} className="flex flex-col justify-center md:grid lg:grid-cols-6 gap-12 text-black">
                        {events.map((event) => (
                            <div key={event.id} className="md:col-span-3 flex justify-start items-center">
                                <div className="border-l-4 border-secondary pl-4">
                                    <div className="flex items-center mb-4 md:mb-0">
                                        <i className="bx bx-chevron-right lg:text-4xl text-yellow"></i>
                                        <div className="text-lg font-semibold">{event.date}</div>
                                    </div>
                                    <h2 className="text-2xl text-secondary font-bold mb-2">{event.title}</h2>
                                    <p className="font-body leading-relaxed text-secondary mb-2">{event.description}</p>
                                    <a href={event.certificate} className="text-primary hover:text-yellow transition-all" >Certificate Link</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses