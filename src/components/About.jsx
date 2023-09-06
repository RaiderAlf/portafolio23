import PIC from '../assets/pic.jpg'

function About() {
    return (
        <>
            <div className="shadow rounded-3 container-fluid bg-body p-5 border my-4" id='about'>
                <div className="container-fluid d-flex align-items-center justify-content-between gap-5">
                    <img src={PIC} width='200' className="img-thumbnail rounded-circle" alt="profile pic" />
                    <div className='p-4 rounded-2 bg-dark text-wrap fw-normal fs-5'>
                        <h3 className='text-white-50'>Programador FullStack Web</h3>
                        <h6 className='text-white-50'>HTML | CSS | PHP | GoLang | JavaScript | MongoDB | PostgreSQL | Docker | GIT </h6>
                        <p className='text-light'>
                            Hola, soy un desarrollador web FullStack autodidacta quien tiene una pasión por las ciencias y la tecnología desde joven. Él comenzó su camino en el desarrollo en el año 2022 y ha tenido una serie de pequeñas victorias durante su aprendizaje. Siempre buscando aprender algo nuevo y compartir sus conocimientos con los demás, en cualquier situación.
                        </p>
                        <p className='text-light'>
                            He aprendido una variedad de tecnologías, lenguajes y frameworks, incluyendo HTML, CSS, JavaScript, TypeScript, GoLang, React, Angular, Vite, Redux, NodeJS, Express, ReactNative, Docker, Git, PostgreSQL y MongoDB. En cada proyecto, utiliza la metodología Agile de SCRUM y herramientas como Jira, Trello, Figma, CI/CD.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About