import { Link } from "react-router-dom"

const About = () => {
    return (
        <>
            <Link to="/" className="flex gap-2 my-4 w-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="border p-1 rounded-full size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg> Home
            </Link>
            <div className='flex flex-col justify-center items-center h-[80vh]'>
                <div className='px-5 py-5 border-gray-400 rounded-md shadow-2xl w-full'>
                    <div className='flex flex-col gap-6 py-5'>
                        <h2 className='flex gap-2.5 items-center text-heading text-4xl font-bold'>
                            About
                            <span className="border rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                                </svg>
                            </span>
                        </h2>
                        <p className='text-heading text-md text-gray-600'>
                            This User List app is a simple React application built to demonstrate routing. navigation and dynamic data handling. it allows you to:
                        </p>
                        <ul className="text-gray-600">
                            <li>View a list of users</li>
                            <li>See detailed information about each user</li>
                            <li>Navigation between different pages using React Router</li>
                        </ul>
                        <div className="flex gap-2.5 p-5 rounded-md shadow-2xl">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                            </span>
                            <p>This app uses a mock data source and does not connect to a real backend.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About