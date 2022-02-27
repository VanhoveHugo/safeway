import { FC, useEffect, useState } from 'react'

import Redirect from 'utils/link'

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
            <Redirect 
                text={
                    <figure className='relative w-14 h-14 flex items-center justify-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" className='logo' />
                    </figure>
                } 
                path='.' 
                className='menuLink' />
            <div className='menuContainer'>
                <button className='menuButton' onClick={handleClick}>
                    <svg viewBox="0 0 70 54" width="30" height="30">
                        <rect y="00" width="70" height="9" rx="8"></rect>
                        <rect y="22.5" width="70" height="9" rx="8"></rect>
                        <rect y="45" width="70" height="9" rx="8"></rect>
                    </svg>
                </button>
                <nav className='menu'>
                    <Redirect text='Products' path='.' className='menuLink' />
                    <Redirect text='Features' path='.' className='menuLink' />
                    <Redirect text='Marketplace' path='.' className='menuLink' />
                    <Redirect text='Company' path='.' className='menuLink' />
                </nav>
                <a href="" className='menuLink cta'>Log in</a>
            </div>

        </header>
    )
}

export default Navigation