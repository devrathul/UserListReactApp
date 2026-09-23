import { useParams, Link } from "react-router";


const Userdetails = (props) => {

    const { id } = useParams();

    const { userlist } = props

    const specificuserdetail = userlist.filter((eachitem) => eachitem.id == id)

    const { name, email } = specificuserdetail[0]

    return (
        <>
            <Link to="/user" className="flex gap-2 my-4 w-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="border p-1 rounded-full size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg> Users
            </Link>
            <div className='flex flex-col justify-center items-center h-[80vh]'>
                <div className='px-5 py-5 border-gray-400 rounded-md shadow-2xl w-full'>
                    <h2 className="items-center text-heading text-4xl font-bold text-center">User Details</h2>
                    <h3 className="text-md text-heading font-semibold">{name}</h3>
                    <p className="text-sm text-gray-500">{email}</p>
                </div>
            </div>
        </>
    )
}

export default Userdetails