import { FC } from 'react'
import Link from 'next/link'
import { linkType } from './type'

const Redirect: FC<linkType> = ({ path, text, className }) => {
    return (
        <Link href={path} >
            <a className={className}>{text}</a>
        </Link>
    )
}

export default Redirect