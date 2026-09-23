import { Link } from 'react-router-dom'

import userimg from '../../assets/images/users-img.png'

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[80vh]'>
            <div className='px-5 py-5 border-gray-400 rounded-md shadow-2xl w-full'>
                <div className='flex flex-col md:flex-row justify-items-center items-center justify-center gap-2.5'>
                    <div className='flex flex-col gap-6 shrink-2'>
                        <h2 className='text-heading text-4xl font-bold'>
                            User List
                        </h2>
                        <p className='text-heading text-md text-gray-400'>
                            This is a simple <span>React</span> application to manage users. You can view list of users, check their details and learn more about this application
                        </p>
                        <div className='flex gap-2'>
                            <Link to="/user" className='flex justify-center items-center px-4 py-3 rounded-lg gap-2 bg-blue-950 w-[160px] text-white'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                    </svg>
                                </span>
                                View Users
                            </Link>
                            <Link to="/about" className='flex justify-center items-center px-4 py-3 rounded-lg gap-2 bg-blue-950 w-[160px] text-white'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                                    </svg>
                                </span>
                                About
                            </Link>
                        </div>
                    </div>
                    <div className='shrink'><img className='w-96' src={userimg} alt="users" title="users" /></div>
                </div>
            </div>
        </div>
    )
}

export default Home