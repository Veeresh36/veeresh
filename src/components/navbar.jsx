import React, { useState, useEffect } from 'react'
import style from '../components/navbar.module.css'
import logo from '../assets/logo.gif'

const Navbar = () => {

  // state for mobile nav
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  // state for theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark-mode"
  );

  const closeMobileMenu = () => {
    setIsMobileNavOpen(false);
    document.body.style.overflowY = "auto";
  };

  useEffect(() => {
    if (theme === "light-mode") {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light-mode" ? "dark-mode" : "light-mode"));
  };


  const handleNavBar = () => {
    setIsMobileNavOpen((prev) => !prev);
    document.body.style.overflowY = isMobileNavOpen ? "auto" : "hidden";
  };

  return (
    <>
      <nav className={style.lap}>
        <img src={logo} className={style.logo}></img>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className={style.bar}></li>
          <li>
            <button className={style.header__sun} onClick={handleThemeToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            </button>
          </li>
          <li><a href="" className={style.btn}>Resume</a></li>
        </ul>

        {/* Hamburger button */}
        <button className={style.header__bars} onClick={handleNavBar}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd" />
          </svg>
        </button>
      </nav>

      {/* Mobile nav */}
      <div className={`${style.mobileNav} ${isMobileNavOpen ? style.open : style.closed}`}>
        <nav className={style}>
          <ul className={style.mobileNav__menu}>
            <li><a className={style.mobileNav__link} href="#home" onClick={closeMobileMenu}>Home</a></li>
            <li><a className={style.mobileNav__link} href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a className={style.mobileNav__link} href="#projects" onClick={closeMobileMenu}>Projects</a></li>
            <li><a className={style.mobileNav__link} href="#contact" onClick={closeMobileMenu}>Contact</a></li>
            <li className={style.mobileNav__linkLine}></li>
            <li>
              <button className={style.mobileNav__sun} onClick={handleThemeToggle}>
                {/* Sun Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>

              </button>
            </li>
            <li>
              <a className={`${style.mobileNav__btn} ${style.btn} ${style.btncolor}`} href="">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
