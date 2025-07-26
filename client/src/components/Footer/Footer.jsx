import { Link } from 'react-router-dom'

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Competitions', path: '/competitions' },
  { name: 'Workshops', path: '/workshops' },
  { name: 'Conferences', path: '/conferences' }
]


const legalLinks = [
  { name: 'Privacy Policy', path: '/' },
  { name: 'Terms & Conditions', path: '/' },
  { name: 'Code', path: '/' },
  { name: 'License', path: '/' },
]

const socialLinks = [
  { name: 'Instagram', path: '/' },
  { name: 'LinkedIn', path: '/' },
  { name: 'Discord', path: '/' },
  { name: 'YouTube', path: '/' },
]

const Footer = () => {
  return (
    <div className='container mx-auto my-4'>
      <div>
        <hr className='border-gray-2 border-3' />
        <hr className='border-gray-2 mt-1' />
      </div>

      <div className='text-text-primary border-b py-8 border-gray-1'>
        {/* Header */}
        <h1 className='font-brand text-2xl mb-4 text-brand-black'>NXTUP</h1>
        <div className='flex gap-14'>
          {/* Navigation */}
          <div className='flex flex-col gap-4'>
            <h1 className='font-franklin uppercase'>
              Navigation
            </h1>
            {/* Links */}
            <ul className='flex flex-col gap-2 font-roboto-slab  text-text-primary'>
              {
                navigationLinks.map((link, idx) => (
                  <li
                    className='hover:underline'
                    key={idx}>
                    <Link to={link.path}>
                      {link.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Legal */}
          <div className='flex flex-col gap-4'>
            <h1 className='font-franklin uppercase'>
              Legal
            </h1>
            {/* Links */}
            <ul className='flex flex-col gap-2 font-roboto-slab text-text-primary'>
              {
                legalLinks.map((link, idx) => (
                  <li
                    className='cursor-pointer hover:underline'
                    key={idx}>
                    <a to={link.path}>
                      {link.name}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* Socials */}
          <div className='flex flex-col gap-4'>
            <h1 className='font-franklin uppercase'>
              Socials
            </h1>
            {/* Links */}
            <ul className='flex flex-col gap-2 font-roboto-slab text-text-primary'>
              {
                socialLinks.map((link, idx) => (
                  <li
                    className='cursor-pointer hover:underline'
                    key={idx}>
                    <a to={link.path}>
                      {link.name}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Address */}
          <div className='flex flex-col gap-4'>
            <h1 className='font-franklin uppercase'>
              Address
            </h1>
            <p className='font-roboto-slab w-xs'>Newton School of Technology, Rishihood University,  Delhi NCR, Sonipat, Haryana &#8211; 131021</p>
          </div>

          {/* Contact info */}
          <div className='flex flex-col gap-4'>
            <h1 className='font-franklin uppercase'>
              Contact Info
            </h1>
            <p className='font-roboto-slab'>E-Mail: softwaredevg.club@nst.rishihood.edu.in</p>
            <p className='font-roboto-slab'>Phone: +91 12345 67890</p>
          </div>


          {/* Account */}
          <div className='flex flex-col gap-4 border-l pl-12 h-fit border-gray-1'>
            <h1 className='font-franklin uppercase'>
              Account
            </h1>
            <div className='flex flex-col gap-2 font-inter font-bold'>
              <div className='flex gap-1 cursor-pointer'>
                <img className='w-3.5' src="/assets/icons/user.svg" alt="" /><span>Manage my account</span>
              </div>
              <div className='flex gap-1 cursor-pointer'>
                <img width={12} src="/assets/icons/trash.svg" alt="" /><span>Delete my account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center w-full py-8 font-roboto-slab text-text-secondary'>Made with love by <span><a className="hover:underline" href="https://devclub-wbsite.vercel.app">DevClub, NST&lt;&gt;RU</a></span></p>
    </div>
  )
}

export default Footer