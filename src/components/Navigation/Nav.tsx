import { FC, useEffect, useState } from 'react'
import style from './component.module.css'
import { VscBeaker } from 'react-icons/vsc'
import { signIn, signOut, useSession } from "next-auth/react"
import styled from 'styled-components'
import Link from 'next/link'

import Redirect from '@utils/link'

const Header = styled.header`
    position: relative;
    z-index:100;
    display: flex;
    height: 4rem;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    background: #fff;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`

const Navigation: FC<any> = ({ children }) => {
    const { data: session, status } = useSession()
    const loading = status === "loading"

    const [menuState, setMenuState] = useState<boolean>(false)
    const handleClick = () => {
        var header = document.querySelector('header')
        let result = document.querySelector("#menu")?.classList.toggle(style.active)
        setMenuState(Boolean(result))
    }
    const handleResize = () => {
        if(document.querySelector("#menu")?.classList.contains(style.active) && window.innerWidth >= 768) {
            document.querySelector("#menu")?.classList.remove(style.active)
            setMenuState(false)
            window.removeEventListener('resize', handleResize, false)
        }
    }
    useEffect(() => {
        if(menuState === true) window.addEventListener('resize', handleResize)
    }, [menuState])

    return (
        <Header>
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
                        
                            {status != 'loading' && (
                                <>
                                    {session?.user && (
                                        <Link 
                                        href="/api/auth/logout" 
                                        >
                                            <a 
                                                className={style.menuLink + " " + style.cta_login}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    signOut()
                                                }}
                                            >
                                                {session.user.image != undefined  && (
                                                    <img src={session.user.image} alt="Image of your address mail" />
                                                )}
                                            </a>
                                        </Link>
                                    )}
                                    {!session?.user && (
                                        <button 
                                            onClick={(e) => {
                                                e.preventDefault()
                                                signIn('google')
                                            }}
                                            className={style.menuLink + " " + style.cta}
                                        >
                                            Connexion
                                        </button>
                                    )}
                                </>
                            )}
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default Navigation