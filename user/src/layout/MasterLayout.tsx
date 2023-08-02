import {Outlet} from 'react-router-dom'
import {Header} from "../pages/Header/Header";
import {Footer} from "../pages/generalFooter/Footer";

const MasterLayout = () => {

    return (
        <>
            <Header/>
            <Outlet />
            <Footer/>
        </>
    )
}

export {MasterLayout}

