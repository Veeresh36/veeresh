import style from '../pages/about.module.css'
import profilePic from '../../public/aboutpers.jpg'
import img1 from '../assets/techskills/01.png'
import img2 from '../assets/techskills/02.png'
import img3 from '../assets/techskills/03.png'
import img4 from '../assets/techskills/04.png'
import img5 from '../assets/techskills/05.png'
import img6 from '../assets/techskills/06.png'
import img7 from '../assets/techskills/07.png'
import img8 from '../assets/techskills/08.png'
import img9 from '../assets/techskills/09.png'
import img10 from '../assets/techskills/10.png'
import img11 from '../assets/techskills/11.png'
import img12 from '../assets/techskills/12.png'
import img13 from '../assets/techskills/13.png'
import img14 from '../assets/techskills/14.png'
import img15 from '../assets/techskills/15.png'
import img16 from '../assets/techskills/16.png'
import img17 from '../assets/techskills/17.png'
import img18 from '../assets/techskills/18.png'
import img19 from '../assets/techskills/19.png'


function about() {

    const imgs = [{ imgid: 1, Link: img1, alt: "techStacks", goto: "https://helpx.adobe.com/in/support/xd.html", title: "AdobeXD" },
    { imgid: 2, Link: img2, alt: "techStacks", goto: "", title: "Bootstrap" },
    { imgid: 3, Link: img3, alt: "techStacks", goto: "", title: "Canva" },
    { imgid: 4, Link: img4, alt: "techStacks", goto: "", title: "Chatgpt" },
    { imgid: 5, Link: img5, alt: "techStacks", goto: "", title: "Css" },
    { imgid: 6, Link: img6, alt: "techStacks", goto: "", title: "Figma" },
    { imgid: 7, Link: img7, alt: "techStacks", goto: "", title: "Git" },
    { imgid: 8, Link: img8, alt: "techStacks", goto: "", title: "Github" },
    { imgid: 9, Link: img9, alt: "techStacks", goto: "", title: "Html" },
    { imgid: 10, Link: img10, alt: "techStacks", goto: "", title: "Javascript" },
    { imgid: 11, Link: img11, alt: "techStacks", goto: "", title: "MongoDB" },
    { imgid: 12, Link: img12, alt: "techStacks", goto: "", title: "Node.Js" },
    { imgid: 13, Link: img13, alt: "techStacks", goto: "", title: "Notion" },
    { imgid: 14, Link: img14, alt: "techStacks", goto: "", title: "Photoshop" },
    { imgid: 15, Link: img15, alt: "techStacks", goto: "", title: "Python" },
    { imgid: 16, Link: img16, alt: "techStacks", goto: "", title: "React.Js" },
    { imgid: 17, Link: img17, alt: "techStacks", goto: "", title: "Mysql" },
    { imgid: 18, Link: img18, alt: "techStacks", goto: "", title: "Thailwind Css" },
    { imgid: 19, Link: img19, alt: "techStacks", goto: "", title: "Vercel" }
    ]

    return (
        <>
            <div className={` container-fluid ${style.about}`} id='about'>

                {/* about description */}
                <div className={`${style.about_content} container`}>
                    <h2>About</h2>
                    <p><veeresh className='h6 text-danger'>Hi, I'm Veeresh — Full-Stack Web Developer (MERN & Python) + UI/UX Enthusiast</veeresh> <br /><br />

                        I’m a passionate and curious full-stack developer skilled in building responsive, interactive, and real-world web applications. With strong knowledge in MongoDB, Express.js, React.js, Node.js, and Python, I enjoy designing user-friendly interfaces and engineering efficient backend systems that work seamlessly together. <br /><br />

                        I believe great products are built with a perfect balance of design, usability, and performance. My development style focuses on writing clean, modular code, understanding user expectations, and continuously improving both functionality and aesthetics.

                        <br /><br />

                        As a fresher, I am consistently learning, building, and improving through hands-on projects. I love solving real-world problems, exploring new technologies, and transforming concepts into working digital experiences.

                        <br /><br />

                        Thanks for visiting — <a className={style.together} href="#contact">let’s build something meaningful together! 🚀</a></p>

                    {/* audio content */}

                    {/* <div className={style.perent_audio_container}>
                        <audio src={audio} controls></audio>
                        <div className={style.speech_bubble}>
                            <span>Prefer listening? Hit play now.</span>
                        </div>
                    </div> */}
                </div>

                {/* about image */}
                <div className={style.about_img}>
                    <img src={profilePic} alt="" />
                </div>
            </div>
            {/* technical skills */}
            <div className={style.tech_skills}>
                <h3 class={style.about_subtitle}>Technical Skills</h3>
                <hr class={style.about_hr} />
                <div class={style.about_ul_container}>
                    {/* <ul class={style.about_ul}>
                        <li class={style.about_list}>HTML5, CSS3, JavaScript(ES6+)</li>
                        <li class={style.about_list}>Bootstrap 5, Tailwind CSS</li>
                        <li class={style.about_list}>React.js</li>
                        <li class={style.about_list}>Python (Django)</li>
                        <li class={style.about_list}>Node.js, Express.js</li>
                        <li class={style.about_list}>UI/UX Design</li>
                    </ul>
                    <br />
                    <ul class={style.about_ul}>
                        <li class={style.about_list}>MongoDB, MySQL (CRUD, joins, subqueries)</li>
                        <li class={style.about_list}>JWT, bcrypt, <br /> &nbsp; Git, GitHub</li>
                        <li class={style.about_list}>Visual Studio Code, Figma, Adobe XD, Photoshop</li>
                    </ul> */}
                    <div className={style.scroller}>
                        <div className={style.inner}>
                            {imgs.map((item, idx) => (
                                <div key={idx} className={style.techImg}>
                                    <a href={item.goto} target='_blank'><abbr style={{ cursor: "pointer" }} title={item.title}><img src={item.Link} alt={item.alt} /></abbr></a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about
