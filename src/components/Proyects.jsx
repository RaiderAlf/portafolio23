//ASSETS
import Promanitas from '../assets/promanitas.png'
import AdminServer from '../assets/admin.png'
import Pokemon from '../assets/pokemon.png'
import Dogs from '../assets/pi.png'
import Ecommerce from '../assets/ecommerce.png'

function Proyects() {
    return (
        <>
            <div className="shadow rounded-3 container-fluid bg-body p-5 my-4 d-flex flex-column gap-5" id='proyects'>
                <h3 className="p-3 m-3">Proyectos</h3>
                <div className="container-fluid d-flex align-items-center justify-content-between gap-5">
                    <div className='p-4 rounded-2 bg-dark text-wrap fw-normal fs-5'>
                        <h3 className='text-white-50'>Promanitas</h3>
                        <p className='text-light'>
                            SPA grupal. Portal de empleo para mantenimientos generales, Posee autenticacion de usuarios, los usuarios pueden crear sus publicaciones, tambien cuenta con plataforma de pago(Stripe) y geolocalizacion.
                            El proyecto fue desarrollado en <strong>ReactJs</strong>, tambien consumiendo una API creada unicamente para el proyecto desarrollada en <strong>PostgreSQL</strong>, para la interfaz fue usado <strong>MaterialUI</strong>, cuenta con <strong>Cloudinary</strong> para la subida de imagenes, para la autenticacion cuenta con <strong>JWT</strong> y <strong>AUTH0</strong> entre otras tecnologias</p>
                    </div>
                    <a href="https://pro-manitas-client.vercel.app/">
                        <img src={Promanitas} className="img-fluid rounded" alt="profile pic" />
                    </a>
                </div>
                <div className="container-fluid d-flex align-items-center justify-content-between gap-5">
                    <a href="https://i-salud-optica.vercel.app/">
                        <img src={Ecommerce} className="img-fluid rounded" alt="profile pic" />
                    </a>
                    <div className='p-4 rounded-2 bg-dark text-wrap fw-normal fs-5'>
                        <h3 className='text-white-50'>Ecommerce</h3>
                        <p className='text-light'>
                            Ecommerce desarrollado en vite(react), consumiendo API desde <a href="https://fakestoreapi.com/">Fake Store API</a>, usando dependencias como <strong>Redux</strong>, <strong>TailwindCSS</strong>, entre otras
                        </p>
                    </div>
                </div>
                <div className="container-fluid d-flex align-items-center justify-content-between gap-5">
                    <a href="https://adminserver-nw65.onrender.com/">
                        <img src={AdminServer} className="img-fluid rounded" alt="profile pic" />
                    </a>
                    <div className='p-4 rounded-2 bg-dark text-wrap fw-normal fs-5'>
                        <h3 className='text-white-50'>Admin Server</h3>
                        <p className='text-light'>
                            Servidor Administrativo para usos generales. Cuenta con una base de datos en <strong>MySQL</strong>. Desarrollado completamente en <strong>NodeJs</strong> junto <strong>ExpressJs</strong> y <strong>HBS</strong> para las vistas entre otras librerias de autenticacion
                        </p>
                    </div>
                </div>
                <div className="container-fluid d-flex align-items-center justify-content-between gap-5">
                    <a href="https://pokedexk.netlify.app/">
                        <img src={Pokemon} className="img-fluid rounded" alt="profile pic" />
                    </a>
                    <div className='p-4 rounded-2 bg-dark text-wrap fw-normal fs-5'>
                        <h3 className='text-white-50'>Pokemon APP</h3>
                        <p className='text-light'>
                            SPA sencilla sobre pokemones en la cual se consume la PokeAPI
                        </p>
                    </div>
                </div>
                <div className="container-fluid d-flex align-items-center justify-content-between gap-5">
                    <a href="https://dogsraider.netlify.app/home">
                        <img src={Dogs} className="img-fluid rounded" alt="profile pic" />
                    </a>
                    <div className='p-4 rounded-2 bg-dark text-wrap fw-normal fs-5'>
                        <h3 className='text-white-50'>Dogs PI</h3>
                        <p className='text-light'>
                            SPA sencilla sobre razas de perros con algunas de sus caracteristicas mas relevantes
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proyects