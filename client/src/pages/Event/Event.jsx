import React from 'react'
import Button from '../../components/ui/Button/Button'

const Event = () => {
    return (
        <div className='my-16 container flex flex-col mx-auto items-center justify-center w-fit text-text-brand'>

            {/* Event Hero */}
            <div className='w-xl text-left flex flex-col gap-2'>
                <h1 className='text-5xl font-bold w-full italic font-cheltenham'>Spardha: The Sports Fest</h1>
                <p className='w-full text-text-secondary font-cheltenham text-2xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
            </div>

            <hr className='w-full my-6 border-gray-1' />

            <div className='flex justify-between items-center w-full'>
                <div className='flex justify-center items-center gap-3'>
                    <div className='border border-gray-1 rounded-full flex items-center p-2'>
                        {/* <IconMapPin className='font-light' /> */}
                        <img src="assets/icons/location.svg" alt="" />
                    </div>
                    <p className='font-semibold font-roboto-slab'>Main Auditorium</p>
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <Button variant='icon' className="font-roboto-slab">
                        Apply now
                    </Button>
                    {/* <Button className='border border-gray-1 rounded-full flex items-center p-3'> */}
                    <Button variant="icon" className="p-3">
                        <img src="assets/icons/share.svg" />
                    </Button>
                    <Button variant="icon" className="px-4 py-3">
                        <img src="assets/icons/bookmark.svg" />
                    </Button>
                    <Button variant="icon" className="px-4 py-3">
                        <img src="assets/icons/gallery.svg" />
                    </Button>
                </div>
            </div>
            <img className='my-12' src="https://placehold.co/580x400" alt="event-image" />


            {/* Profile Pictures */}
            <div className='flex gap-6 w-full'>
                <img className='w-14 h-14 rounded-full object-cover filter grayscale' src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile-1" />
                <img className='w-14 h-14 rounded-full object-cover filter grayscale' src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile-2" />
                <img className='w-14 h-14 rounded-full object-cover filter grayscale' src="https://randomuser.me/api/portraits/men/67.jpg" alt="profile-3" />
            </div>

            {/* By Whom */}
            <p className='font-franklin w-full mt-5 text-text-secondary'>
                By <span className='underline'>
                    <a href="https://rishihood.edu.in/">Rishihood University</a>
                </span>
            </p>

            {/* Meta Data */}
            <div className='font-roboto-slab w-full text-xs my-4 text-text-secondary flex gap-5'>
                <p>July 14, 2025</p>
                <p>Updated 12:00 p.m. IST</p>
            </div>

            <div className='flex flex-col gap-8 text-2xl font-roboto-slab text-text-secondary w-xl mt-2'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
            </div>
        </div>
    )
}

export default Event