import cover from './assets/cover.png'
import { Profile } from './components/Profile.tsx'

export function App() {
    return (
        <header>
            <img src={cover} alt="" />
            <div className="mx-auto max-w-[min(1280px,100vw-20px)]">
                <Profile />
            </div>
        </header>
    )
}