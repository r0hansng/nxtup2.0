import { Link } from 'react-router-dom'
import Button from "../ui/Button/Button"

const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Competitions', path: '/competitions' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Conferences', path: '/conferences' }
]

const NavBar = () => {
    return (
        <div className='flex justify-between container mx-auto items-center select-none mt-2 border-b py-4 border-outline'>
            <h1 className='text-4xl font-black font-brand'>NXTUP</h1>
            <ul className='flex gap-8 font-franklin text-xl text-text-primary'>
                {
                    navigationLinks.map((link, idx) => (
                        <li key={idx}>
                            <Link to={link.path}>
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Button className="text-xl cursor-pointer font-franklin" size='lg'>
                Log in
            </Button>
        </div>
    )
}

export default NavBar