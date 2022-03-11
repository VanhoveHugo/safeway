import { FC } from 'react'
import style from './component.module.css'

const Navigation: FC<any> = () => {
    return (
        <footer className={style.footer}>
            <div className={style.copyright}>
                © 2022 Copyright: <span>Safeway</span>
            </div>
        </footer>
    )
}

export default Navigation