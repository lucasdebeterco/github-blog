import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

import cover from '../assets/cover.png'

export function BaseLayout() {
    return (
        <>
            <header>
                <img src={cover} alt="" draggable={false}/>
            </header>

            <div className="mx-auto max-w-[min(864px,100vw-60px)]">
                <Outlet/>
            </div>

            <Toaster position="top-center"/>
        </>
    )
}