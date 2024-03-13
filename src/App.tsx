import { Toaster } from 'react-hot-toast'

import cover from './assets/cover.png'
import { PostsList } from './components/PostsList.tsx'
import { Profile } from './components/Profile.tsx'

export function App() {
    return (
        <div>
            <header>
                <img src={cover} alt="" draggable={false}/>
            </header>

            <div className="mx-auto max-w-[min(864px,100vw-60px)]">
                <Profile/>
                <PostsList />
            </div>

            <Toaster position="top-center" />
        </div>
    )
}