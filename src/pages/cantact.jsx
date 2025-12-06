import React from 'react'
import style from '../pages/contact.module.css'
import '../../src/style.css'

function cantact() {
    return (
        <>
            <div className={`${style.container}`} id='contact'>
                <div className={style.contact_content}>
                    <h2 className={`${style.contact__title}`}>Get In Contact</h2>
                    <p className={`${style.contact__description}`}>Whether you are starting a project, have business inquiries or just want to say hi, my inbox is always open so feel free to reach out and I will get back to you as soon as possible.</p>
                    <a className={`${style.contact__btn}, ${style.btn}`} href="mailto:veeresh.b.bashetti@gmail.com" target="_blank">React Out</a>
                </div>

                <footer>
                    <h3 className={`${style.footer__title}`}>~ Veeresh Bashetti ~</h3>
                </footer>
            </div >
        </>
    )
}

export default cantact
