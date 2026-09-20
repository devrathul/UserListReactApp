import { Outlet } from "react-router-dom"
import Header from '../components/Header'

const Root = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <div className="container m-auto">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default Root