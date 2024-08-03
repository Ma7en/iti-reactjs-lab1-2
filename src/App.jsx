/* eslint-disable no-unused-vars */
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Hero from "./pages/homepage/hero/Hero";
import Bio from "./pages/homepage/bio/Bio";
import Skills from "./pages/homepage/skills/Skills";
import Posrtfolio from "./pages/homepage/portfolio/Posrtfolio";
import Footer from "./pages/homepage/footer/Footer";
import { useEffect } from "react";

function App() {
    // const [count, setCount] = useState(0);

    // scroll smoth =>
    // useEffect(() => {
    //     const handleScroll = (event) => {
    //         event.preventDefault();
    //         if (event.deltaY > 0) {
    //             window.scrollBy({
    //                 top: window.innerHeight,
    //                 left: 0,
    //                 behavior: "smooth",
    //             });
    //         } else {
    //             window.scrollBy({
    //                 top: -window.innerHeight,
    //                 left: 0,
    //                 behavior: "smooth",
    //             });
    //         }
    //     };

    //     window.addEventListener("wheel", handleScroll, { passive: false });

    //     return () => {
    //         window.removeEventListener("wheel", handleScroll);
    //     };
    // }, []);

    return (
        <>
            <Hero />
            <Bio />
            <Skills />
            <Posrtfolio />
            <Footer />

            {/* <div>mazen</div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae veniam maiores praesentium soluta nam consequuntur
                eaque, accusamus dignissimos quaerat nostrum unde blanditiis,
                adipisci provident hic exercitationem nesciunt cum doloribus
                officiis!
            </p>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faEnvelope} /> */}

            {/* <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faFacebook} /> */}

            {/* <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p> */}
        </>
    );
}

export default App;
