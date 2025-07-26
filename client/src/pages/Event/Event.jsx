import React from 'react'
import Button from '../../components/ui/Button/Button'

const Event = () => {
    return (
        <div className='container flex flex-col items-center justify-center mx-auto my-16 w-fit text-text-brand'>

            {/* Event Hero */}
            <div className='flex flex-col gap-2 text-left w-xl'>
                <h1 className='w-full text-5xl italic font-bold font-cheltenham'>Spardha: The Sports Fest</h1>
                <p className='w-full text-2xl text-text-secondary font-cheltenham'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
            </div>

            <hr className='w-full my-6 border-gray-1' />

            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center justify-center gap-3'>
                    <div className='flex items-center p-2 border rounded-full border-gray-1'>
                        {/* <IconMapPin className='font-light' /> */}
                        <img src="assets/icons/location.svg" alt="" />
                    </div>
                    <p className='font-semibold font-roboto-slab'>Main Auditorium</p>
                </div>

                <div className='flex items-center justify-center gap-3'>
                    <Button variant='icon' className="font-roboto-slab">
                        Apply now
                    </Button>
                    {/* <Button className='flex items-center p-3 border rounded-full border-gray-1'> */}
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
            <div className='flex w-full gap-6'>
                <img className='object-cover rounded-full w-14 h-14 filter grayscale' src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile-1" />
                <img className='object-cover rounded-full w-14 h-14 filter grayscale' src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile-2" />
                <img className='object-cover rounded-full w-14 h-14 filter grayscale' src="https://randomuser.me/api/portraits/men/67.jpg" alt="profile-3" />
            </div>

            {/* By Whom */}
            <p className='w-full mt-5 font-franklin text-text-secondary'>
                By <span className='underline'>
                    <a href="https://rishihood.edu.in/">Rishihood University</a>
                </span>
            </p>

            {/* Meta Data */}
            <div className='flex w-full gap-5 my-4 text-xs font-roboto-slab text-text-secondary'>
                <p>July 14, 2025</p>
                <p>Updated 12:00 p.m. IST</p>
            </div>

            <div className='flex flex-col gap-8 mt-2 text-2xl font-roboto-slab text-text-secondary w-xl'>
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