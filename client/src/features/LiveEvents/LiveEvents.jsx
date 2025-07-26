import React from 'react'

// Mock data simulating backend response
const eventsData = [
    {
        id: 1,
        title: "Inter clan sports",
        startTime: "2025-07-26T10:00:00Z", // Started 2 hours ago (assuming current time is 12:00)
        endTime: "2025-07-26T16:00:00Z",   // Ends at 4 PM
        description: "Annual inter-clan sports competition featuring various athletic events"
    },
    {
        id: 2,
        title: "Tech Workshop",
        startTime: "2025-07-26T11:30:00Z", // Started 30 minutes ago
        endTime: "2025-07-26T14:30:00Z",   // Ends at 2:30 PM
        description: "Hands-on workshop on modern web development technologies"
    },
    {
        id: 3,
        title: "Cultural Dance Competition",
        startTime: "2025-07-26T08:00:00Z", // Started 4 hours ago
        endTime: "2025-07-26T11:00:00Z",   // Already ended
        description: "Traditional and contemporary dance performances"
    },
    {
        id: 4,
        title: "Coding Bootcamp",
        startTime: "2025-07-26T15:00:00Z", // Starts in 3 hours
        endTime: "2025-07-26T18:00:00Z",   // Future event
        description: "Intensive coding session with industry experts"
    },
    {
        id: 5,
        title: "Art Exhibition Opening",
        startTime: "2025-07-26T11:45:00Z", // Started 15 minutes ago
        endTime: "2025-07-26T17:00:00Z",   // Ends at 5 PM
        description: "Student artwork showcase and gallery opening"
    }
]

// Utility function to calculate time difference
const getTimeAgo = (startTime) => {
    const now = new Date()
    const start = new Date(startTime)
    const diffInMinutes = Math.floor((now - start) / (1000 * 60))

    if (diffInMinutes < 1) return "Just now"
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`

    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours}h ago`

    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
}

// Function to check if an event is currently live
const isEventLive = (startTime, endTime) => {
    const now = new Date()
    const start = new Date(startTime)
    const end = new Date(endTime)

    return now >= start && now <= end
}

// Function to get only live events
const getLiveEvents = () => {
    return eventsData.filter(event => isEventLive(event.startTime, event.endTime))
}

const LiveEvents = () => {
    const liveEvents = getLiveEvents()

    if (liveEvents.length === 0) {
        return (
            <div className='container mx-auto'>
                <div className='border-t border-b mt-1 flex justify-center items-center p-4'>
                    <h1 className='uppercase text-text-secondary font-franklin'>No Live Events</h1>
                </div>
            </div>
        )
    }

    return (
        <div className='container mx-auto'>
            <div className='border-t mt-1 flex justify-center items-center gap-14 p-4'>
                <h1 className='uppercase text-brand-red font-franklin'>Live</h1>
                {liveEvents.map(event => (
                    <div key={event.id} className='font-roboto-slab flex gap-4'>
                        <h2 className='font-franklin'>
                            {event.title}
                        </h2>
                        <p className='text-brand-red text-sm'>
                            {getTimeAgo(event.startTime)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LiveEvents