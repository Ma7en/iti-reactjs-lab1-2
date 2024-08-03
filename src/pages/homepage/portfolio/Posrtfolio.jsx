/* eslint-disable no-unused-vars */
import React from "react";

function Portfolio() {
    return (
        <>
            {/* <div className="portfolio" style={{ height: "100vh" }}> */}
            <div className="portfolio">
                <div className="container py-5">
                    <div className="title title text-start mb-5">
                        <h2 className="fs-1 fw-bold text-capitalize ">
                            portfolio
                        </h2>
                    </div>

                    <div className="content row g-3 align-items-stretch px-4">
                        {/* 1 */}
                        <div className="port col-12 col-md-6 col-lg-4 ">
                            {/* <div className="img">
                                <img src="images/portfolio/1.jpg" alt="" />
                            </div> */}

                            <div
                                className="info text-bg-dark p-5 text-center "
                                style={{ minHeight: "200px" }}
                            >
                                <h3>web design</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="port col-12 col-md-6 col-lg-4 ">
                            {/* <div className="img">
                                <img src="images/portfolio/1.jpg" alt="" />
                            </div> */}

                            <div
                                className="info text-bg-secondary p-5 text-center"
                                style={{ minHeight: "200px" }}
                            >
                                <h3>mobile design</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="port col-12 col-md-6 col-lg-4  ">
                            {/* <div className="img">
                                <img src="images/portfolio/1.jpg" alt="" />
                            </div> */}

                            <div
                                className="info text-bg-dark p-5 text-center"
                                style={{ minHeight: "200px" }}
                            >
                                <h3>logo design</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="port col-12 col-md-6 col-lg-4  ">
                            {/* <div className="img">
                                <img src="images/portfolio/1.jpg" alt="" />
                            </div> */}

                            <div
                                className="info text-bg-secondary p-5 text-center"
                                style={{ minHeight: "200px" }}
                            >
                                <h3>web application development</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="port col-12 col-md-6 col-lg-4  ">
                            {/* <div className="img">
                                <img src="images/portfolio/1.jpg" alt="" />
                            </div> */}

                            <div
                                className="info text-bg-dark p-5 text-center"
                                style={{ minHeight: "200px" }}
                            >
                                <h3>mobile application development</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="port col-12 col-md-6 col-lg-4  ">
                            {/* <div className="img">
                                <img src="images/portfolio/1.jpg" alt="" />
                            </div> */}

                            <div
                                className="info text-bg-secondary p-5 text-center"
                                style={{ minHeight: "200px" }}
                            >
                                <h3>PWA development</h3>
                                {/* <p>Lorem ipsum dolor sit amet.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
