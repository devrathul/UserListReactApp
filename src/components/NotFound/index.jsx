import { Link } from "react-router-dom"

const NotFound = () => (
    <>
        <Link to="/" className="flex gap-2 my-4 w-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="border p-1 rounded-full size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg> Home
            </Link>
        <div className='flex flex-col justify-center items-center h-[80vh]'>
            <div className='px-5 py-5 border-gray-400 rounded-md w-full'>
                <h2 className="items-center text-heading text-4xl font-bold text-center">Page Not Found</h2>
            </div>
        </div>
    </>
)


export default NotFound