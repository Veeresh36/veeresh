import React from 'react';
import style from '../pages/project.module.css';

import p1 from '../assets/01.png'
import p3 from '../assets/03.png'


let projects = [
  {
    title: <>Full-Stack Web Application Project <span className='text-warning'>(FYNTRA)</span></>,
    description: 'A full-stack application built with modern standards, reusable components, and optimized performance.',
    image: p1,
    viewPros: "https://github.com/Veeresh36/FYNTRA",
    getcode: "https://fyntra-iota.vercel.app/"
  },
  {
    title: <>DAILY ROUTINE APP <span className="text-primary">(NOTED)</span></>,
    description: 'A modern routine management app with task tracking and clean user experience.',
    image: p3,
    viewPros: "https://todo-app-mu-amber-38.vercel.app/",
    getcode: "https://github.com/Veeresh36/Todo-app"
  }
];


const Project = () => {
  return (
    <>
      <div className={`container ${style.featured}`} id='projects'>
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
                              <a className={`btn btn-dark cursor-pointer ${style.link}`} target='_blank' href={item.viewPros}>
                                View Project
                                <i className="fa-solid fa-arrow-right"></i>
                              </a>
                              <a className={`btn btn-danger cursor-pointer ${style.link}`} target='_blank' href={item.getcode}>
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
