import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {LayoutSplashScreen} from "./layout/core";
import {AuthInit} from './modules/auth'

const App = () => {


    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
            <AuthInit>
                <div className={'bg-body'}>
                    <Outlet/>
                </div>
            </AuthInit>
        </Suspense>
    )
}

export {App}