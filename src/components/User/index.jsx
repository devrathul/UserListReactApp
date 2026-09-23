import { Link } from "react-router-dom"

const User = (props) => {

    const { userlist } = props

    return (
        <>
            <Link to="/" className="flex gap-2 my-4 w-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="border p-1 rounded-full size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg> Home
            </Link>
            <ul className="grid xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {userlist.map((eachuser) => (
                    <li className="shadow-xl p-4 rounded-2xl" key={eachuser.id}>
                        <Link className="cursor-pointer" to={`/user/${eachuser.id}`}>
                            <h2 className="text-md text-heading font-semibold">{eachuser.name}</h2>
                            <p className="text-sm text-gray-500">{eachuser.email}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default User