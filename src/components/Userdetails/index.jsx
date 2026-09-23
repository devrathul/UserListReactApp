import { useParams } from "react-router";


const Userdetails = (props) => {

    const { id } = useParams();

    const { userlist } = props

    const specificuserdetail = userlist.filter((eachitem) => eachitem.id == id)

    const { name, email } = specificuserdetail[0]

    return (
        <div className='flex flex-col justify-center items-center h-[80vh]'>
            <div className='px-5 py-5 border-gray-400 rounded-md shadow-2xl w-full'>
                <h2 className="items-center text-heading text-4xl font-bold text-center">User Details</h2>
                <h3 className="text-md text-heading font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">{email}</p>
            </div>
        </div>
    )
}

export default Userdetails