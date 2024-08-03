/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Skills() {
    const [html, setHtml] = useState("100");
    const [css, setCss] = useState("90");
    const [js, setJs] = useState("80");
    const [python, setPyhton] = useState("70");
    const [react, setReact] = useState("60");
    const [scss, setScss] = useState("50");

    return (
        <>
            {/* <div className="skills text-bg-dark " style={{ height: "100vh" }}></div> */}
            <div className="skills text-bg-dark ">
                <div className="container py-5">
                    <div className="title text-center mb-5">
                        <h2 className="fs-1 fw-bold text-capitalize ">
                            Skills
                        </h2>

                        <p className="text-secondary">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Est nobis voluptates iusto eius numquam
                            ratione consectetur dolor ducimus? A optio eum qui
                            laudantium beatae, esse inventore nobis, odit
                            temporibus molestias fugiat eveniet doloremque odio
                            dolorum totam officiis, tenetur nihil? Quidem?
                        </p>
                    </div>

                    <div className="content row g-5">
                        <div className="list col-12 col-md-4 mb-5">
                            <ul className="list-group  list-group-flush ">
                                <li className="list-group-item list-group-item-action text-bg-dark">
                                    <a
                                        href="#"
                                        className="text-decoration-none text-capitalize w-100 d-inline-block text-white"
                                    >
                                        my foucs
                                    </a>
                                </li>

                                <li className="list-group-item list-group-item-action text-bg-dark">
                                    <a
                                        href="#"
                                        className="text-decoration-none text-capitalize w-100 d-inline-block text-white"
                                    >
                                        ui/ux design
                                    </a>
                                </li>

                                <li className="list-group-item list-group-item-action text-bg-dark">
                                    <a
                                        href="#"
                                        className="text-decoration-none text-capitalize w-100 d-inline-block text-white"
                                    >
                                        responsive design
                                    </a>
                                </li>

                                <li className="list-group-item list-group-item-action text-bg-dark">
                                    <a
                                        href="#"
                                        className="text-decoration-none text-capitalize w-100 d-inline-block text-white"
                                    >
                                        web design
                                    </a>
                                </li>

                                <li className="list-group-item list-group-item-action text-bg-dark">
                                    <a
                                        href="#"
                                        className="text-decoration-none text-capitalize w-100 d-inline-block text-white"
                                    >
                                        mobile app design
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="skill-list col-12 col-md-8 ">
                            {/* html */}
                            <div className="skill row g-0 mb-3">
                                <p className="col-3 p-2 bg-secondary m-0 text-center">
                                    HTML5
                                </p>

                                <div className="col-9 bg-white">
                                    <div
                                        className="bg-info h-100"
                                        style={{
                                            width: `${html}% `,
                                            opacity: html,
                                            // backgroundColor: html,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* css */}
                            <div className="skill row g-0  mb-3">
                                <p className="col-3 p-2 bg-secondary m-0 text-center">
                                    css
                                </p>

                                <div className="col-9 bg-white">
                                    <div
                                        className="bg-info h-100"
                                        style={{
                                            width: `${css}%`,
                                            opacity: `0.${css}`,
                                            // backgroundColor: css,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* js */}
                            <div className="skill row g-0  mb-3">
                                <p className="col-3 p-2 bg-secondary m-0 text-center">
                                    JS
                                </p>
                                <div className="col-9 bg-white">
                                    <div
                                        className="bg-info h-100"
                                        style={{
                                            width: `${js}%`,
                                            opacity: `0.${js}`,
                                            // backgroundColor: js,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* python */}
                            <div className="skill row g-0  mb-3">
                                <p className="col-3 p-2 bg-secondary m-0 text-center">
                                    python
                                </p>
                                <div className="col-9 bg-white">
                                    <div
                                        className="bg-info h-100"
                                        style={{
                                            width: `${python}%`,
                                            opacity: `0.${python}`,
                                            // backgroundColor: pyhton,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* React */}
                            <div className="skill row g-0  mb-3">
                                <p className="col-3 p-2 bg-secondary m-0 text-center">
                                    React
                                </p>
                                <div className="col-9 bg-white">
                                    <div
                                        className="bg-info h-100"
                                        style={{
                                            width: `${react}%`,
                                            opacity: `0.${react}`,
                                            // backgroundColor: react,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* Scss */}
                            <div className="skill row g-0 ">
                                <p className="col-3 p-2 bg-secondary m-0 text-center">
                                    Scss
                                </p>
                                <div className="col-9 bg-white">
                                    <div
                                        className="bg-info h-100"
                                        style={{
                                            width: `${scss}%`,
                                            opacity: `0.${scss}`,
                                            // backgroundColor: scss,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
