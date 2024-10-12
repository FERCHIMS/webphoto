
import Link from 'next/link'
import Cards from './Cards'
import TransitionLink from '../transitionLink/TransitionLink'
import { linksHome } from '../links/Links'

const CardsCont = () => {
    return (
        <div className='w-full grid gap-2 grid-cols-2 bg-black'>
            {linksHome.map((links) => (
                <div key={links.title} className=''>

                    <TransitionLink href={links.href}>
                    <Cards
                        src={links.src}
                        text={links.title}
                        className1=""
                        className4={links.bgColor}
                    />
                    </TransitionLink>
                </div>

            ))}
        </div>
    )
}

export default CardsCont