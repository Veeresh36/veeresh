import React from 'react';
import style from '../pages/project.module.css';
import { Link } from 'react-router-dom'

import p1 from '../assets/01.png'
import p2 from '../assets/02.jpg'
import p3 from '../assets/03.png'
import p4 from '../assets/04.jpg'
import p5 from '../assets/05.jpg'
import p6 from '../assets/06.jpg'


let projects = [
  {
    title: 'Fyntra – Full-Stack Web Application Project',
    description: 'A full-stack application built with modern standards, reusable components, and optimized performance.',
    image: p1
  },
  {
    title: 'Car Rental Platform with Booking, Admin Dashboard, and MERN Stack Features',
    description: 'Car Rental Platform with Booking, Admin Dashboard, and MERN Stack Web Application Development',
    image: p3
  },
  // {
  //   title: 'Car Rental Platform with Booking, Admin Dashboard, and MERN Stack Features',
  //   description: 'Car Rental Platform with Booking, Admin Dashboard, and MERN Stack Web Application Development',
  //   image: p2
  // }
];

const Project = () => {
  return (
    <>
      <div className={`container-fluid ${style.featured}`} id='projects'>
        <h3 className={style.subtitle}>Recent Projects</h3>

        <div className={style.wrapper}>
          <h2 className={style.title}>Some of My Recent Works</h2>
          <a className={style.link} href="#">
            <i className="fa-solid fa-link"></i>
          </a>
        </div>

        <p className={style.desc}>
          Here are a few projects that showcase my skills and expertise in
          frontend development. Each project reflects my commitment to creating
          high-quality, user-friendly web applications.
        </p>

        <div className={style.prosBox}>
          <div className={`${style.row}`}>
            <div className={` ${style.item}`}>
              <div className={style.cards}>
                {
                  projects == 0 ? <>
                    <span className='text-danger'>No products</span>
                  </> :
                    <div className={style.mainCards}>

                    {projects.map(item =>
                        <div className={style.card}>
                          <img src={item.image} alt="" />
                          <div className={style.info}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className={style.btns}>
                              <a className={`btn btn-dark ${style.link}`} href="#">
                                View Project
                                <i className="fa-solid fa-arrow-right"></i>
                              </a>
                              <a className={`btn btn-danger ${style.link}`} href="#">
                                get code
                                <i className="fa-solid fa-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                }
              </div>
              {/* < Link className={`${style.contact__btn}, ${style.btn} mt-5`} to="" target="_blank">Explore More</Link> */}
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Project;
