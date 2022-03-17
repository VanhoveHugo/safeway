import { FC } from 'react'
import style from './component.module.css'

const Navigation: FC<any> = () => {
    return (
        <footer className={style.footer}>
            <hr />
            <div className={style.copyright}>
                Copyright © 2022 Safeway by Hugo.
            </div>
        </footer>
    )
}

export default Navigation