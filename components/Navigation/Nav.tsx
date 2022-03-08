import { FC, useEffect, useState } from 'react'

import Redirect from 'utils/link'

import { VscBeaker, VscBook } from 'react-icons/vsc'

const Navigation: FC<any> = ({ children }) => {
    const [menuState, setMenuState] = useState<boolean>(false)

    const handleClick = () => {
        let result = document.querySelector('.menu')?.classList.toggle('active')
        setMenuState(Boolean(result))
    }

    const handleResize = () => {
        if(document.querySelector('.menu')?.classList.contains('active') && window.innerWidth >= 768) {
            document.querySelector('.menu')?.classList.remove('active')
            setMenuState(false)
            window.removeEventListener('resize', handleResize, false)
        }
    }
    useEffect(() => {
        if(menuState === true) window.addEventListener('resize', handleResize)
    }, [menuState])

    return (
        <header className='header'>
            <div className="innerHeader">
                <Redirect 
                    text="Safeway"
                    path='.' 
                    className='menuLink menuTitle' />
                <div className='menuContainer'>
                    <button className='menuButton' onClick={handleClick}>
                        <svg viewBox="0 0 40 34" width="20" height="20">
                            <rect y="00" width="40" height="4"></rect>
                            <rect y="15" width="40" height="4"></rect>
                            <rect y="30" width="40" height="4"></rect>
                        </svg>
                    </button>
                    <div className="menu">
                        <nav>
                            <Redirect 
                                    text={
                                        <><VscBeaker />Challenges</>
                                    } 
                                    path='.' 
                                    className='menuLink' />
                        </nav>
                        <a href="" className='menuLink cta'>Connexion</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation