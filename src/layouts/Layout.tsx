import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

import cover from '../assets/cover.png'

export function BaseLayout() {
    return (
        <>
            <header>
                <img src={cover} alt="" draggable={false}/>
            </header>

            <Outlet/>

            <Toaster position="top-center"/>
        </>
    )
}