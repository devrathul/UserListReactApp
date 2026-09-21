import { Link } from "react-router-dom"

const User = (props) => {

    const { userlist } = props

    return (
        <div>
            <h1>User</h1>
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
        </div>
    )
}

export default User