
import Link from 'next/link'
import Cards from './Cards'
const CardsCont = () => {

    const links = [
        {
            title: "Fashion",
            src: "https://iili.io/dr00eK7.jpg",
            href: "/fashion",
            bgColor:"bg-black"
        },
        {
            title: "Jewelry",
            src: "https://iili.io/dsV3xS4.png",
            href: "/",
            bgColor:"bg-pink-400"
        },
        {
            title: "Street",
            src: "https://iili.io/dLCA6Gf.jpg",
            href: "/",
            bgColor:"bg-green-400"
        },
        {
            title: "Bride",
            src: "https://iili.io/dLf1nPs.jpg",
            href: "/",
            bgColor:"bg-orange-400"
        },
        {
            title: "Advertising",
            src: "https://iili.io/dsS7Ngp.webp",
            href: "/",
            bgColor:"bg-yellow-400"
        },
    ]
    return (
        <div className='w-full grid gap-2 grid-cols-2 bg-black'>
            {links.map((link) => (
                <div key={link.title} className=''>
                    <Link href={link.href}>
                    <Cards
                        src={link.src}
                        text={link.title}
                        className1=""
                        className4={link.bgColor}
                    />
                    </Link>
                </div>

            ))}
        </div>
    )
}

export default CardsCont