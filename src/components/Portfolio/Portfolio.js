import React from 'react';
import propic from '../../media/me.jpg';

const Portfolio = () => {
    return (
        <main className='container'>
            <section className="row pt-4 justify-content-evenly align-items-center">
                <div className="col-lg-4 col-md-7 col-9 m-5 px-5">
                    <img className='w-100 rounded-circle shadow-lg' src={propic} />
                </div>
                <div className="col-lg-6 my-5 px-5">
                    <h3>Hi there!</h3>
                    <h1>I'm <span>Tanmay Kumar</span></h1>
                    <p className='mb-4'>
                        A full stack web developer based in Dhaka, Bangladesh. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Shortly after graduating from National University of Bangaldesh with a BSc. in Computer Science & Engineering, I started freelancing where I work on a wide variety of interesting and meaningful projects on a daily basis.
                    </p>
                    <a className='btn btn-outline-dark shadow' href='https://drive.google.com/file/d/1ooOsCEIZD8JJOvnQ4MsFoWNQO2tmusdX/view?usp=sharing' target="_blank">Download Resume <i className="ps-2 fas fa-download"></i></a>
                </div>
            </section>
            <section className="container px-5 pt-3 mb-5">
                <h2 className='mt-5 mb-4 text-center'>Languange Profeciency</h2>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>Bengali</p>
                    <p>Native</p>
                </div>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>English</p>
                    <p>Fluent</p>
                </div>
                <div className='col-md-4 mx-auto d-flex justify-content-between'>
                    <p>Hindi</p>
                    <p>Conversational</p>
                </div>
            </section>
            <section className='py-3 mb-5'>
                <h2 className='mt-5 mb-4 text-center'>Educational Qualifications</h2>
                <div className="col-lg-7 mx-auto d-flex justify-content-between">
                    <div className="col-md-2">
                        <p className="fs-5">2023</p>
                    </div>
                    <div className="col-md-8">
                        <small className='fs-6 text-end d-block'>BSc. in Computer Scince & Engineering</small>
                        <small className='text-end d-block text-secondary fw-bolder'>Tejgaon College, National University, Bangladesh</small>
                    </div>
                </div>
                <div className="my-4 col-lg-7 mx-auto d-flex justify-content-between">
                    <div className="col-md-2">
                        <p className="fs-5">2022</p>
                    </div>
                    <div className="col-md-8">
                        <small className='fs-6 text-end d-block'>Full Stack Web Development</small>
                        <small className='text-end d-block text-secondary fw-bolder'>Programming Hero, Bangladesh</small>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Portfolio;