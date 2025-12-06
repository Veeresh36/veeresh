import react from 'react'
import About from '../pages/about'
import Projects from '../pages/poject'
import Cantact from '../pages/cantact'
import style from '../pages/hero.module.css'
import { Link } from 'react-router-dom'


function hero() {
    return (
        <>
            <div className={`container-fluid ${style.hero}`}>
                <div className={style.hero}>
                    <div className={style.main}>
                        <Link to="/" style={{cursor: "pointer"}}><img src='./pers.jpg' alt="profile image" className={style.profile} /></Link>
                        <span className={style.subtitle}>Hi, I’m Veeresh <span className={style.hand}>👋</span></span>
                        <br />
                        <h1>FULLSTACK <br />WEB DEVELOPER.</h1>
                        {/* <p>A passionate <span>Python</span> and <span>MERN Stack Developer</span> with a strong focus on <span>UI/UX design</span>, specialized in building modern, responsive, and interactive web applications using <span>React.js, Node.js, Express.js, MongoDB</span>, and Python frameworks</p> */}
                        <p>I build modern, scalable, and user-centered digital applications using the <span>MERN stack</span> and <span>Python</span>. I focus on delivering clean UI, seamless user experiences, and robust backend logic — transforming ideas into fully functional <span>products</span>.</p>
                        <a href="#contact" className={style.btn}>Reach Out</a>
                    </div>
                </div>
            </div>
            <About />
            <Projects />
            <Cantact />
        </>
    )
}

export default hero