import { useParams } from "react-router";


const Userdetails = (props) => {

    const { id } = useParams();

    const { userlist } = props

    const specificuserdetail = userlist.filter((eachitem) => eachitem.id == id)

    const { name, email } = specificuserdetail[0]

    return (
        <div>
            <h1 className="text-lg text-heading font-semibold">User Details</h1>
            <h2 className="text-md text-heading font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">{email}</p>
        </div>
    )
}

export default Userdetails