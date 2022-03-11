import { FC, useEffect, useState } from 'react'
import style from './component.module.css'
import { VscBeaker } from 'react-icons/vsc'
import { signIn, signOut, useSession } from "next-auth/react"

import Redirect from '@utils/link'


const Navigation: FC<any> = ({ children }) => {
    const { data: session, status } = useSession()
    const loading = status === "loading"

    const [menuState, setMenuState] = useState<boolean>(false)
    const handleClick = () => {
        var header = document.querySelector('header')
        let result = document.querySelector("#menu")?.classList.toggle(style.active)
        setMenuState(Boolean(result))
        console.log(header)
    }
    const handleResize = () => {
        if(document.querySelector("#menu")?.classList.contains(style.active) && window.innerWidth >= 768) {
            document.querySelector("#menu")?.classList.remove(style.active)
            setMenuState(false)
            window.removeEventListener('resize', handleResize, false)
        }
    }
    useEffect(() => {
        console.log(document.querySelector("#menu"))

        if(menuState === true) window.addEventListener('resize', handleResize)
    }, [menuState])

    return (
        <header className={style.header}>
            <div className={style.innerHeader}>
                <Redirect 
                    text="Safeway"
                    path='.' 
                    className={style.menuLink + " " + style.menuTitle} />
                <div className={style.menuContainer}>
                    <button className={style.menuButton} onClick={handleClick}>
                        <svg viewBox="0 0 40 34" width="20" height="20">
                            <rect y="00" width="40" height="4"></rect>
                            <rect y="15" width="40" height="4"></rect>
                            <rect y="30" width="40" height="4"></rect>
                        </svg>
                    </button>
                    <div className={style.menu} id="menu">
                        <nav>
                            <Redirect 
                                    text={
                                        <><VscBeaker />Challenges</>
                                    } 
                                    path='.' 
                                    className={style.menuLink} />
                        </nav>
                        {session ? 
                            <a 
                                href="/api/auth/logout" 
                                className={style.menuLink + " " + style.cta}
                                onClick={(e) => {
                                    e.preventDefault()
                                    signOut()
                                }}
                                >
                                    {session.user.name}
                                </a>
                            : 
                            <a href="/api/auth/signin" className={style.menuLink + " " + style.cta}>Connexion</a>
                        }
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation