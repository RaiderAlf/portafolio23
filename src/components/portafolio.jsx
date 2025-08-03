//HOOKS
import { useRef, useEffect } from "react";
//ASSETS
import Ecommerce from '../assets/ecommerce.webp'
import Pokedex from '../assets/pokedex.webp'
import MotoClub from '../assets/motoclub.webp'
import MagalTech from '../assets/magaltech.webp'
import eazychat from '../assets/eazyChat.webp'
import eazydesk from '../assets/eazyDesk.webp'

import angularImg from '../assets/angular.png'
import awsImg from '../assets/aws.png'
import dockerImg from '../assets/docker.png'
import goImg from '../assets/golang.png'


const Portafolio = () => {

    const portfolio = useRef(null)

    useEffect(() => {
        const verificarScroll = () => {
            const { top, bottom } = portfolio.current.getBoundingClientRect();
            if (top < window.innerHeight && bottom > 0) {
                portfolio.current.classList.add('animateSkills')
            } else {
                portfolio.current.classList.remove('animateSkills')

            }
        };

        window.addEventListener('scroll', verificarScroll);
        return () => window.removeEventListener('scroll', verificarScroll);
    }, []);

    return (
        <div id='portfolio' className='px-20 py-16 md:py-20 [box-shadow:inset_0_0_15px_#5540af]'>
            <h2 className="text-center font-header text-4xl font-semibold drop-shadow-lg uppercase text-primary sm:text-5xl lg:text-6xl">
                Check out my Portfolio
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium drop-shadow-lg text-grey-10 sm:text-2xl lg:text-3xl">
                Here&apos;s what I have done with the past
            </h3>

            <div ref={portfolio} id="portfolioDiv" className="grid sm:ml-24 lg:ml-0 w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">


                <a id="skillsLink" target="_blank" rel="noreferrer" href="https://eazychat.io/"
                    className="transform transition-all hover:scale-105 md:mx-0 rounded-lg opacity-90 hover:opacity-100 hover:[box-shadow:_0_0_10px_rgb(0_0_0_)] [box-shadow:_0_0_30px_rgb(0_0_0_/_50%)]">
                    <img src={eazychat} className="w-full rounded shadow" alt="portfolio image" />
                    <a id='skills' className='opacity-0 bg-yellow absolute bottom-2 left-12 mx- rounded-xl font-bold hover:bg-primary hover:text-yellow text-primary p-4' href="https://eazychat.io/">Live Preview</a>
                    <div id="skills" className='opacity-0 bg-white/80 h-fit w-fit p-4 absolute top-24 sm:left-0 lg:left-36 flex items-center justify-center rounded text-black' >

                        <img src={angularImg} alt="angular" />
                        &&
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#00c1e0"></stop><stop offset="1" stopColor="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
                        </svg>
                        &&
                        <img src={goImg} alt="golang" />
                        &&
                        <img src={dockerImg} alt="docker" />
                        &&
                        <img src={awsImg} alt="AWS" />

                    </div>
                </a>

                <a id="skillsLink" target="_blank" rel="noreferrer" href="https://eazydesk.io/"
                    className="transform transition-all hover:scale-105 md:mx-0 rounded-lg opacity-90 hover:opacity-100 hover:[box-shadow:_0_0_10px_rgb(0_0_0_)] [box-shadow:_0_0_30px_rgb(0_0_0_/_50%)]">
                    <img src={eazydesk} className="w-full rounded shadow" alt="portfolio image" />
                    <a id='skills' className='opacity-0 bg-yellow absolute bottom-2 left-12 mx- rounded-xl font-bold hover:bg-primary hover:text-yellow text-primary p-4' href="https://eazydesk.io/">Live Preview</a>
                    <div id="skills" className='opacity-0 bg-white/80 h-fit w-fit p-4 absolute top-24 sm:left-0 lg:left-36 flex items-center justify-center rounded text-black' >

                        <img src={angularImg} alt="angular" />
                        &&
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#00c1e0"></stop><stop offset="1" stopColor="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
                        </svg>
                        &&
                        <img src={goImg} alt="golang" />
                        &&
                        <img src={dockerImg} alt="docker" />
                        &&
                        <img src={awsImg} alt="AWS" />
                    </div>
                </a>

                <a id="skillsLink" target="_blank" rel="noreferrer" href="https://motoclubsanluis.com/"
                    className="transform transition-all hover:scale-105 md:mx-0 rounded-lg opacity-90 hover:opacity-100 hover:[box-shadow:_0_0_10px_rgb(0_0_0_)] [box-shadow:_0_0_30px_rgb(0_0_0_/_50%)]">
                    <img src={MotoClub} className="w-full rounded shadow" alt="portfolio image" />
                    <a id='skills' className='opacity-0 bg-yellow absolute bottom-2 left-12 mx- rounded-xl font-bold hover:bg-primary hover:text-yellow text-primary p-4' href="https://motoclubsanluis.com/">Live Preview</a>
                    <div id="skills" className='opacity-0 bg-white/80 h-fit w-fit p-4 absolute top-24 sm:left-0 lg:left-52 flex items-center justify-center rounded text-black' >
                        <svg width="100" height="100" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="14" fill="#028CB0" />
                            <path d="M6.45538 16C6.45538 19.7823 8.65538 23.04 11.8369 24.5885L7.28462 12.1162C6.73798 13.338 6.45541 14.6615 6.45538 16ZM16 25.5446C17.1085 25.5446 18.1746 25.35 19.1731 25.0031L19.1054 24.8762L16.1692 16.8377L13.3092 25.1554C14.1554 25.4092 15.0608 25.5446 16 25.5446ZM17.3115 11.5238L20.7638 21.7877L21.72 18.6062C22.1262 17.2862 22.4392 16.3385 22.4392 15.5177C22.4392 14.3331 22.0162 13.5208 21.6608 12.8946C21.17 12.0992 20.7215 11.4308 20.7215 10.6523C20.7215 9.77231 21.3815 8.96 22.3292 8.96H22.4477C20.689 7.34546 18.3874 6.45141 16 6.45538C14.4192 6.45509 12.8632 6.84777 11.4718 7.59809C10.0805 8.34842 8.89746 9.43285 8.02923 10.7538L8.63846 10.7708C9.63692 10.7708 11.1769 10.6438 11.1769 10.6438C11.7015 10.6185 11.7608 11.3715 11.2446 11.4308C11.2446 11.4308 10.7285 11.4985 10.1446 11.5238L13.6308 21.8638L15.7208 15.6023L14.2315 11.5238C13.898 11.5054 13.565 11.4772 13.2331 11.4392C12.7169 11.4054 12.7762 10.6185 13.2923 10.6438C13.2923 10.6438 14.8662 10.7708 15.8054 10.7708C16.8038 10.7708 18.3438 10.6438 18.3438 10.6438C18.86 10.6185 18.9277 11.3715 18.4115 11.4308C18.4115 11.4308 17.8954 11.49 17.3115 11.5238ZM20.7977 24.25C22.2416 23.4104 23.4399 22.2066 24.2729 20.7589C25.1059 19.3112 25.5444 17.6703 25.5446 16C25.5446 14.3415 25.1215 12.7846 24.3769 11.4223C24.5281 12.9211 24.3012 14.4339 23.7169 15.8223L20.7977 24.25ZM16 27C13.0826 27 10.2847 25.8411 8.22183 23.7782C6.15893 21.7153 5 18.9174 5 16C5 13.0826 6.15893 10.2847 8.22183 8.22183C10.2847 6.15893 13.0826 5 16 5C18.9174 5 21.7153 6.15893 23.7782 8.22183C25.8411 10.2847 27 13.0826 27 16C27 18.9174 25.8411 21.7153 23.7782 23.7782C21.7153 25.8411 18.9174 27 16 27Z" fill="white" />
                        </svg>
                    </div>
                </a>

                <a id="skillsLink" target="_blank" rel="noreferrer" href="https://magal-tech-ss.vercel.app/"
                    className="transform transition-all hover:scale-105 md:mx-0 rounded-lg opacity-90 hover:opacity-100 hover:[box-shadow:_0_0_10px_rgb(0_0_0_)] [box-shadow:_0_0_30px_rgb(0_0_0_/_50%)]">
                    <img src={MagalTech} className="w-full rounded shadow" alt="portfolio image" />
                    <a id='skills' className='opacity-0 bg-yellow absolute bottom-2 left-12 mx- rounded-xl font-bold hover:bg-primary hover:text-yellow text-primary p-4' href="https://magal-tech-ss.vercel.app/">Live Preview</a>
                    <div id="skills" className='opacity-0 bg-white/80 h-fit w-fit p-4 absolute top-24 sm:left-0 lg:left-36 flex items-center justify-center rounded text-black' >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
                            <path fill="#4e7ab5" d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"></path><path fill="#4e7ab5" d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"></path><path fill="#4e7ab5" d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"></path><path fill="#8bb7f0" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"></path><path fill="#4e7ab5" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"></path><path fill="#8bb7f0" d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"></path><path fill="#8bb7f0" d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"></path><g><path fill="#8bb7f0" d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"></path></g>
                        </svg>
                        &&
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#00c1e0"></stop><stop offset="1" stopColor="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
                        </svg>
                    </div>
                </a>

                <a id="skillsLink" target="_blank" rel="noreferrer" href="https://e-commerce-fake-api-theta.vercel.app/"
                    className="transform transition-all hover:scale-105 md:mx-0 rounded-lg opacity-90 hover:opacity-100 hover:[box-shadow:_0_0_10px_rgb(0_0_0_)] [box-shadow:_0_0_30px_rgb(0_0_0_/_50%)]">
                    <img src={Ecommerce} className="w-full rounded shadow" alt="portfolio image" />
                    <a id='skills' className='opacity-0 bg-yellow absolute bottom-2 left-12 rounded-xl font-bold hover:bg-primary hover:text-yellow text-primary mx-40 p-4' href="https://github.com/RaiderAlf/e-commerceFakeApi">Repository Link</a>
                    <a id='skills' className='opacity-0 bg-yellow absolute bottom-2 left-12 mx- rounded-xl font-bold hover:bg-primary hover:text-yellow text-primary p-4' href="https://e-commerce-fake-api-theta.vercel.app/">Live Preview</a>
                    <div id="skills" className='opacity-0 bg-white/80 h-fit w-fit p-4 absolute top-24 sm:left-0 lg:left-4 flex items-center justify-center rounded text-black' >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
                            <path fill="#4e7ab5" d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"></path><path fill="#4e7ab5" d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"></path><path fill="#4e7ab5" d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"></path><path fill="#8bb7f0" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"></path><path fill="#4e7ab5" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"></path><path fill="#8bb7f0" d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"></path><path fill="#8bb7f0" d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"></path><g><path fill="#8bb7f0" d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"></path></g>
                        </svg>
                        &&
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#7e57c2" d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"></path><path fill="#7e57c2" d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"></path><path fill="#7e57c2" d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"></path>
                        </svg>
                        &&
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#00c1e0"></stop><stop offset="1" stopColor="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
                        </svg>
                        &&
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
                            <path fill="#6e78ac" d="M83.242,60.482c-6.349,1.924-9.957-0.415-9.957-0.415s-0.006,0-0.007,0l-0.394-0.488	c0.131-0.117,0.264-0.242,0.4-0.381l0.019-0.017l-0.001-0.002c5.639-5.753,15.838-29.562,9.749-37.378	c-8.553-10.979-25.66-5.745-25.66-5.745l0.064,0.183c-4.889-1.666-9.947-1.625-13.851,0.838c-0.661,0.417-1.273,0.873-1.844,1.357	l0.014-0.187c0,0-8.149-3.213-15.851-2.383c-7.954,0.857-12.319,6.83-12.319,15.83s6.17,30.553,10.17,34.553s6,2,7,1	c0.896-0.896,6.588-7.387,7.771-8.738c2.143,1.4,4.575,1.743,5.983,1.748c-0.184,0.991-1.31,4.988-7.562,5.714	c-2.809,0.447-1.915,2.298,0.128,2.872c2.002,0.563,8.415,1.967,12.335-3.509c-0.052,3.397-0.183,9.771,0.304,15.126	c0.574,6.319,3.983,8.376,6.511,8.713c7.878,1.048,10.628-4.308,11.394-6.702c0.702-2.194,1.839-10.809,2.213-16.588l0.503-0.089	l-0.004,0.05c8.106,1.277,12.734-1.66,14.362-3.191C86.338,61.12,85.349,59.844,83.242,60.482z"></path><path fill="none" stroke="#1f212b" strokeMiterlimit="10" strokeWidth="2" d="M39,58c0,0-6.75,7.562-7.75,8.562s-3,3-7-1	s-10.25-25-10.25-34s4.234-15.518,12.188-16.375C33.89,14.358,42,18,42,18"></path><path fill="none" stroke="#1f212b" strokeMiterlimit="10" strokeWidth="2" d="M71.213,56.947	c2.681-2.106,2.968-8.713,2.489-12.734c-0.479-4.021,0.331-6.392,0.235-11.275C70.682,19.629,53.612,10.839,43.75,17.062	s-8.854,20.137-8.375,24.062s-2.444,6.539-0.625,12.188s7.644,6.698,10.037,6.698c2.394,0,4.883,0.957,4.883,3.543	s-0.287,10.34,0.287,16.66c0.574,6.319,3.983,8.376,6.511,8.713c7.878,1.048,10.628-4.309,11.394-6.702s2.052-12.439,2.298-18.096	c0.191-4.404,3.351-4.309,3.351-4.309s3.608,2.339,9.957,0.415c2.106-0.638,3.096,0.638,1.468,2.17	c-1.628,1.532-6.017,4.56-14.124,3.283"></path><path fill="none" stroke="#1f212b" strokeMiterlimit="10" strokeWidth="2" d="M74.085,33.617c0,0-6.523-2.242-8.71,2.195	c-1.893,3.841,3.987,18.294,8.199,23.592"></path><path fill="none" stroke="#1f212b" strokeMiterlimit="10" strokeWidth="2" d="M34.574,36.617c0,0,7.652-4.612,11.801-1.867	S48.936,48.106,47.149,52c-1.787,3.894-2.362,7.787-2.362,7.787s-0.447,5.106-7.596,5.936c-2.809,0.447-1.915,2.298,0.128,2.872	c2.043,0.574,8.681,2.043,12.574-3.83"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M57.617,15.809	c0,0,17.356-4.174,25.383,5.629c6.553,8.003-4.766,33.882-10.191,38.158"></path><path fill="#1f212b" d="M69.154,38.037c-1.652,0.168-3.423-1.939-0.096-2.346C72.177,35.31,71.323,37.817,69.154,38.037z"></path><path fill="#1f212b" d="M43.223,38.848c-1.824-0.23-3.212-2.945,0.481-2.556C47.165,36.657,45.619,39.151,43.223,38.848z"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M39.492,27.447	c-0.236,0.688-0.451,1.425-0.641,2.213"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M47.808,18.479	c-2.789,0.876-5.771,2.939-7.731,7.456"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M55.064,18.298	c0,0-2.11-0.621-4.851-0.319"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M20.148,21.817	c-1.921,2.074-3.369,5.451-3.173,10.945"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M28.319,18.553	c0,0-3.417-0.258-6.503,1.833"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M53.549,82.6	c0.649,1.702,1.858,3.266,4.1,3.613"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M52.83,77.596	c0,0-0.095,1.358,0.186,3.001"></path>
                        </svg>
                    </div>
                </a>

                <a id="skillsLink" target="_blank" rel="noreferrer" href="https://raideralf.github.io/pokedex/"
                    className="transform transition-all hover:scale-105 md:mx-0 rounded-lg opacity-90 hover:opacity-100 hover:[box-shadow:_0_0_10px_rgb(0_0_0_)] [box-shadow:_0_0_30px_rgb(0_0_0_/_50%)]">
                    <img src={Pokedex} className=" w-full rounded shadow" alt="portfolio image" />
                    <a id='skills' className='opacity-0 bg-yellow absolute bottom-2 left-12 rounded-xl font-bold hover:bg-primary hover:text-yellow text-primary mx-40 p-4' href="https://github.com/RaiderAlf/pokedex">Repository Link</a>
                    <a id='skills' className='opacity-0 bg-yellow absolute bottom-2 left-12 mx- rounded-xl font-bold hover:bg-primary hover:text-yellow text-primary p-4' href="https://raideralf.github.io/pokedex/">Live Preview</a>
                    <div id="skills" className='opacity-0 bg-white/80 h-fit w-fit p-4 absolute top-24 sm:left-16 lg:left-24 flex items-center justify-center rounded text-black' >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                        </svg>
                        &&
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                        </svg>
                        &&
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                        </svg>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Portafolio