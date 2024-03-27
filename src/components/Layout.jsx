import { Outlet } from "react-router-dom";
import Navigation from "./Navigation"

const Layout =() =>{
    return <>
    <Navigation />

    <main className="container">
        <Outlet />
    </main>
    </>
}
export default Layout;