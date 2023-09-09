
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded sticky-top" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Kevin Alfonzo DEV</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">Conoceme</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#proyects">Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contacto</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Portafolio Personal
                        </span>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default NavBar;
