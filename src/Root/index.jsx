import { Outlet } from "react-router-dom"
import Header from '../components/Header'

const Root = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <div className="container m-auto md:h-[80vh]">
                    <Outlet />             
                </div>
            </main>
            <footer>
                <div className="bg-blue-950 text-white h-[12.5vh] flex flex-col justify-center text-center">
                    <p>© 2020–2026 User List. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Root